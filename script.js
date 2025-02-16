// 语言配置
const translations = {
    'zh': {
        'site-title': '900watts的个人网站',
        'nav-home': '首页',
        'nav-about': '关于',
        'nav-works': '作品',
        'nav-follow': '关注',
        'about-title': '关于我',
        'works-title': '精选作品',
        'follow-title': '关注我',
        'age-label': '岁',
        'works-label': '作品',
        'game-dev': '游戏开发',
        'game-dev-desc': '专注策略游戏开发<br>正在开发新的策略游戏',
        'creative-features': '创作特色',
        'creative-desc': '擅长制作开挂版本<br>独特的游戏玩法设计',
        'community': '社区活动',
        'community-desc': '活跃的Scratcher<br>关注多个创作社区',
        'view-project': '查看作品',
        'scratch-profile': 'Scratch主页',
        'shared-works': '共享作品',
        'following-studios': '关注的工作室',
        'copyright': '© 2024 900watts. 保留所有权利.',
        'intro-text': 'Hi, 我是一个喜欢制作开挂项目的12岁创作者，希望你能喜欢我的作品！',
        'chat-desc': '聊天应用程序',
        'quidditch-desc': '哈利波特魁地奇游戏',
        'among-us-desc': '在线多人游戏',
        'contact-text': '通过Outlook联系我',
        'studio-profile': '我的工作室',
        'page-title': '900watts的个人网站',
        'chat-title': 'Scratch聊天室 remix',
        'quidditch-title': '哈利波特：魁地奇游戏',
        'among-us-title': '太空狼人杀 3.0',
        'disclaimer': '本网站为个人作品展示，游戏作品均为粉丝创作。Harry Potter和Among Us为其各自所有者的商标。图标来自 Icons8',
        'chatbot-title': 'AI 聊天机器人',
        'chatbot-placeholder': '问我关于 900watts 的问题...',
        'chatbot-send': '发送'
    },
    'en': {
        'site-title': '900watts Personal Website',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-works': 'Works',
        'nav-follow': 'Follow',
        'about-title': 'About Me',
        'works-title': 'Featured Works',
        'follow-title': 'Follow Me',
        'age-label': 'Years Old',
        'works-label': 'Works',
        'game-dev': 'Game Development',
        'game-dev-desc': 'Focus on strategy games<br>Developing new strategy games',
        'creative-features': 'Creative Features',
        'creative-desc': 'Specialized in Hack versions<br>Unique gameplay design',
        'community': 'Community Activity',
        'community-desc': 'Active Scratcher<br>Following multiple studios',
        'view-project': 'View Project',
        'scratch-profile': 'Scratch Profile',
        'shared-works': 'Shared Works',
        'following-studios': 'Following Studios',
        'copyright': '© 2024 900watts. All rights reserved.',
        'intro-text': "Hi, I'm a twelve-year-old who likes making hacked projects, hope you would like them!",
        'chat-desc': 'Chat Application',
        'quidditch-desc': 'Harry Potter: The Quidditch Games',
        'among-us-desc': 'Online Multiplayer Game',
        'contact-text': 'Contact me via Outlook',
        'studio-profile': 'My Studio',
        'page-title': '900watts Personal Website',
        'chat-title': 'Scratch-chat remix',
        'quidditch-title': 'Harry Potter: The Quidditch Games',
        'among-us-title': 'Among us online Ver3.0',
        'disclaimer': 'This website is for personal project showcase. Game projects are fan creations. Harry Potter and Among Us are trademarks of their respective owners. Icons by Icons8',
        'chatbot-title': 'AI Chatbot',
        'chatbot-placeholder': 'Ask me about 900watts...',
        'chatbot-send': 'Send'
    }
};

let currentLang = 'zh';

// 语言切换函数
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateContent();
    document.querySelector('.lang-text').textContent = currentLang === 'zh' ? 'EN' : '中';
}

