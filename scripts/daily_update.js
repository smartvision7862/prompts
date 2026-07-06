const fs = require('fs');
const path = require('path');

const PROMPTS_FILE = path.join(__dirname, '../prompts.json');

function cleanOldPrompts() {
    try {
        const data = fs.readFileSync(PROMPTS_FILE, 'utf8');
        const promptsObj = JSON.parse(data);
        const now = new Date();
        const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;
        
        let deletedCount = 0;
        
        // Iterate through all categories to delete prompts older than 10 days
        for (let category in promptsObj) {
            const originalLength = promptsObj[category].length;
            promptsObj[category] = promptsObj[category].filter(prompt => {
                if (!prompt.date_added) return true; // Keep if no date is found
                const promptDate = new Date(prompt.date_added);
                const isOld = (now - promptDate) > TEN_DAYS_MS;
                return !isOld;
            });
            deletedCount += (originalLength - promptsObj[category].length);
        }
        
        fs.writeFileSync(PROMPTS_FILE, JSON.stringify(promptsObj, null, 4));
        console.log(`Successfully removed ${deletedCount} old prompts.`);
    } catch (err) {
        console.error('Error cleaning prompts:', err);
        process.exit(1);
    }
}

cleanOldPrompts();
