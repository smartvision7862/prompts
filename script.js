const promptsData = [
    { title: "Discover My Personal Brand", icon: "🎯", text: "I want to build a personal brand around [industry/topic]. Ask me questions about my skills, experience, values, personality, goals, and target audience. Then define my unique positioning, content pillars, brand voice, and long-term branding strategy." },
    { title: "Create a 90-Day Content Plan", icon: "📊", text: "Build a detailed 90-day content calendar for LinkedIn, X, Instagram, or YouTube. Include posting frequency, content pillars, post formats, hooks, CTAs, engagement ideas, and weekly goals." },
    { title: "Generate Viral Content Ideas", icon: "✍️", text: "Based on my niche [mention niche], generate 100 high-value content ideas that educate, entertain, or inspire my audience. Categorize them into beginner, intermediate, trending, and evergreen topics." },
    { title: "Analyze My Audience", icon: "🧠", text: "Help me understand my target audience in detail. Create audience personas including demographics, goals, pain points, fears, questions, buying behavior, preferred platforms, and the type of content they love." },
    { title: "Optimize My Social Profiles", icon: "📱", text: "Review my LinkedIn, Instagram, X, or YouTube profile. Suggest improvements for my headline, bio, profile photo, banner, featured section, About section, and overall profile to attract followers and opportunities." },
    { title: "Grow My Audience Organically", icon: "📈", text: "Create a step-by-step strategy to grow my audience organically without paid ads. Include networking, collaborations, SEO, hashtags, engagement techniques, and community-building tactics." },
    { title: "Improve My Writing Style", icon: "💬", text: "Analyze my writing samples and help me improve clarity, storytelling, readability, emotional impact, and engagement. Create daily writing exercises tailored to my weaknesses." },
    { title: "Create Video Content Easily", icon: "🎥", text: "I want to start creating videos but don't know where to begin. Create a beginner-friendly strategy covering video ideas, scripting, recording, editing, publishing, and consistency." },
    { title: "Never Run Out of Content", icon: "🗓", text: "Create a repeatable content ideation system that helps me generate fresh post ideas every week based on industry trends, audience questions, personal experiences, and news." },
    { title: "Turn My Knowledge Into Content", icon: "💡", text: "I have expertise in [topic]. Show me how to convert my daily work, learning, projects, and experiences into engaging social media posts, articles, newsletters, and videos." },
    { title: "Build an Engaged Community", icon: "🤝", text: "Teach me how to build a loyal community instead of just increasing follower count. Include engagement strategies, conversation starters, community events, and trust-building techniques." },
    { title: "Analyze My Content Performance", icon: "📊", text: "I'll share my recent posts and analytics. Analyze what's working, what's not, and suggest improvements to increase reach, engagement, shares, saves, and follower growth." },
    { title: "Monetize My Personal Brand", icon: "💰", text: "Suggest multiple ways to monetize my personal brand through consulting, courses, digital products, memberships, sponsorships, affiliate marketing, speaking engagements, and coaching." },
    { title: "Build Authority in My Industry", icon: "🌍", text: "Create a strategy that positions me as a trusted expert in [industry]. Include content types, networking strategies, collaborations, speaking opportunities, and credibility-building activities." },
    { title: "Create Educational Content", icon: "📚", text: "Help me simplify complex topics in my niche into beginner-friendly posts, carousels, videos, and infographics that are easy to understand and highly shareable." },
    { title: "Use AI for Content Creation", icon: "🤖", text: "Design an AI-powered content workflow using ChatGPT and other AI tools for research, idea generation, writing, editing, repurposing, scheduling, and analytics." },
    { title: "Build a Newsletter", icon: "📈", text: "Help me launch and grow an email newsletter. Create a content strategy, lead magnet ideas, welcome sequence, publishing schedule, and subscriber growth plan." },
    { title: "Content Repurposing System", icon: "🎯", text: "Show me how to turn one long-form article or video into multiple LinkedIn posts, tweets, reels, newsletters, blog posts, and short videos with minimal extra effort." },
    { title: "Personal Brand Dashboard", icon: "📋", text: "Design a dashboard to track follower growth, engagement rate, profile visits, leads generated, newsletter subscribers, content consistency, and revenue from my personal brand." },
    { title: "One-Year Brand Growth Plan", icon: "🚀", text: "Build a month-by-month roadmap to grow my personal brand over the next year. Include follower milestones, content goals, networking targets, collaborations, monetization plans, and performance metrics." },
    { title: "Become My Branding Coach", icon: "🔥", text: "Act as a personal branding expert with 20+ years of experience. Continuously review my content, challenge my ideas, improve my messaging, identify growth opportunities, and help me build a respected and profitable personal brand." }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('prompts-container');
    
    // Generate cards
    promptsData.forEach((prompt, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="card-header">
                <div class="prompt-number">${prompt.icon}</div>
                <h3 class="prompt-title">${index + 1}. ${prompt.title}</h3>
            </div>
            <div class="prompt-text">${prompt.text}</div>
            <button class="copy-btn" onclick="copyPrompt(this, \`${prompt.text.replace(/`/g, '\\`')}\`)">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        `;
        
        container.appendChild(card);
    });

    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.prompt-card').forEach(card => {
        observer.observe(card);
    });

    // Setup toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fa-solid fa-check-circle"></i> Prompt copied to clipboard!';
    document.body.appendChild(toast);
});

window.copyPrompt = function(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        // Change button icon and text temporarily
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.background = '#10b981';
        btn.style.color = 'white';
        
        // Show toast
        const toast = document.querySelector('.toast');
        toast.classList.add('show');
        
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.style.background = '';
            btn.style.color = '';
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};
