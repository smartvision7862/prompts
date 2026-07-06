const fs = require('fs');
const https = require('https');
const path = require('path');
const csv = require('csv-parser');

const PROMPTS_FILE = path.join(__dirname, '../prompts.json');

function cleanOldPrompts() {
    try {
        const data = fs.readFileSync(PROMPTS_FILE, 'utf8');
        const promptsObj = JSON.parse(data);
        const now = new Date();
        const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;
        
        let deletedCount = 0;
        
        for (let category in promptsObj) {
            const originalLength = promptsObj[category].length;
            promptsObj[category] = promptsObj[category].filter(prompt => {
                if (!prompt.date_added) return true;
                const promptDate = new Date(prompt.date_added);
                return (now - promptDate) <= TEN_DAYS_MS;
            });
            deletedCount += (originalLength - promptsObj[category].length);
        }
        
        return { promptsObj, deletedCount };
    } catch (err) {
        console.error('Error cleaning prompts:', err);
        process.exit(1);
    }
}

function fetchNewChatGPTPrompts(promptsObj, onComplete) {
    const results = [];
    https.get('https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv', (res) => {
        res.pipe(csv())
           .on('data', (data) => results.push(data))
           .on('end', () => {
               let addedCount = 0;
               // Pick 2 random prompts
               for(let i = 0; i < 2; i++) {
                   const randomPrompt = results[Math.floor(Math.random() * results.length)];
                   if (randomPrompt && randomPrompt.act && randomPrompt.prompt) {
                       if(!promptsObj.automation) promptsObj.automation = [];
                       promptsObj.automation.unshift({
                           title: randomPrompt.act + ' (Daily AI Pick)',
                           icon: '🤖',
                           text: randomPrompt.prompt,
                           date_added: new Date().toISOString()
                       });
                       addedCount++;
                   }
               }
               console.log(`Added ${addedCount} ChatGPT prompts.`);
               onComplete();
           });
    }).on('error', (err) => {
        console.error('Failed to fetch ChatGPT prompts:', err);
        onComplete();
    });
}

function fetchNewMidjourneyPrompts(promptsObj, onComplete) {
    // There are ~220,000 prompts. Pick a random offset.
    const randomOffset = Math.floor(Math.random() * 200000);
    const url = `https://datasets-server.huggingface.co/rows?dataset=succinctly%2Fmidjourney-prompts&config=default&split=train&offset=${randomOffset}&length=3`;

    https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                let addedCount = 0;
                
                if (json.rows && json.rows.length > 0) {
                    if(!promptsObj.video_ai) promptsObj.video_ai = [];
                    
                    json.rows.forEach(row => {
                        const promptText = row.row.text;
                        // Skip very short ones
                        if (promptText && promptText.length > 20) {
                            promptsObj.video_ai.unshift({
                                title: "Midjourney Daily Pick",
                                icon: "🎨",
                                text: promptText,
                                date_added: new Date().toISOString()
                            });
                            addedCount++;
                        }
                    });
                }
                console.log(`Added ${addedCount} Midjourney prompts.`);
            } catch (err) {
                console.error('Failed to parse Midjourney JSON', err);
            }
            onComplete();
        });
    }).on('error', (err) => {
        console.error('Failed to fetch Midjourney prompts:', err);
        onComplete();
    });
}

const { promptsObj, deletedCount } = cleanOldPrompts();

fetchNewChatGPTPrompts(promptsObj, () => {
    fetchNewMidjourneyPrompts(promptsObj, () => {
        fs.writeFileSync(PROMPTS_FILE, JSON.stringify(promptsObj, null, 4));
        console.log(`Successfully completed daily update. Deleted old prompts: ${deletedCount}`);
    });
});
