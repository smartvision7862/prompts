
        const promptsData = {
            branding: [
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
            ],
            interview: [
                { title: "Create My Interview Prep Plan", icon: "🎯", text: "I have an interview for the role of [Job Title] at [Company] in [X] days. Create a personalized interview preparation plan with daily goals, technical topics, behavioral questions, mock interviews, company research tasks, and confidence-building exercises." },
                { title: "Analyze My Resume Like a Recruiter", icon: "📄", text: "Review my resume [paste resume]. Identify weak areas, missing achievements, unclear bullet points, and ATS issues. Then predict the interview questions a recruiter is most likely to ask based on my resume." },
                { title: "Research the Company Thoroughly", icon: "🏢", text: "I have an interview with [Company]. Create a detailed company research brief covering its business model, products, competitors, recent news, financial performance, culture, leadership, and likely interview questions related to the company." },
                { title: "Generate Role-Specific Questions", icon: "❓", text: "I’m interviewing for a [Job Title] position with [X] years of experience. Generate 100 realistic interview questions covering technical knowledge, behavioral scenarios, problem-solving, and situational judgment. Organize them by difficulty." },
                { title: "Conduct a Mock Interview", icon: "🎤", text: "Act as an experienced interviewer for a [Job Title] role. Ask me one interview question at a time, wait for my answer, evaluate it like a hiring manager, suggest improvements, and then move to the next question." },
                { title: "Improve My Interview Answers", icon: "💬", text: "I'll paste my answer to an interview question. Rewrite it using the STAR method, improve clarity, highlight measurable achievements, and make it sound confident, professional, and authentic." },
                { title: "Identify My Weak Areas", icon: "📊", text: "Based on my resume, experience, and target role, identify the skills or knowledge gaps that may reduce my interview performance. Create a focused improvement plan to address them before the interview." },
                { title: "Master Behavioral Interviews", icon: "🧠", text: "Teach me how to answer behavioral interview questions using the STAR method. Generate 30 common behavioral questions and provide examples of strong, structured answers." },
                { title: "Prepare for Technical Interviews", icon: "💼", text: "I’m interviewing for a [Job Title] role. Create a technical interview preparation roadmap covering key concepts, hands-on exercises, coding challenges if applicable, and practical scenarios likely to appear." },
                { title: "Prepare for Case Study Questions", icon: "📈", text: "Generate realistic case studies and scenario-based interview questions for my target role. After I answer, evaluate my reasoning, communication, and decision-making." },
                { title: "Improve My Communication", icon: "🗣", text: "Evaluate how I communicate during interviews. Help me improve my confidence, clarity, tone, body language, storytelling, and ability to answer concisely." },
                { title: "Build Strong Self-Introduction", icon: "📝", text: "Help me create a powerful ‘Tell me about yourself’ answer tailored to my background, achievements, and the job I'm applying for. Keep it engaging, professional, and under 2 minutes." },
                { title: "Prepare for Salary Negotiation", icon: "💰", text: "Teach me how to confidently negotiate salary after receiving a job offer. Include preparation steps, negotiation scripts, common mistakes, and responses to employer objections." },
                { title: "Create an Interview Cheat Sheet", icon: "📋", text: "Based on my target role, prepare a one-page interview revision sheet with key concepts, formulas, frameworks, achievements, questions to ask the interviewer, and last-minute reminders." },
                { title: "Answer Tough Interview Questions", icon: "🤝", text: "Generate difficult interview questions such as employment gaps, career changes, failures, weaknesses, conflicts, layoffs, and low grades. Help me answer them honestly and professionally." },
                { title: "Build Interview Confidence", icon: "📚", text: "I get nervous before interviews. Create a 7-day confidence-building routine with mock interviews, breathing exercises, visualization, and communication drills." },
                { title: "Prepare Follow-Up Communication", icon: "📧", text: "Help me write professional thank-you emails, follow-up emails, and response templates after interviews. Explain when each should be sent and what they should include." },
                { title: "Prepare for HR & Panel Interviews", icon: "🌍", text: "Explain the differences between HR, hiring manager, technical, and panel interviews. Create preparation strategies and sample questions for each interview stage." },
                { title: "Analyze My Interview Performance", icon: "🏆", text: "After every interview, I'll share the questions I was asked and my answers. Analyze my performance, identify mistakes, suggest stronger responses, and create an improvement plan for the next interview." },
                { title: "Build a 30-Day Mastery Plan", icon: "📅", text: "I want to become interview-ready within 30 days. Create a complete day-by-day preparation schedule including technical learning, behavioral practice, mock interviews, resume review, company research, and confidence-building." },
                { title: "Become My Personal Interview Coach", icon: "🔥", text: "Act as a senior interviewer with 20+ years of hiring experience. Continuously coach me throughout my interview preparation by challenging my answers, identifying blind spots, improving my communication, and ensuring I become one of the strongest candidates." }
            ],
            content: [
                { title: "Viral LinkedIn Posts", icon: "🔗", text: "Act as a LinkedIn growth expert. First ask about my niche, audience, goals, and writing style. Then create high-engagement LinkedIn posts with strong hooks and CTAs." },
                { title: "Instagram Content Ideas", icon: "📸", text: "Act as a social media strategist. Ask about my niche, audience, and content goals. Then generate viral Instagram post ideas." },
                { title: "YouTube Script Writing", icon: "▶️", text: "Act as a YouTube scriptwriter. Ask about my target audience, video topic, and tone. Then create an engaging YouTube script with hook, storytelling, and CTA." },
                { title: "Twitter/X Thread Creation", icon: "🐦", text: "Act as a Twitter growth expert and create a high-retention thread on this topic." },
                { title: "Blog Writing", icon: "✍️", text: "Act as an SEO content writer. Create a detailed blog article with headings, examples, and optimized structure." },
                { title: "Carousel Post Creation", icon: "🎠", text: "Act as a content strategist and create an Instagram/LinkedIn carousel outline with slide-by-slide content." },
                { title: "Content Calendar", icon: "🗓️", text: "Act as a content strategist. Ask about my niche, posting frequency, and goals. Then create a monthly content calendar." },
                { title: "Caption Writing", icon: "📝", text: "Write engaging captions with hooks, storytelling, emojis, and CTA." },
                { title: "Hook Generation", icon: "🎣", text: "Generate 30 viral hooks for content related to my niche." },
                { title: "Content Repurposing", icon: "♻️", text: "Convert this YouTube script into LinkedIn posts, tweets, Instagram captions, and short-form video ideas." },
                { title: "Storytelling Framework", icon: "📖", text: "Act as a storytelling expert and rewrite this content using emotional storytelling." },
                { title: "SEO Optimization", icon: "🔍", text: "Optimize this article for SEO with keywords, headings, and readability improvements." },
                { title: "Personal Branding Strategy", icon: "💎", text: "Act as a personal branding coach. Ask about my goals and audience. Then create a branding strategy." },
                { title: "Viral Video Ideas", icon: "🎬", text: "Generate viral short-form video ideas for my niche with hooks and captions." },
                { title: "Email Newsletter Writing", icon: "📧", text: "Act as a newsletter writer and create a valuable email newsletter with engaging subject lines." },
                { title: "Audience Research", icon: "🕵️", text: "Analyze my target audience and suggest content ideas they are most likely to engage with." },
                { title: "Content Improvement", icon: "✨", text: "Rewrite this content to make it more engaging, clear, and professional." },
                { title: "Call-To-Action Ideas", icon: "🎯", text: "Generate strong CTA ideas for improving engagement and conversions." },
                { title: "Content Strategy", icon: "🗺️", text: "Create a 90-day content strategy focused on growth, engagement, and consistency." },
                { title: "Short Video Scripts", icon: "📱", text: "Create short-form video scripts with hook, value, and CTA optimized for Instagram Reels and YouTube Shorts." },
                { title: "Content Batching Workflow", icon: "📦", text: "Create a content batching workflow for creating one month of content efficiently." },
                { title: "AI Content Assistant", icon: "🤖", text: "Act as my AI content assistant and help me brainstorm, write, optimize, and repurpose content daily." },
                { title: "Improve Writing Style", icon: "✏️", text: "Analyze my writing style and suggest improvements for clarity, engagement, and retention." },
                { title: "Educational Content Creation", icon: "🎓", text: "Create beginner-friendly educational content with examples and simplified explanations." },
                { title: "Social Media Growth Plan", icon: "📈", text: "Act as a growth strategist. Create a social media growth roadmap with content ideas, posting strategy, and engagement tactics." }
            ],
            roadmap: [
                { title: "Phase 1: AI Fundamentals", icon: "🧠", text: "✅ What is Artificial Intelligence?\n✅ Types of AI: ANI, AGI, ASI\n✅ Machine Learning vs Deep Learning vs Generative AI\n✅ Supervised, Unsupervised & Reinforcement Learning\n✅ Neural Networks Basics\n✅ Large Language Models (LLMs)\n✅ Tokens & Context Windows\n✅ Embeddings\n✅ Vector Databases\n✅ Prompt Engineering\n✅ RAG (Retrieval-Augmented Generation)\n✅ AI Agents\n✅ Fine-Tuning\n✅ AI Safety & Responsible AI" },
                { title: "Phase 2: Essential Programming", icon: "💻", text: "✅ Python\n✅ SQL\n✅ Git & GitHub\n✅ REST APIs\n✅ JSON\n✅ FastAPI" },
                { title: "Phase 3: Core AI Libraries", icon: "📚", text: "✅ NumPy\n✅ Pandas\n✅ Scikit-learn\n✅ PyTorch\n✅ Transformers" },
                { title: "Phase 4: Generative AI Tools", icon: "🛠️", text: "✅ OpenAI API\n✅ Hugging Face\n✅ Ollama\n✅ LangChain\n✅ LangGraph\n✅ LlamaIndex\n✅ CrewAI\n✅ AutoGen" },
                { title: "Phase 5: Vector Databases", icon: "🗄️", text: "✅ ChromaDB\n✅ Pinecone\n✅ Weaviate\n✅ FAISS" },
                { title: "Phase 6: AI App Development", icon: "📱", text: "✅ Streamlit\n✅ Gradio\n✅ FastAPI\n✅ Docker\n✅ Redis\n✅ PostgreSQL" },
                { title: "Phase 7: AI Automation Tools", icon: "⚙️", text: "✅ n8n\n✅ Flowise\n✅ Dify\n✅ Make\n✅ Zapier" },
                { title: "Phase 8: Deployment & MLOps", icon: "🚀", text: "✅ Docker\n✅ GitHub Actions\n✅ MLflow\n✅ Weights & Biases\n✅ AWS / Azure / Google Cloud" },
                { title: "Phase 9: Build Real Projects", icon: "🏆", text: "✅ AI Chatbot\n✅ PDF Chat with RAG\n✅ AI Coding Assistant\n✅ Customer Support Bot\n✅ Resume Analyzer\n✅ Research Assistant\n✅ Multi-Agent AI System\n✅ Enterprise Knowledge Assistant" },
                { title: "AI Resources", icon: "🔗", text: "Get the full course:\nhttps://learn.nextfutureai.in/web/checkout/6a080257fef35bfdff106b9c" }
            ],
            google: [
                { title: "Google’s Full-Stack AI Ecosystem", icon: "🌐", text: "Google is building one of the most complete AI ecosystems, connecting every stage of the AI lifecycle:\n\n🔹 Foundation Models: Gemini, Gemini Flash, Gemma\n🔹 Video Creation: Veo, Flow, Google Vids\n🔹 Design & Prototyping: Stitch, Whisk, Nanobanana\n🔹 Research & Knowledge: NotebookLM, AI Mode\n🔹 Development: Gemini CLI, Jules\n🔹 AI Agents: Google ADK, A2A" },
                { title: "The Real Power", icon: "💡", text: "The real power isn't in individual tools—it's in how they work together across research, design, development, and deployment." },
                { title: "Key Takeaway", icon: "🎯", text: "The future belongs to professionals who understand how to leverage complete AI ecosystems, not just individual AI tools." }
            ],
            productivity: [
                { title: "Career Clarity", icon: "1️⃣", text: "Act as a professional career coach. I have skills in writing, research, and a strong curiosity for technology. Based on current job market trends, suggest 3 ideal career paths that align with my strengths. Include required skills, salary range (India + US), and entry strategies." },
                { title: "Resume Writing", icon: "2️⃣", text: "You're a resume expert with experience in tech roles. Rewrite my resume for a data analyst position with 2 years of experience. Emphasize measurable impact, keywords for ATS, and tailor it for jobs in the US and India. Ask me for missing details if needed." },
                { title: "Learning Assistant", icon: "3️⃣", text: "Act like a personal tutor. Create a beginner-friendly SQL learning plan split into 5 lessons. For each lesson, include theory, examples, 3 practice questions, and 1 real-world task." },
                { title: "Public Speaking", icon: "4️⃣", text: "Act as a speech coach. Help me write a 2-minute confident elevator pitch for a networking event. I’m a software developer looking to switch into AI roles. Make it clear, natural, and impressive." },
                { title: "Time Management", icon: "5️⃣", text: "You're a productivity expert. Design a weekly schedule for someone managing a full-time job (9–6), a weekend online course, and personal development time (learning AI). Include time for breaks, focus blocks, and habit building." },
                { title: "LinkedIn Growth", icon: "6️⃣", text: "Act as a personal branding coach. I’m a junior software developer looking to grow on LinkedIn. Suggest 3 post ideas that are likely to get high engagement — one based on storytelling, one educational, and one thought-provoking." },
                { title: "Freelancing", icon: "7️⃣", text: "You're a freelancing mentor. I have skills in Canva design and using ChatGPT effectively. Recommend 5 Fiverr gig ideas I can start with, including exact gig titles, descriptions, and pricing tips." },
                { title: "Presentation Skills", icon: "8️⃣", text: "Act as a design consultant. Help me create a slide deck outline for a 10-minute pitch on 'How AI is transforming education'. Include slide titles, bullet points, visual ideas, and tips for better storytelling." },
                { title: "Negotiation", icon: "9️⃣", text: "Act as a career advisor. I have 2 years of experience and strong performance reviews. Guide me step-by-step on how to negotiate a 20% salary hike during my appraisal. Include sample conversation lines and tips to handle objections." },
                { title: "Reading & Note-Taking", icon: "🔟", text: "Act as a reading coach. Summarize the book [Atomic Habits] into 5 main lessons. For each, give a practical action step and 1 quote to remember. Format it for easy note-taking or flashcards." }
            ],
            shortcuts: [
                { title: "1. New Chat", icon: "⌨️", text: "Ctrl/Cmd + Shift + O" },
                { title: "2. Show Keyboard Shortcuts", icon: "⌨️", text: "Ctrl/Cmd + /" },
                { title: "3. Multi-line Prompt", icon: "⌨️", text: "Shift + Enter" },
                { title: "4. Search in Conversation", icon: "⌨️", text: "Ctrl/Cmd + F" },
                { title: "5. Copy Selected Text", icon: "⌨️", text: "Ctrl/Cmd + C" },
                { title: "6. Paste Text", icon: "⌨️", text: "Ctrl/Cmd + V" },
                { title: "7. Undo Typing", icon: "⌨️", text: "Ctrl/Cmd + Z" },
                { title: "8. Redo Typing", icon: "⌨️", text: "Ctrl/Cmd + Shift + Z" },
                { title: "9. Select All Text", icon: "⌨️", text: "Ctrl/Cmd + A" },
                { title: "10. Open New Tab", icon: "⌨️", text: "Ctrl/Cmd + T" },
                { title: "11. Close Current Tab", icon: "⌨️", text: "Ctrl/Cmd + W" },
                { title: "12. Reopen Closed Tab", icon: "⌨️", text: "Ctrl/Cmd + Shift + T" },
                { title: "13. Switch Tabs", icon: "⌨️", text: "Ctrl/Cmd + Tab" },
                { title: "14. Refresh ChatGPT", icon: "⌨️", text: "Ctrl/Cmd + R" },
                { title: "15. Zoom In", icon: "⌨️", text: "Ctrl/Cmd + +" },
                { title: "16. Zoom Out", icon: "⌨️", text: "Ctrl/Cmd + -" },
                { title: "17. Reset Zoom", icon: "⌨️", text: "Ctrl/Cmd + 0" },
                { title: "18. Bookmark ChatGPT", icon: "⌨️", text: "Ctrl/Cmd + D" },
                { title: "19. Print Chat", icon: "⌨️", text: "Ctrl/Cmd + P" },
                { title: "20. Save Page", icon: "⌨️", text: "Ctrl/Cmd + S" },
                { title: "21. Open Browser History", icon: "⌨️", text: "Ctrl/Cmd + H" },
                { title: "22. Open Downloads", icon: "⌨️", text: "Ctrl/Cmd + J" },
                { title: "23. Open Incognito Window", icon: "⌨️", text: "Ctrl/Cmd + Shift + N" },
                { title: "24. Full Screen Mode", icon: "⌨️", text: "F11" },
                { title: "25. Exit Full Screen", icon: "⌨️", text: "Esc" },
                { title: "📝 Note", icon: "ℹ️", text: "Use Ctrl for Windows/Linux\nUse Cmd (⌘) for Mac" }
            ],
            ai_skills: [
                { title: "Prompt Engineering", icon: "01", text: "Learn to write clear, task-specific prompts that help AI models like ChatGPT, Claude and Gemini produce accurate and useful results.\n\n🛠️ Tools: ChatGPT, Claude, Gemini, DeepSeek" },
                { title: "AI Workflow Automation", icon: "02", text: "Use tools like Zapier, lindy AI, and n8n to connect apps and set up time-saving automation, no coding is needed.\n\n🛠️ Tools: Zapier, Gumloop, n8n, Lindy AI" },
                { title: "AI Agents", icon: "03", text: "Build multi-agent systems using platforms like CrewAI and LangChain, to complete tasks that require reasoning, coordination, and memory.\n\n🛠️ Tools: CrewAI, Cobra, LangGraph, LangChain" },
                { title: "Retrieval-Augmented Generation (RAG)", icon: "04", text: "Connect AI models to your own data using frameworks to generate more accurate, source-backed answers.\n\n🛠️ Tools: LangChain, LlamaIndex, Milvus, Haystack" },
                { title: "Multimodal AI", icon: "05", text: "Use advanced models like ChatGPT, Claude, Gemini, and Grok that can understand text, images, code, and audio in a single chat.\n\n🛠️ Tools: ChatGPT, Claude, Gemini, Grok" },
                { title: "Fine-Tuning and AI Assistants", icon: "06", text: "Create domain-specific AI assistants or fine-tune models using platforms like OpenAI, Hugging Face, and NVIDIA NeMo.\n\n🛠️ Tools: Cohere, OpenAI, Hugging Face, NVIDIA NeMo" },
                { title: "Voice AI and Avatars", icon: "07", text: "Generate realistic voiceovers and talking avatars for videos or training using tools like Retell AI, ElevenLabs, HeyGen, and Synthesia.\n\n🛠️ Tools: Retell AI, ElevenLabs, Synthesia, HeyGen" },
                { title: "AI Tool Stacking", icon: "08", text: "Combine platforms like Softr, ClickUp, HighLevel, and Notion to build custom AI workflows across various tasks and automation.\n\n🛠️ Tools: Softr, ClickUp, Notion, HighLevel" },
                { title: "AI Video Content Generation", icon: "09", text: "Turn text or scripts into videos using tools like Higgsfield AI, Descript, and OpusClip. Add voice, edit scenes, and create faster.\n\n🛠️ Tools: Higgsfield AI, Runway, OpusClip, Descript" },
                { title: "SaaS Development", icon: "10", text: "Use no-code builders like Lovable, Replit, Claude Code, and Google Antigravity to build SaaS apps with AI features and real user workflows.\n\n🛠️ Tools: Lovable, Google Antigravity, Replit, Claude Code" },
                { title: "LLM Management", icon: "11", text: "Track accuracy, latency, and cost using platforms like Fromployer, Helicone, Phoenix, and Trulens to improve how your AI performs.\n\n🛠️ Tools: Fromployer, Helicone, Phoenix, Trulens" },
                { title: "Staying Updated", icon: "12", text: "Follow top tech sites like The Verge, TechCrunch, and Hacker News to stay on top of news, product updates, and breakthroughs.\n\n🛠️ Tools: The Verge, TechCrunch, Hacker News, MIT Tech Review" },
                { title: "Conclusion", icon: "💡", text: "THE BEST TIME TO LEARN AI WAS YESTERDAY. THE SECOND BEST TIME IS NOW." }
            ],
            claude: [
                { title: "1. /DECLINE [email]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Polite refusal." },
                { title: "2. /SHORTEN [email]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Half the length, key points kept." },
                { title: "3. /WARMER [email]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Less stiff." },
                { title: "4. /FOLLOWUP [topic]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Nudge for an unanswered email." },
                { title: "5. /SAYNO [request]", category: "EMAIL & MESSAGES", icon: "🪄", text: "A no that protects the relationship." },
                { title: "6. /BULLETS2EMAIL [bullets]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Bullets into a clean email." },
                { title: "7. /THANKS [person + reason]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Short, sincere thank-you." },
                { title: "8. /CONFIDENT [email]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Strips hedging and apology." },
                { title: "9. /OOO [dates + backup]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Out-of-office auto-reply." },
                { title: "10. /HARDMSG [person + topic]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Hard message, respectful." },
                { title: "11. /INTRO [person A + person B + context]", category: "EMAIL & MESSAGES", icon: "🪄", text: "Double opt-in intro." },
                { title: "12. /PROOF [text]", category: "WRITE & EDIT", icon: "🪄", text: "Fixes typos." },
                { title: "13. /REWRITE5 [sentence]", category: "WRITE & EDIT", icon: "🪄", text: "Five versions." },
                { title: "14. /CUTHALF [text]", category: "WRITE & EDIT", icon: "🪄", text: "Cuts length." },
                { title: "15. /OPENERS [text]", category: "WRITE & EDIT", icon: "🪄", text: "Three stronger opening lines." },
                { title: "16. /FILLER [text]", category: "WRITE & EDIT", icon: "🪄", text: "Flags weak words." },
                { title: "17. /ACTIVE [text]", category: "WRITE & EDIT", icon: "🪄", text: "Passive to active." },
                { title: "18. /HUMAN [text]", category: "WRITE & EDIT", icon: "🪄", text: "AI-sounding text made natural." },
                { title: "19. /EXAMPLES [text]", category: "WRITE & EDIT", icon: "🪄", text: "Adds examples." },
                { title: "20. /SIMPLIFY [text]", category: "WRITE & EDIT", icon: "🪄", text: "Rewrites at a 12-year-old level." },
                { title: "21. /TITLES [text]", category: "WRITE & EDIT", icon: "🪄", text: "Title options." },
                { title: "22. /TONE [text + vibe]", category: "WRITE & EDIT", icon: "🪄", text: "Rewrites text in a chosen tone." },
                { title: "23. /CHOOSE [A vs B]", category: "THINK & DECIDE", icon: "🪄", text: "Weighs options." },
                { title: "24. /REALPC [decision]", category: "THINK & DECIDE", icon: "🪄", text: "Pros and cons." },
                { title: "25. /BLINDSPOT [situation]", category: "THINK & DECIDE", icon: "🪄", text: "Surfaces what you might miss." },
                { title: "26. /STEELMAN [view]", category: "THINK & DECIDE", icon: "🪄", text: "Opposing view." },
                { title: "27. /DEVIL [idea]", category: "THINK & DECIDE", icon: "🪄", text: "Devil's advocate." },
                { title: "28. /SKEPTIC [plan]", category: "THINK & DECIDE", icon: "🪄", text: "Skeptic's questions." },
                { title: "29. /STEPS [problem]", category: "THINK & DECIDE", icon: "🪄", text: "Walks it through one step at a time." },
                { title: "30. /RIPPLE [decision]", category: "THINK & DECIDE", icon: "🪄", text: "Maps second-order consequences." },
                { title: "31. /PREMORTEM [plan]", category: "THINK & DECIDE", icon: "🪄", text: "How it may fail." },
                { title: "32. /MINTEST [project]", category: "THINK & DECIDE", icon: "🪄", text: "Smallest version to test in a week." },
                { title: "33. /ELI10 [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Explained for a ten-year-old." },
                { title: "34. /PRIMER [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Quick crash course." },
                { title: "35. /MYTHS [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Common misconceptions." },
                { title: "36. /ANALOGY [concept]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Real-world comparison." },
                { title: "37. /QUIZ [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Five questions." },
                { title: "38. /COMPARE [A vs B]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Differences." },
                { title: "39. /PREREQ [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "What to know." },
                { title: "40. /SUM3 [text]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Three-bullet summary." },
                { title: "41. /GLOSSARY [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Defines key terms." },
                { title: "42. /ASKBETTER [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "Questions you should be asking." },
                { title: "43. /MENTALMODEL [topic]", category: "LEARN & UNDERSTAND", icon: "🪄", text: "The one model that unlocks it." },
                { title: "44. /WEEK [priorities]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Plan your week." },
                { title: "45. /MILESTONES [goal + deadline]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Weekly checkpoints to the goal." },
                { title: "46. /PACK [trip]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Packing list." },
                { title: "47. /SCHEDULE [event + duration]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Timed schedule." },
                { title: "48. /ROUTINE [goal]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Daily routine." },
                { title: "49. /PRIORITIZE [list]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Reorders a messy to-do list." },
                { title: "50. /MEALS [ingredients/constraints]", category: "PLAN & ORGANIZE", icon: "🪄", text: "A week of dinners." },
                { title: "51. /AGENDA [topic + duration]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Meeting agenda." },
                { title: "52. /PREPTIME [event + time available]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Prep plan within the deadline." },
                { title: "53. /ORDER [tasks]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Sequences tasks." },
                { title: "54. /CHECKLIST [task]", category: "PLAN & ORGANIZE", icon: "🪄", text: "Step-by-step checklist to run it." },
                { title: "55. /IDEAS20 [topic]", category: "BRAINSTORM", icon: "🪄", text: "Twenty ideas." },
                { title: "56. /GIFTS [person + occasion + budget]", category: "BRAINSTORM", icon: "🪄", text: "Gift options." },
                { title: "57. /NAMES [thing + vibe]", category: "BRAINSTORM", icon: "🪄", text: "Name ideas." },
                { title: "58. /UNUSUAL [problem]", category: "BRAINSTORM", icon: "🪄", text: "Ten unconventional approaches." },
                { title: "59. /ANGLE [topic]", category: "BRAINSTORM", icon: "🪄", text: "Overlooked angle." },
                { title: "60. /COMBINE [A + B]", category: "BRAINSTORM", icon: "🪄", text: "Mashes two into five directions." },
                { title: "61. /METAPHOR [concept]", category: "BRAINSTORM", icon: "🪄", text: "A metaphor." },
                { title: "62. /STARTERS [topic]", category: "BRAINSTORM", icon: "🪄", text: "Non-boring conversation openers." },
                { title: "63. /JOURNAL10 [theme]", category: "BRAINSTORM", icon: "🪄", text: "Ten journal prompts." },
                { title: "64. /AS [role + problem]", category: "BRAINSTORM", icon: "🪄", text: "Solves it as a specific profession would." },
                { title: "65. /CHILD [problem]", category: "BRAINSTORM", icon: "🪄", text: "How a curious kid would solve it." },
                { title: "66. /INTERVIEWQ [questions]", category: "WORK & CAREER", icon: "🪄", text: "Confident answer prep." },
                { title: "67. /RESUMEBULLET [bullet]", category: "WORK & CAREER", icon: "🪄", text: "Rewrite." },
                { title: "68. /ASKINTERVIEWER [role + company type]", category: "WORK & CAREER", icon: "🪄", text: "Smart questions to ask." },
                { title: "69. /NEGOTIATE [the ask]", category: "WORK & CAREER", icon: "🪄", text: "Scripts the negotiation." },
                { title: "70. /RECONNECT [person + context]", category: "WORK & CAREER", icon: "🪄", text: "LinkedIn reach-out." },
                { title: "71. /GAP [reason]", category: "WORK & CAREER", icon: "🪄", text: "Explains career gap." },
                { title: "72. /WINS5 [notes]", category: "WORK & CAREER", icon: "🪄", text: "Accomplishments into five bullets." },
                { title: "73. /ONEONONE [topic]", category: "WORK & CAREER", icon: "🪄", text: "Preps a manager 1:1 call." },
                { title: "74. /SELFREVIEW [paste]", category: "WORK & CAREER", icon: "🪄", text: "Self-review from your notes." },
                { title: "75. /IDONTKNOW [situation]", category: "WORK & CAREER", icon: "🪄", text: "Phrases 'I don't know yet' professionally." },
                { title: "76. /RAISE [context]", category: "WORK & CAREER", icon: "🪄", text: "Script to ask for a raise." },
                { title: "77. /HOOK [topic]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Five scroll-stopping openers." },
                { title: "78. /CAPTION [photo/topic]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Short caption." },
                { title: "79. /THREAD [idea]", category: "CONTENT & SOCIAL", icon: "🪄", text: "One idea, six-tweet thread." },
                { title: "80. /CARO [topic]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Outlined carousel." },
                { title: "81. /REPURPOSE [post]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Three formats." },
                { title: "82. /CTA [post]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Three calls-to-action." },
                { title: "83. /BIO [details + vibe]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Short bio in three styles." },
                { title: "84. /SUBJECT [email/post]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Five subject lines that get opened." },
                { title: "85. /CONTRARIAN [topic]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Sharp counter-take, still defensible." },
                { title: "86. /SHORTPOST [idea]", category: "CONTENT & SOCIAL", icon: "🪄", text: "100-word post." },
                { title: "87. /COMMENT [post]", category: "CONTENT & SOCIAL", icon: "🪄", text: "Three sharp replies that add value." },
                { title: "88. /MEETINGNOTES [transcript]", category: "MEETINGS & NOTES", icon: "🪄", text: "Raw notes into clean minutes." },
                { title: "89. /ACTIONITEMS [notes]", category: "MEETINGS & NOTES", icon: "🪄", text: "Pulls to-dos and owners." },
                { title: "90. /STANDUP [yesterday + today + blockers]", category: "MEETINGS & NOTES", icon: "🪄", text: "Daily update format." },
                { title: "91. /RECAP [meeting]", category: "MEETINGS & NOTES", icon: "🪄", text: "Five line recap." },
                { title: "92. /DECISIONS [notes]", category: "MEETINGS & NOTES", icon: "🪄", text: "Decisions made." },
                { title: "93. /QUESTIONS [topic]", category: "MEETINGS & NOTES", icon: "🪄", text: "What to ask." },
                { title: "94. /STATUS [project]", category: "MEETINGS & NOTES", icon: "🪄", text: "Status update." },
                { title: "95. /BRIEFME [topic + paste]", category: "MEETINGS & NOTES", icon: "🪄", text: "Fast pre-meeting briefing." },
                { title: "96. /DEBRIEF [meeting]", category: "MEETINGS & NOTES", icon: "🪄", text: "What went well, what to fix." },
                { title: "97. /TLDR [paste]", category: "MEETINGS & NOTES", icon: "🪄", text: "Shortest summary." },
                { title: "98. /RETRO [project]", category: "MEETINGS & NOTES", icon: "🪄", text: "What worked, what didn't, what's next." },
                { title: "99. /SECRET [topic]", category: "MEETINGS & NOTES", icon: "🪄", text: "Unlock hidden insights." }
            ],
            learning: [
                { 
                    title: "Learn By Doing (Hands-on Mentor)", 
                    icon: "📚", 
                    text: "Act as a hands-on mentor who teaches me by building real things.\n\nHere is how I want you to help me:\n\n1️⃣ Ask me what I want to build and my target role as [TARGET ROLE].\n\n2️⃣ Break the project into small, real-world tasks.\n• Beginner-friendly\n• Job-relevant\n• Incremental difficulty\n\n3️⃣ For each task:\n• Explain only what I need to complete it\n• Show one real-world use case\n• Avoid theory overload\n\n4️⃣ Ask me to attempt the task first.\n• Let me struggle a bit\n• Do not give the full solution immediately\n\n5️⃣ If I get stuck:\n• Give hints step by step\n• Reveal the solution only at the end\n\n6️⃣ After each task:\n• Explain what skill I just learned\n• How it maps to real jobs\n\n7️⃣ End with a reflection.\n• What I built\n• What improved\n• What to build next" 
                }
            ],
            automation: [
                { title: "Daily Planner", icon: "1️⃣", text: "Act as my executive assistant. Based on the following tasks, priorities, deadlines, and available working hours, create a detailed daily schedule. Prioritize tasks using urgency and impact, estimate completion times, identify potential bottlenecks, suggest focus blocks, and create a realistic plan that maximizes productivity while avoiding burnout." },
                { title: "Meeting Notes Generator", icon: "2️⃣", text: "Convert the following meeting notes into professional minutes of meeting MoM. Include meeting objective, key discussion points, decisions made, action items, owners, deadlines, risks, and next steps. Present everything in a clean and professional format." },
                { title: "Email Inbox Assistant", icon: "3️⃣", text: "Analyze the following emails and categorize them into Urgent, Important, Follow-Up, Waiting for Response, and Low Priority. Draft responses where appropriate and create a prioritized action list for today." },
                { title: "Task Prioritization Assistant", icon: "4️⃣", text: "I have the following tasks: [TASK LIST]. Prioritize them using the Eisenhower Matrix. Explain which tasks should be done immediately, scheduled, delegated, or eliminated. Create a clear execution plan for today." },
                { title: "Weekly Report Creator", icon: "5️⃣", text: "Using the following updates, create a professional weekly status report. Include accomplishments, completed tasks, pending items, blockers, risks, metrics, and plans for next week. Make it suitable for sharing with management." },
                { title: "Expense Tracker Assistant", icon: "6️⃣", text: "Analyze my monthly expenses listed below. Categorize expenses, identify unnecessary spending, calculate savings opportunities, create visual spending insights, and recommend actions to improve my financial health." },
                { title: "Content Repurposing Assistant", icon: "7️⃣", text: "Convert the following content into multiple formats including a LinkedIn post, Twitter thread, Instagram caption, newsletter summary, blog outline, and YouTube video script. Maintain consistency while optimizing for each platform." },
                { title: "Follow-Up Reminder Generator", icon: "8️⃣", text: "Review the following tasks, conversations, and pending items. Identify who requires follow-up, draft reminder messages, suggest follow-up dates, and create a tracking table." },
                { title: "Learning Tracker", icon: "9️⃣", text: "I am learning [SKILL]. Create a progress tracking system that records completed topics, identifies knowledge gaps, recommends next learning steps, generates quizzes, and provides weekly progress summaries." },
                { title: "Document Summarizer", icon: "🔟", text: "Analyze the following document and create an executive summary. Highlight key insights, important decisions, action items, risks, opportunities, and recommendations. Keep the summary concise and easy to understand." },
                { title: "Personal Life Organizer", icon: "🚀", text: "Act as my life management assistant. Help me organize my personal goals, finances, health, learning, relationships, and daily responsibilities. Create a dashboard-style overview with priorities, progress tracking, reminders, and actionable next steps." }
            ],
            career: [
                { title: "Find My Highest-Paying Career Path", icon: "💰", text: "Analyze my background, education, skills, experience, and interests [provide details]. Identify the top 5 career paths that offer strong income potential and long-term growth. Explain why each path is suitable and what steps I need to take to enter it." },
                { title: "Create a Promotion Roadmap", icon: "📈", text: "I currently work as a [role]. Create a detailed 12-month roadmap to help me earn a promotion, including technical skills, leadership skills, projects, visibility strategies, and measurable achievements." },
                { title: "Discover My Competitive Advantage", icon: "🧠", text: "Ask me a series of questions to understand my strengths, experiences, personality, and interests. Then identify my unique competitive advantage and suggest how to leverage it professionally." },
                { title: "Build an Executive-Level Resume", icon: "💼", text: "Review my resume [paste resume]. Rewrite it to highlight measurable achievements, leadership qualities, business impact, and ATS-friendly keywords for senior-level opportunities." },
                { title: "Create a Personal Brand Strategy", icon: "🌐", text: "I want recruiters and professionals to recognize me as an expert in [field]. Create a 90-day personal branding strategy including content ideas, networking tactics, profile optimization, and authority-building activities." },
                { title: "Career Growth Audit", icon: "📊", text: "Analyze my current career situation [describe it]. Identify the biggest mistakes slowing my growth and suggest specific actions that will create the greatest career impact." },
                { title: "Build a High-Income Skill Stack", icon: "🎯", text: "Based on my current skills [list skills], suggest complementary skills that can significantly increase my earning potential. Explain how these skills work together and provide a learning roadmap." },
                { title: "Improve Workplace Communication", icon: "🗣", text: "Teach me how to communicate more effectively with managers, clients, and coworkers. Include examples of professional emails, meeting contributions, conflict resolution, and persuasive communication." },
                { title: "Create a Learning Strategy for Career Growth", icon: "📚", text: "I have [X] hours per week available for learning. Design a professional development plan that maximizes my career growth over the next 12 months." },
                { title: "Master Salary Negotiation", icon: "💬", text: "Teach me how to negotiate salary confidently during interviews and performance reviews. Include scripts, preparation techniques, common mistakes, and negotiation scenarios." },
                { title: "Become a Top Performer at Work", icon: "📈", text: "Analyze the habits, systems, and behaviors of top-performing professionals. Create a daily and weekly action plan to help me stand out in my organization." },
                { title: "Build Leadership Skills", icon: "🛠", text: "I want to prepare for future leadership roles. Create a step-by-step leadership development plan including communication, delegation, decision-making, and team management." },
                { title: "Transition to Remote Work", icon: "🌍", text: "I want to secure a remote job in [industry]. Create a roadmap covering skill development, portfolio creation, job search strategies, networking, and interview preparation." },
                { title: "Identify Profitable Side Hustles", icon: "💡", text: "Based on my skills, experience, and available time, suggest side hustles that can generate additional income. Include startup steps, earning potential, and growth opportunities." },
                { title: "Create a Professional Development Dashboard", icon: "📋", text: "Design a system to track my skills, certifications, projects, networking activities, achievements, and career progress throughout the year." },
                { title: "Find Hidden Career Opportunities", icon: "🔍", text: "Analyze emerging industries and trends. Suggest career opportunities that are growing rapidly but are still under the radar." },
                { title: "Build a Strong LinkedIn Presence", icon: "📱", text: "Create a 60-day LinkedIn growth plan including profile optimization, content strategy, networking activities, and engagement techniques." },
                { title: "Prepare for Career Change", icon: "💼", text: "I want to transition from [current field] to [target field]. Create a detailed transition strategy covering skills, certifications, projects, networking, and job applications." },
                { title: "Create a Professional Portfolio", icon: "📊", text: "Help me build a portfolio that showcases my skills, achievements, projects, and expertise in a way that attracts recruiters and clients." },
                { title: "Expand My Professional Network", icon: "🤝", text: "Create a networking strategy to help me build meaningful professional relationships online and offline. Include outreach messages and follow-up techniques." },
                { title: "Double My Income in 2 Years", icon: "🔥", text: "Analyze my current situation and create a realistic plan to double my income within the next 24 months through skill development, career advancement, networking, and additional income streams." },
                { title: "Agentic AI Today", icon: "🔗", text: "https://learn.nextfutureai.in/web/checkout/6a080257fef35bfdff106b9c" }
            ],
            video_ai: [
                { 
                    title: "Google Flow: Storyboard to Cinematic Video", 
                    icon: "🎬", 
                    text: "*Image Prompt* 👉Analyze the uploaded storyboard image carefully.\\n\\nYour task is NOT to generate an image.\\nYour task is NOT to create a new storyboard.\\nYour task is to act as a professional commercial director and convert the uploaded storyboard image into a complete Google Flow video prompt.\\n\\nThe final output must be only a ready-to-use cinematic video prompt for Google Flow.\\n\\nSTEP 1 — STORYBOARD ANALYSIS\\n\\nCarefully analyze the uploaded storyboard image:\\n\\n* Main subject or product\\n* Number of storyboard panels\\n* Camera angles\\n* Character actions\\n* Product interactions\\n* Facial expressions\\n* Emotions\\n* Lighting style\\n* Environment\\n* Visual progression\\n* Beginning, middle, and ending\\n* Final commercial payoff\\n\\nIdentify the exact sequence from left-to-right and top-to-bottom.\\n\\nDo not skip any storyboard panel.\\n\\nTreat every panel as a separate video scene.\\n\\nSTEP 2 — VIDEO STRUCTURE\\n\\nCreate a complete Google Flow video prompt using:\\n\\nDuration: 10 seconds\\nAspect Ratio: 9:16\\nStyle: Ultra photorealistic, cinematic, high-end commercial production\\nQuality: Premium advertising quality, realistic lighting, realistic shadows, shallow depth of field, professional camera movement\\nContinuity: Keep the same character, same product, same clothes, same colors, same accessories, same hairstyle, same face, and same visual identity throughout the video.\\n\\nSTEP 3 — SCENE BREAKDOWN\\n\\nConvert every storyboard panel into a video scene.\\n\\nFor every scene include:\\n\\nScene 1\\n\\n* What is happening\\n* Camera movement\\n* Subject action\\n* Product interaction\\n* Emotion\\n* Lighting\\n* Transition\\n\\nScene 2\\n\\n* What is happening\\n* Camera movement\\n* Subject action\\n* Product interaction\\n* Emotion\\n* Lighting\\n* Transition\\n\\nScene 3\\n\\n* What is happening\\n* Camera movement\\n* Subject action\\n* Product interaction\\n* Emotion\\n* Lighting\\n* Transition\\n\\nContinue until all storyboard panels are converted into scenes.\\n\\nSTEP 4 — VOICE RECORD / DIALOGUE\\n\\nAdd one short Hindi voice dialogue during the first 2 seconds.\\n\\nRequirements:\\n\\n* Natural Indian Hindi\\n* 2 to 6 words only\\n* Should match the emotion of the video\\n* Should sound like a real person speaking\\n* Mention it as voice-over or spoken dialogue\\n* No subtitles\\n* No captions\\n* No on-screen text\\n\\nExample format:\\n\\nVoice-over / Dialogue 0–2 sec: “Yahi hai asli freshness!”\\n\\nSTEP 5 — SOUND DESIGN\\n\\nAdd realistic sound effects according to the storyboard.\\n\\nInclude:\\n\\n* Product handling sound\\n* Can opening / bottle opening sound if product is a drink\\n* Fizz sound if beverage is shown\\n* Splash sound if liquid appears\\n* Natural ambience\\n* Smooth transition sound\\n* Final cinematic hit or soft commercial ending sound\\n\\nSTEP 6 — MUSIC\\n\\nAutomatically choose background music based on the storyboard category:\\n\\nBeauty → Luxury beauty music\\nFood or drink → Energetic commercial music\\nTech → Modern commercial music\\nFashion → Trendy music\\nJewellery → Elegant luxury music\\nLifestyle → Uplifting commercial music\\nProduct ad → Premium commercial music\\n\\nSTEP 7 — FINAL OUTPUT FORMAT\\n\\nOutput only the final Google Flow video prompt.\\n\\nDo not explain.\\nDo not analyze separately.\\nDo not give notes.\\nDo not give suggestions.\\nDo not create an image prompt.\\nDo not mention “create image.”\\nDo not write storyboard generation instructions.\\nDo not add extra captions or text.\\n\\nFINAL FLOW VIDEO PROMPT FORMAT:\\n\\nUse the uploaded storyboard image as the exact visual reference and starting guide. Create a 10-second vertical 9:16 cinematic video based on the storyboard sequence.\\n\\nScene 1:\\n[Write the first storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 2:\\n[Write the second storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 3:\\n[Write the third storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 4:\\n[Write the fourth storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 5:\\n[Write the fifth storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 6:\\n[Write the sixth storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 7:\\n[Write the seventh storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 8:\\n[Write the eighth storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nScene 9:\\n[Write the ninth storyboard panel as a cinematic video scene with action, camera movement, lighting, emotion, and transition.]\\n\\nVoice-over / Dialogue 0–2 sec:\\n[Generate one short natural Hindi dialogue, 2–6 words, no subtitles.]\\n\\nMusic:\\n[Choose suitable background music automatically based on storyboard category.]\\n\\nSound Effects:\\n[Add realistic sound effects matching the storyboard.]\\n\\nStyle:\\nUltra photorealistic, cinematic commercial, premium advertising quality, realistic lighting, shallow depth of field, natural motion, realistic product interaction, high-end color grading, smooth camera movement.\\n\\nConsistency Rules:\\nKeep the same product, same person, same clothing, same face, same hairstyle, same accessories, same colors, and same visual identity consistent throughout the full video.\\n\\nNegative Prompt:\\nNo distorted anatomy, no duplicate subjects, no inconsistent product, no extra fingers, no blurry objects, no random logos, no low quality rendering, no AI artifacts, no floating objects, no unrealistic lighting, no frame repetition, no subtitles, no captions, no watermark, no extra text." 
                },
                { 
                    title: "Beverage Commercial Video Prompt", 
                    icon: "🥤", 
                    text: "*Video Prompt* 👇 \\nUse the uploaded image as the exact visual reference and starting frame. Create a vertical 9:16 hyper-realistic cinematic beverage commercial video.\\n\\nThe scene shows a clean social-media style AI result screen on a white grid-paper background. At the top, bold black text reads “Result:”. The main hero image shows a red cola can being opened in extreme close-up. A hand pulls the silver tab, and dark fizzy cola bursts upward in slow motion with dramatic splashes, sparkling bubbles, flying droplets, and floating ice cubes. The can is ice-cold, covered with realistic water droplets and condensation. Warm golden sunlight reflects on the can and liquid splash, with shallow depth of field and premium product-ad lighting.\\n\\nCamera movement: start with a slow push-in toward the main “Result” image, then create a subtle parallax effect inside the hero shot. The hand gently pulls the tab, the can opens, cola foam and bubbles explode upward in slow motion, droplets move through the air, ice cubes rotate slightly, and the background remains softly blurred.\\n\\nAfter the hero shot, smoothly tilt or pan downward to the “Storyboard:” section. The 3x3 storyboard grid comes alive with subtle motion in each frame:\\n1. cola can standing in a sunny park with sunlight flickering through trees\\n2. the uploaded person holding the cola can and smiling\\n3. close-up of the red can label with water droplets sliding down\\n4. can lying in ice cubes with cold mist and melting ice\\n5. hand opening the can from top view with fizz rising\\n6. uploaded person drinking cola happily\\n7. uploaded person smiling after drinking with a refreshing reaction\\n8. friends enjoying cola at an outdoor picnic\\n9. cola can standing on wet ground with golden sunlight, splash, fizz, and sparkling bubbles\\n\\nKeep the uploaded person’s face, hairstyle, glasses, skin tone, outfit, and overall look consistent wherever he appears. Keep the red cola can design, shape, color, condensation, and branding style consistent in every frame.\\n\\nStyle: hyper-realistic, cinematic advertising photography, premium cold drink commercial, bright summer outdoor mood, sharp details, realistic liquid physics, slow-motion splash, natural sunlight, glossy reflections, high-resolution, Instagram reel style.\\n\\nVideo duration: 6–8 seconds.\\nAspect ratio: vertical 9:16.\\nMotion: smooth camera push-in, soft downward pan, subtle parallax, slow-motion liquid splash, realistic bubbles and droplets.\\nMood: refreshing, energetic, premium, summer commercial.\\n\\nNegative prompt: blurry, low quality, distorted face, changed identity, wrong glasses, extra fingers, broken hand, unreadable text, messy layout, distorted can, wrong product color, unrealistic splash, cartoon, 3D render, watermark, flickering logo, bad anatomy, duplicate face, unstable camera.\\n\\`\\`\\`create image"
                },
                { 
                    title: "City to Luxury Oil Painting Animation", 
                    icon: "🏙️", 
                    text: "https://www.instagram.com/reel/DZpbSSottSy/?igsh=bnliZnZqNTRlN3po\\n\\n*Image Prompt* — Create a premium vertical fine art poster in 4:5 ratio on a clean warm ivory paper background, using the uploaded city photograph as the primary visual reference. Preserve the identity, layout, architecture, skyline, waterfront, streets, and atmosphere of the uploaded city image. Transform the scene into a luxurious sculptural oil painting while maintaining the recognizable appearance of the original city. Show extremely thick layers of oil paint with visible brush bristle grooves, palette knife textures, soft flowing ridges, paint accumulations, glossy highlights, raised impasto peaks, stretched edges, organic irregular contours, wet viscous paint behavior, and beautiful flowing movement. The brushstrokes should feel alive and dynamic with elegant sweeping curves. Color palette: deep ultramarine blue, turquoise, warm cream, ochre, burnt sienna, terracotta, burgundy, forest green, subtle gold accents. Colors blend naturally inside the thick oil paint texture. A dramatic elegant flowing spiral brushstroke dominates the composition and creates a sculptural frame around the city. inside the lower wider section of the spiral, a highly detailed miniature three-dimensional diorama emerges from the uploaded city itself. The city should appear sculpted directly from the same oil paint, growing organically from the brushstroke structure rather than being placed on top. Preserve important landmarks, waterfronts, bridges, roads, historic architecture, skyline elements, and distinctive features visible in the uploaded image. The city must look premium, realistic, artistic, and incredibly detailed, with seamless integration into the paint structure. Composition: large flowing brushstroke dominates the page, city integrated into the lower section, clean negative space, luxury museum poster aesthetic, soft natural lighting, high-end editorial presentation, ultra detailed textures, masterpiece quality, sculptural impasto surfaces, elegant movement, collectible fine art print. Typography: At the bottom center write only the city name corresponding to the uploaded image. Use elegant tall serif typography, museum exhibition style, premium fine art poster typography, thin sophisticated letterforms, perfect spacing. No subtitles. No extra text. No logos. No people. No frames.  No interface elements. No watermarks. Ultra realistic oil paint texture, luxury museum poster, miniature city diorama, sculptural impasto, premium editorial design, masterpiece quality, highly detailed, cinematic lighting, collectible fine art print. Make the aspect ratio 9:16\\n\\n*Video Prompt* –  \\nCinematic luxury museum-poster animation on a warm ivory canvas background. 00:00–00:01 Extreme macro close-up of thick impasto oil paint. A wooden paintbrush loaded with deep ultramarine blue, turquoise, warm cream, gold, and burnt sienna oil paint hovers above a textured canvas. Visible brush bristle grooves, glossy highlights, palette knife textures, rich paint accumulations, soft studio lighting. 00:01–00:02 The brush touches the canvas and drags downward. Thick viscous paint spreads across the surface with realistic oil-paint behavior. Rich impasto ridges form naturally. Paint stretches and folds with highly detailed texture. 00:02–00:03 The paint stroke expands into a dramatic flowing S-shaped spiral. Colors blend beautifully from deep blue and turquoise into warm gold, terracotta, ochre, and cream tones. The paint becomes increasingly sculptural and three-dimensional. Camera follows the movement smoothly with subtle parallax. 00:03–00:05 The lower section of the paint sculpture transforms into a miniature floating diorama of Delhi. The city appears carved directly from the paint itself. Hyper-detailed landmarks emerge organically from the thick paint layers: Red Fort  Qutub Minar India Gate Lotus Temple Historic Mughal architecture Modern Delhi skyline Roads, bridges, gardens, and city details The city grows naturally from the brushstroke and remains fully integrated into the paint structure. 00:05–00:07 Slow cinematic push-in toward the miniature city. Tiny architectural details become visible. Golden sunlight reflects on the paint ridges. The oil texture glistens realistically. Paint edges subtly move as if still alive. 00:07–00:08 Final luxury poster reveal. The entire Delhi diorama is framed by the elegant swirling paint sculpture. At the bottom center, premium tall serif typography smoothly fades in: Uplode image city name \\\" Museum exhibition aesthetic, collectible fine-art poster, editorial photography quality, ultra-realistic oil paint materials, photorealistic lighting, masterpiece composition, shallow depth of field, 8K detail, luxury gallery presentation. No people. No logos. No watermark. No subtitles. No extra text. No interface elements."
                },
                { 
                    title: "Ants Building Replica Time-Lapse", 
                    icon: "🐜", 
                    text: "https://www.instagram.com/reel/DZsBAIksMmW/?igsh=NTR0YXp1enc4czEx\\n\\nImage Prompt👇 \\n> Analyze the uploaded reference image and identify the main subject, object, product, building, monument, vehicle, or structure. Create an ultra-realistic macro photography scene where thousands of tiny ants are collaboratively constructing an exact miniature replica of the uploaded subject. Ants are carrying materials that match the subject's colors, textures, and design elements. Show the construction process in progress, with organized ant pathways, detailed assembly work, realistic insect behavior, and intricate craftsmanship. The final structure must closely resemble the uploaded reference image while appearing handmade by the ants. Cinematic golden-hour lighting, desert or natural ground surface, shallow depth of field, ultra-detailed textures, photorealistic macro lens, sparkling materials, soft bokeh background, hyperrealistic, masterpiece quality, 8K, highly detailed, magical realism, vertical composition 9:16.\\n\\n### Dynamic Material Control\\n\\n> Use materials based on the uploaded image:\\n>\\n> * Luxury product → gold beads, crystals, diamonds\\n> * Building/monument → stone particles, sand, marble grains\\n> * Technology product → metallic micro-components\\n> * Food item → edible grains, seeds, sugar crystals\\n> * Vehicle → metallic beads, nuts, screws, steel particles\\n> * Religious architecture → elegant decorative beads and crystal elements matching the original design\\n\\n### Universal Video Prompt\\n\\n> Using the uploaded image as the final reference, create a cinematic macro time-lapse showing thousands of ants constructing the subject from tiny matching materials. Begin with scattered raw materials, then show ants transporting, arranging, and assembling them piece by piece until the uploaded object is perfectly recreated. Smooth camera movement, realistic ant behavior, photorealistic macro cinematography, shallow depth of field, golden-hour lighting, highly detailed textures, magical atmosphere, 9:16 vertical, 8K quality.\\n\\nVideo Prompt👇 \\nUse the uploaded image only as the FINAL DESIGN REFERENCE, not as the starting frame.\\n\\nCreate a vertical 9:16 ultra-realistic cinematic macro time-lapse video in which thousands of tiny ants (or tiny worker creatures) gradually construct an exact miniature version of the uploaded subject from scratch using sugar grains, crystal particles, colored sugar beads, pearl-like granules, and tiny matching materials.\\n\\nImportant rule:\\nDo NOT show the uploaded subject already completed at the beginning.\\nThe final object/person/product must be built gradually from scattered sugar grains.\\n\\nOpening scene:\\nStart with an empty natural ground surface or miniature workshop floor in warm golden-hour lighting. Show only scattered sugar grains, colored granules, tiny material piles, miniature carts, ladders, scaffolding, and thousands of ants moving actively. No completed subject should be visible yet.\\n\\nConstruction process:\\nThe ants pick up sugar grains one by one and carry them in organized lines. They start building from the bottom upward.\\nFirst create the foundation and rough outline.\\nThen gradually form the lower structure, main body shape, side details, surface contours, colors, label/logo/design elements, and finally the top and finishing details.\\nThe subject must slowly emerge piece by piece, grain by grain, until it fully matches the uploaded image.\\n\\nDynamic subject handling:\\n- If the uploaded image is a product, recreate the exact product shape, colors, branding area, label, cap, handle, edges, and packaging details.\\n- If the uploaded image is a person, recreate the exact pose, body shape, face, hairstyle, clothes, shoes, accessories, and expression using colored sugar grains.\\n- If the uploaded image is an object or sculpture, recreate the exact silhouette, texture, design details, and proportions.\\n- If the uploaded image is food or drink, use edible-looking sugar crystals and matching color granules to form the exact item.\\n\\nMaterial behavior:\\nUse sugar grains and colored micro-beads that match the uploaded image.\\nWhite parts should be built from white sugar crystals.\\nColored sections should be built from matching colored sugar beads.\\nShiny details can be made from glossy crystal particles.\\nMetallic parts can be made from reflective micro-granules.\\n\\nAnt activity:\\nSome ants carry single sugar grains in their mouths.\\nSome push tiny carts full of granules.\\nSome climb ladders and scaffolding.\\nSome place grains precisely onto the half-built structure.\\nSome polish and finish the final details.\\nTheir movement should look realistic, coordinated, and busy like a miniature construction team.\\n\\nTransformation flow:\\nAt first, only raw sugar particles and rough outlines are visible.\\nThen the lower part of the subject forms.\\nThen the central body becomes clear.\\nThen surface details, patterns, logo/text areas, and finer features appear.\\nFinally, the fully completed subject is revealed, closely matching the uploaded reference image.\\n\\nCamera movement:\\nBegin with a macro close-up of ants picking up sugar grains from the ground.\\nSlowly track forward toward the forming base.\\nAdd a cinematic push-in while the structure rises.\\nUse a gentle upward tilt as the top or head/final details are completed.\\nEnd with a beautiful hero shot of the finished subject surrounded by ants, ladders, carts, and leftover sugar piles.\\n\\nVisual style:\\nUltra-realistic macro cinematography, photorealistic ants, sparkling sugar textures, shallow depth of field, warm golden-hour sunlight, creamy bokeh background, floating dust particles, magical realism, highly detailed miniature world, premium cinematic look, masterpiece quality, 8K detail.\\n\\nDuration:\\n6–8 seconds\\n\\nAspect ratio:\\n9:16 vertical\\n\\nNegative instructions:\\nNo ready-made final subject in the first frame.\\nNo instant transformation.\\nNo humans other than the uploaded person being recreated as a sugar-built figure.\\nNo cartoon style.\\nNo giant unrealistic ants.\\nNo distortion.\\nNo melting.\\nNo broken proportions.\\nNo extra unrelated objects.\\nNo shaky camera.\\nNo blurry final result."
                }
            ]
        };

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('prompts-container');
            const tabBtns = document.querySelectorAll('.tab-btn');
            const mainTitle = document.getElementById('main-title');
            const subTitle = document.getElementById('sub-title');
            
            // Intersection Observer for animation on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            function renderCards(category) {
                // Clear current cards
                container.innerHTML = '';
                
                // Generate new cards
                promptsData[category].forEach((prompt, index) => {
                    const card = document.createElement('div');
                    card.className = 'prompt-card';
                    // Reset animation delay for re-renders to look snappy
                    card.style.animationDelay = `${(index % 10) * 0.05}s`; 
                    
                    // Conditionally change button text
                    let buttonText = 'Copy Prompt';
                    if (category === 'roadmap' || category === 'google' || category === 'ai_skills') {
                        buttonText = 'Copy Details';
                    } else if (category === 'shortcuts') {
                        buttonText = 'Copy Shortcut';
                    } else if (category === 'claude') {
                        buttonText = 'Copy Command';
                    } else if (category === 'video_ai') {
                        buttonText = 'Copy Video Prompt';
                    }
                    
                    card.innerHTML = `
                        <div class="card-header">
                            <div class="prompt-number">${prompt.icon}</div>
                            <h3 class="prompt-title">${(category === 'roadmap' || category === 'google' || category === 'productivity' || category === 'shortcuts' || category === 'ai_skills' || category === 'claude' || category === 'learning' || category === 'automation' || category === 'video_ai') ? '' : (index + 1) + '. '}${prompt.title}</h3>
                        </div>
                        <div class="prompt-text">
                            ${prompt.category ? `<span style="font-size: 0.75rem; background: var(--accent); color: white; padding: 3px 8px; border-radius: 12px; margin-bottom: 8px; display: inline-block;">${prompt.category}</span><br>` : ''}
                            ${prompt.text}
                        </div>
                        <button class="copy-btn" onclick="copyPrompt(this, \`${(category === 'claude' ? prompt.title.replace(/^\\d+\\.\\s*/, '') : prompt.text).replace(/`/g, '\\`').replace(/'/g, "\\'")}\`)">
                            <i class="fa-regular fa-copy"></i> ${buttonText}
                        </button>
                    `;
                    
                    container.appendChild(card);
                    observer.observe(card);
                });
            }

            // Tab functionality
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active state
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const category = btn.dataset.tab;
                    
                    // Update Titles
                    if (category === 'branding') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-rocket"></i> 21 Powerful ChatGPT Prompts';
                        subTitle.textContent = 'Build a Powerful Personal Brand & Grow on Social Media';
                    } else if (category === 'content') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-pen-nib"></i> 25 Content Creation Prompts';
                        subTitle.textContent = 'Master Social Media, SEO, & Copywriting Strategy';
                    } else if (category === 'productivity') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-bolt"></i> 10 Productivity Prompts';
                        subTitle.textContent = '10X Your Productivity & Skills with ChatGPT';
                    } else if (category === 'interview') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-briefcase"></i> 21 Powerful ChatGPT Prompts';
                        subTitle.textContent = 'Ace Any Job Interview & Land Your Dream Job';
                    } else if (category === 'roadmap') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-road"></i> Complete AI Roadmap';
                        subTitle.textContent = 'Master AI Fundamentals & Build Real-World Applications';
                    } else if (category === 'google') {
                        mainTitle.innerHTML = '<i class="fa-brands fa-google"></i> Google AI Ecosystem';
                        subTitle.textContent = 'From Research to Production: Tools, Models & Agents';
                    } else if (category === 'shortcuts') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-keyboard"></i> 25 ChatGPT Shortcuts';
                        subTitle.textContent = 'Boost Your Efficiency with Keyboard Shortcuts';
                    } else if (category === 'ai_skills') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-brain"></i> 12 AI Skills to Master in 2026';
                        subTitle.textContent = 'Upgrade your skills. Stay ahead. Lead the future.';
                    } else if (category === 'claude') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> 99 Secret Claude Commands';
                        subTitle.textContent = 'Master AI interactions with these powerful slash commands (across 9 categories!)';
                    } else if (category === 'learning') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-graduation-cap"></i> Learn By Doing';
                        subTitle.textContent = 'Master new skills with hands-on, interactive AI mentorship';
                    } else if (category === 'automation') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-robot"></i> 11 ChatGPT Automation Prompts';
                        subTitle.textContent = 'Automate Your Daily Tasks and Skyrocket Productivity';
                    } else if (category === 'career') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-chart-line"></i> 21 Career Growth Prompts';
                        subTitle.textContent = 'Improve Career, Income & Professional Growth';
                    } else if (category === 'video_ai') {
                        mainTitle.innerHTML = '<i class="fa-solid fa-video"></i> Video AI Prompts';
                        subTitle.textContent = 'Master cinematic video creation with advanced AI prompts';
                    }
                    
                    // Render Cards
                    renderCards(category);
                });
            });

            // Initial render
            renderCards('branding');

            // Setup toast
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = '<i class="fa-solid fa-check-circle"></i> Content copied to clipboard!';
            document.body.appendChild(toast);
        });

        // Fallback for document.execCommand in case Clipboard API is blocked (e.g. file:// without secure context)
        function fallbackCopyTextToClipboard(text, btn) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            
            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                if (successful) {
                    showSuccess(btn);
                } else {
                    console.error('Fallback: Copying text command was unsuccessful');
                }
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
        }

        window.copyPrompt = function(btn, text) {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text, btn);
                return;
            }
            navigator.clipboard.writeText(text).then(() => {
                showSuccess(btn);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                fallbackCopyTextToClipboard(text, btn); // try fallback if it fails
            });
        };

        function showSuccess(btn) {
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
        }

        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(error => {
                        console.log('ServiceWorker registration failed: ', error);
                    });
            });
        }
    