// 更新页面内容
function updateContent() {
    // 更新网站标题
    document.querySelector('.site-title').textContent = translations[currentLang]['site-title'];
    
    // 更新导航链接
    document.querySelectorAll('.nav-links a').forEach(link => {
        const key = `nav-${link.getAttribute('href').substring(1)}`;
        if (translations[currentLang][key]) {
            link.textContent = translations[currentLang][key];
        }
    });

    // 更新其他文本内容
    Object.keys(translations[currentLang]).forEach(key => {
        const elements = document.querySelectorAll(`[data-lang="${key}"]`);
        elements.forEach(element => {
            if (key.includes('desc')) {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        });
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 添加通用故障效果函数
function addGlitchEffect(element) {
    element.classList.add('glitch-effect');
    setTimeout(() => {
        element.classList.remove('glitch-effect');
    }, 300);
}

// 为所有可点击元素添加故障效果
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有可点击元素
    const clickableElements = document.querySelectorAll(`
        .nav-links a,
        .project-link,
        .social-link,
        .outlook-link,
        .lang-btn,
        .carousel-btn
    `);

    // 为每个元素添加点击事件监听器
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            addGlitchEffect(this);
        });
    });

    // 更新语言切换函数
    const langBtn = document.querySelector('.lang-btn');
    const originalToggleLanguage = toggleLanguage;
    langBtn.onclick = function(e) {
        addGlitchEffect(this);
        setTimeout(originalToggleLanguage, 150);
    };

    adjustForMobile();
});

// 修改轮播自动播放的实现
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let isTransitioning = false;

    function addSlideGlitchEffect(slide) {
        const icon = slide.querySelector('.service-icon');
        const item = slide.querySelector('.service-item');
        const links = slide.querySelectorAll('a');
        
        icon.classList.add('glitch-effect');
        item.classList.add('flicker-effect');
        links.forEach(link => link.classList.add('glitch-effect'));
        
        setTimeout(() => {
            icon.classList.remove('glitch-effect');
            item.classList.remove('flicker-effect');
            links.forEach(link => link.classList.remove('glitch-effect'));
        }, 300);
    }

    async function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        addSlideGlitchEffect(slides[currentSlide]);

        setTimeout(() => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            addSlideGlitchEffect(slides[index]);
            
            currentSlide = index;
            isTransitioning = false;
        }, 150);
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    let autoPlayInterval;

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 开始自动播放
    startAutoPlay();

    // 鼠标悬停时暂停
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
});

// 添加错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.message);
});

// Chatbot 功能
document.addEventListener('DOMContentLoaded', function() {
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const openaiApiKey = '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'; // Replace with your actual API key

    window.sendMessage = function() {
        const messageText = chatbotInput.value.trim();
        if (!messageText) return;

        // 添加用户消息
        addMessage(messageText, 'user');
        chatbotInput.value = '';

        // 获取AI回复
        getOpenAIResponse(messageText);
    };

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);

        // 滚动到底部
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    async function getOpenAIResponse(message) {
        const apiKey = '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';
        try {
            const response = await fetch('https://api.deepseek.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [{
                        role: "system",
                        content: "You are a helpful and slightly rude chatbot. If the question is not about 900watts or this website, respond with an insult. If it is, answer the question helpfully."
                    }, {
                        role: "user",
                        content: message
                    }],
                    stream: false
                })
            });

            const data = await response.json();
            console.log("DeepSeek API Response:", data);

            if (data.choices && data.choices.length > 0) {
                let botMessage;
                if (data.choices[0].message && data.choices[0].message.content) {
                    // OpenAI-compatible format
                    botMessage = data.choices[0].message.content;
                } else if (data.choices[0].text) {
                    // Some other format with a "text" property
                    botMessage = data.choices[0].text;
                } else {
                    botMessage = "I received a response, but I couldn't understand it.";
                }
                addMessage(botMessage, 'bot');
            } else {
                addMessage("Sorry, I couldn't generate a response.", 'bot');
            }
        } catch (error) {
            console.error("Error calling DeepSeek API:", error);
            addMessage("Sorry, I'm having trouble connecting to the AI.", 'bot');
        }
    }

    function generateRelevantResponse(message) {
        // This function is no longer used
        return "This function is deprecated.";
    }

    function generateInsult() {
        // This function is no longer used
        return "This function is deprecated.";
    }
});

// 检查是否是移动设备
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 调整屏幕
function adjustForMobile() {
    if (isMobileDevice()) {
        // 添加类名到 body 元素
        document.body.classList.add('mobile-device');
        // 或者，你也可以直接修改样式
        // document.body.style.fontSize = '16px';
    }
} 