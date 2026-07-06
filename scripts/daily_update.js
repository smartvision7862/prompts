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

function fetchNewPrompts(promptsObj, deletedCount) {
    const results = [];
    https.get('https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv', (res) => {
        res.pipe(csv())
           .on('data', (data) => results.push(data))
           .on('end', () => {
               let addedCount = 0;
               
               // Pick 3 random prompts
               for(let i = 0; i < 3; i++) {
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
               
               fs.writeFileSync(PROMPTS_FILE, JSON.stringify(promptsObj, null, 4));
               console.log(`Successfully updated prompts. Deleted: ${deletedCount}, Added: ${addedCount}`);
           });
    }).on('error', (err) => {
        console.error('Failed to fetch new prompts:', err);
        fs.writeFileSync(PROMPTS_FILE, JSON.stringify(promptsObj, null, 4));
    });
}

const { promptsObj, deletedCount } = cleanOldPrompts();
fetchNewPrompts(promptsObj, deletedCount);
