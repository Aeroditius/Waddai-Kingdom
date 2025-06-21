// AI Chat System for Waddai Kingdom with OpenAI Integration
class WaddaiAI {
    constructor() {
        // OpenAI API Configuration
        this.openaiApiKey = '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';
        this.openaiApiUrl = 'https://api.openai.com/v1/chat/completions';
        
        // Get current language from global variable or default to Arabic
        this.currentLanguage = window.currentLanguage || 'ar';
        this.isOpen = false;
        this.isTyping = false;
        this.chatHistory = [];
        
        // Drag functionality properties
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.chatPosition = { left: 20, bottom: 100 }; // Default position - left bottom corner
        
        // Welcome message tracking
        this.lastWelcomeLanguage = null;
        this.languageChangeTimeout = null;
        
        // AI conversation context
        this.conversationHistory = [];
        
        this.init();
        this.setupKeywords(); // Keep for fallback
    }

    init() {
        this.createChatHTML();
        this.bindEvents();
        
        // Wait a moment before adding welcome message to ensure proper language is set
        setTimeout(() => {
            this.currentLanguage = window.currentLanguage || 'ar';
            this.updateChatLanguage();
        }, 100);
        
        // Listen for language changes on both document and window
        const handleLanguageChange = (event) => {
            // Handle different event structures
            let newLanguage = null;
            if (event.detail) {
                newLanguage = event.detail.language || event.detail;
            } else if (typeof event === 'string') {
                newLanguage = event;
            }
            
            // Validate the language
            if (!newLanguage || !['ar', 'en', 'fr'].includes(newLanguage)) {
                return;
            }
            
            // Clear any existing timeout
            if (this.languageChangeTimeout) {
                clearTimeout(this.languageChangeTimeout);
            }
            
            // Debounce language changes
            this.languageChangeTimeout = setTimeout(() => {
                if (this.currentLanguage !== newLanguage) {
                    this.currentLanguage = newLanguage;
                    this.updateChatLanguage();
                    // Show welcome message only if language actually changed and different from last welcome
                    if (this.lastWelcomeLanguage !== newLanguage) {
                        this.addLanguageSwitchWelcomeMessage();
                        this.lastWelcomeLanguage = newLanguage;
                    }
                }
            }, 300);
        };
        
        document.addEventListener('languageSwitch', handleLanguageChange);
        window.addEventListener('languageSwitch', handleLanguageChange);
        
        // Also listen for currentLanguage changes
        let lastLanguage = this.currentLanguage;
        setInterval(() => {
            if (window.currentLanguage && window.currentLanguage !== lastLanguage) {
                // Clear any existing timeout
                if (this.languageChangeTimeout) {
                    clearTimeout(this.languageChangeTimeout);
                }
                
                // Debounce language changes
                this.languageChangeTimeout = setTimeout(() => {
                    if (lastLanguage !== window.currentLanguage) {
                        lastLanguage = window.currentLanguage;
                        this.currentLanguage = window.currentLanguage;
                        this.updateChatLanguage();
                        // Show welcome message only if language actually changed and different from last welcome
                        if (this.lastWelcomeLanguage !== window.currentLanguage) {
                            this.addLanguageSwitchWelcomeMessage();
                            this.lastWelcomeLanguage = window.currentLanguage;
                        }
                    }
                }, 300);
            }
        }, 500);
    }

    createChatHTML() {
        const chatWidget = document.createElement('div');
        chatWidget.className = 'chat-widget';
        chatWidget.innerHTML = `
            <button class="chat-toggle" id="chatToggle">
                <i class="fas fa-comments"></i>
            </button>
            
            <div class="chat-container" id="chatContainer">
                <div class="chat-header">
                    <div class="chat-header-content">
                        <i class="fas fa-grip-vertical me-2" style="opacity: 0.7; font-size: 14px;"></i>
                        <h3 id="chatTitle">مساعد ودّاي الذكي</h3>
                    </div>
                    <button class="chat-close" id="chatClose" title="إغلاق المحادثة / Close Chat / Fermer le Chat">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="chat-messages" id="chatMessages">
                    <div class="typing-indicator" id="typingIndicator">
                        <span id="typingText">يكتب</span>
                        <div class="typing-dots">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
                
                <div class="chat-input-container">
                    <input type="text" class="chat-input" id="chatInput" placeholder="اسأل عن مملكة ودّاي...">
                    <button class="chat-send" id="chatSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(chatWidget);
        
        // Initialize chat container position immediately
        this.initializeChatPosition();
    }

    initializeChatPosition() {
        const chatContainer = document.getElementById('chatContainer');
        if (chatContainer) {
            // Set initial position using default values
            chatContainer.style.left = this.chatPosition.left + 'px';
            chatContainer.style.bottom = this.chatPosition.bottom + 'px';
            chatContainer.style.right = 'auto';
            chatContainer.style.top = 'auto';
            chatContainer.style.position = 'fixed';
            chatContainer.style.zIndex = '2001';
        }
    }

    bindEvents() {
        const chatToggle = document.getElementById('chatToggle');
        const chatClose = document.getElementById('chatClose');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        const chatContainer = document.getElementById('chatContainer');
        const chatHeader = chatContainer.querySelector('.chat-header');
        
        chatToggle.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !chatContainer.contains(e.target) && !chatToggle.contains(e.target)) {
                this.closeChat();
            }
        });
        
        // Close chat with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeChat();
            }
        });
        
        // Prevent chat container clicks from closing the chat
        chatContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Drag functionality
        this.setupDragFunctionality(chatHeader, chatContainer);
    }

    setupDragFunctionality(chatHeader, chatContainer) {
        // Mouse events
        chatHeader.addEventListener('mousedown', (e) => this.startDrag(e, chatContainer));
        document.addEventListener('mousemove', (e) => this.handleDrag(e, chatContainer));
        document.addEventListener('mouseup', () => this.endDrag(chatContainer));
        
        // Touch events for mobile
        chatHeader.addEventListener('touchstart', (e) => this.startDrag(e.touches[0], chatContainer), { passive: false });
        document.addEventListener('touchmove', (e) => this.handleDrag(e.touches[0], chatContainer), { passive: false });
        document.addEventListener('touchend', () => this.endDrag(chatContainer));
        
        // Prevent default drag behavior on images and other elements
        chatHeader.addEventListener('dragstart', (e) => e.preventDefault());
        
        // Handle window resize to keep chat in bounds
        window.addEventListener('resize', () => this.handleWindowResize(chatContainer));
    }

    startDrag(event, chatContainer) {
        // Don't start drag if clicking on close button
        if (event.target.closest('.chat-close')) {
            return;
        }
        
        this.isDragging = true;
        
        // Get current position
        const rect = chatContainer.getBoundingClientRect();
        this.dragOffset.x = event.clientX - rect.left;
        this.dragOffset.y = event.clientY - rect.top;
        
        // Add dragging class for visual feedback
        chatContainer.classList.add('dragging');
        document.body.style.userSelect = 'none'; // Prevent text selection
        
        event.preventDefault();
    }

    handleDrag(event, chatContainer) {
        if (!this.isDragging) return;
        
        event.preventDefault();
        
        // Calculate new position
        const newX = event.clientX - this.dragOffset.x;
        const newY = event.clientY - this.dragOffset.y;
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const containerWidth = chatContainer.offsetWidth;
        const containerHeight = chatContainer.offsetHeight;
        
        // Responsive constraints based on screen size
        let minMargin = 10;
        if (viewportWidth <= 480) {
            minMargin = 5;
        } else if (viewportWidth <= 768) {
            minMargin = 10;
        }
        
        // Constrain to viewport bounds with responsive margins
        const constrainedX = Math.max(minMargin, Math.min(newX, viewportWidth - containerWidth - minMargin));
        const constrainedY = Math.max(minMargin, Math.min(newY, viewportHeight - containerHeight - minMargin));
        
        // Update position
        chatContainer.style.left = constrainedX + 'px';
        chatContainer.style.top = constrainedY + 'px';
        chatContainer.style.right = 'auto';
        chatContainer.style.bottom = 'auto';
        
        // Store position for future use
        this.chatPosition = {
            left: constrainedX,
            top: constrainedY,
            right: 'auto',
            bottom: 'auto'
        };
    }

    endDrag(chatContainer) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        chatContainer.classList.remove('dragging');
        document.body.style.userSelect = ''; // Restore text selection
    }

    handleWindowResize(chatContainer) {
        if (!this.isOpen || this.chatPosition.left === undefined) return;
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const containerWidth = chatContainer.offsetWidth;
        const containerHeight = chatContainer.offsetHeight;
        
        // Responsive margins
        let minMargin = 10;
        if (viewportWidth <= 480) {
            minMargin = 5;
        } else if (viewportWidth <= 768) {
            minMargin = 10;
        }
        
        // Adjust position if out of bounds
        let newLeft = Math.max(minMargin, Math.min(this.chatPosition.left, viewportWidth - containerWidth - minMargin));
        let newTop = Math.max(minMargin, Math.min(this.chatPosition.top, viewportHeight - containerHeight - minMargin));
        
        // On mobile, snap to full width if dragged to edges
        if (viewportWidth <= 768) {
            if (newLeft <= minMargin * 2 || newLeft >= viewportWidth - containerWidth - minMargin * 2) {
                chatContainer.style.left = minMargin + 'px';
                chatContainer.style.right = minMargin + 'px';
                chatContainer.style.width = 'auto';
                newLeft = minMargin;
            }
        }
        
        if (newLeft !== this.chatPosition.left || newTop !== this.chatPosition.top) {
            chatContainer.style.left = newLeft + 'px';
            chatContainer.style.top = newTop + 'px';
            
            this.chatPosition.left = newLeft;
            this.chatPosition.top = newTop;
        }
    }

    setupKeywords() {
        this.keywords = {
            ar: {
                history: ['تاريخ', 'التاريخ', 'تأسيس', 'نشأة', 'بداية', 'عمر', 'عهد', 'فترة', 'حقبة', 'مؤسس'],
                rulers: ['سلطان', 'سلاطين', 'حاكم', 'حكام', 'ملك', 'ملوك', 'عبد الكريم', 'محمد شريف', 'يعقوب', 'أدم'],
                location: ['موقع', 'مكان', 'أين', 'جغرافية', 'خريطة', 'حدود', 'منطقة', 'تشاد', 'أفريقيا', 'صحراء'],
                culture: ['ثقافة', 'تراث', 'تقاليد', 'عادات', 'لغة', 'مابا', 'عربية', 'مجتمع', 'فنون'],
                society: ['مجتمع', 'قبائل', 'سكان', 'أهالي', 'شعب', 'ناس', 'أجناس', 'عشائر'],
                economy: ['اقتصاد', 'تجارة', 'أموال', 'ثروة', 'موارد', 'زراعة', 'صناعة', 'بضائع'],
                architecture: ['عمارة', 'بناء', 'مباني', 'قصر', 'مسجد', 'آثار', 'أطلال', 'معمار'],
                nature: ['طبيعة', 'مناخ', 'جبال', 'وديان', 'صحراء', 'نهر', 'مناظر', 'بيئة']
            },
            en: {
                history: ['history', 'historical', 'founded', 'establishment', 'origin', 'beginning', 'era', 'period', 'age', 'founder'],
                rulers: ['sultan', 'sultans', 'ruler', 'rulers', 'king', 'kings', 'abd al-karim', 'muhammad sharif', 'yaqub', 'adam'],
                location: ['location', 'place', 'where', 'geography', 'map', 'borders', 'region', 'chad', 'africa', 'desert'],
                culture: ['culture', 'cultural', 'heritage', 'traditions', 'customs', 'language', 'maba', 'arabic', 'society', 'arts'],
                society: ['society', 'tribes', 'people', 'population', 'inhabitants', 'community', 'ethnic', 'clans'],
                economy: ['economy', 'economic', 'trade', 'trading', 'commerce', 'wealth', 'resources', 'agriculture', 'goods'],
                architecture: ['architecture', 'building', 'buildings', 'palace', 'mosque', 'ruins', 'monuments', 'construction'],
                nature: ['nature', 'natural', 'climate', 'mountains', 'valleys', 'desert', 'river', 'landscape', 'environment']
            },
            fr: {
                history: ['histoire', 'historique', 'fondé', 'établissement', 'origine', 'début', 'ère', 'période', 'âge', 'fondateur'],
                rulers: ['sultan', 'sultans', 'dirigeant', 'dirigeants', 'roi', 'rois', 'abd al-karim', 'muhammad sharif', 'yaqub', 'adam'],
                location: ['lieu', 'endroit', 'où', 'géographie', 'carte', 'frontières', 'région', 'tchad', 'afrique', 'désert'],
                culture: ['culture', 'culturel', 'patrimoine', 'traditions', 'coutumes', 'langue', 'maba', 'arabe', 'société', 'arts'],
                society: ['société', 'tribus', 'gens', 'population', 'habitants', 'communauté', 'ethnique', 'clans'],
                economy: ['économie', 'économique', 'commerce', 'richesse', 'ressources', 'agriculture', 'biens'],
                architecture: ['architecture', 'bâtiment', 'bâtiments', 'palais', 'mosquée', 'ruines', 'monuments', 'construction'],
                nature: ['nature', 'naturel', 'climat', 'montagnes', 'vallées', 'désert', 'rivière', 'paysage', 'environnement']
            }
        };
    }

    updateChatLanguage() {
        const titles = {
            ar: 'مساعد ودّاي الذكي',
            en: 'Waddai AI Assistant',
            fr: 'Assistant IA Ouaddaï'
        };
        
        const placeholders = {
            ar: 'اسأل عن مملكة ودّاي...',
            en: 'Ask about Kingdom of Waddai...',
            fr: 'Demandez sur le Royaume du Ouaddaï...'
        };
        
        const typingTexts = {
            ar: 'يكتب',
            en: 'Typing',
            fr: 'Écrit'
        };
        
        const closeTooltips = {
            ar: 'إغلاق المحادثة',
            en: 'Close Chat',
            fr: 'Fermer le Chat'
        };
        
        // Ensure we have a valid language
        const language = this.currentLanguage && titles[this.currentLanguage] ? this.currentLanguage : 'ar';
        
        // Update all UI elements
        const chatTitle = document.getElementById('chatTitle');
        const chatInput = document.getElementById('chatInput');
        const typingText = document.getElementById('typingText');
        const chatClose = document.getElementById('chatClose');
        
        if (chatTitle) {
            chatTitle.textContent = titles[language];
        }
        if (chatInput) {
            chatInput.placeholder = placeholders[language];
        }
        if (typingText) {
            typingText.textContent = typingTexts[language];
        }
        if (chatClose) {
            chatClose.title = closeTooltips[language];
        }
    }

    addWelcomeMessage() {
        const welcomeMessages = {
            ar: 'مرحباً! أنا مساعد ذكي مختص بمملكة ودّاي. يمكنني الإجابة على أسئلتك حول تاريخ وثقافة وجغرافية مملكة ودّاي. كيف يمكنني مساعدتك؟',
            en: 'Hello! I am an AI assistant specialized in the Kingdom of Waddai. I can answer your questions about the history, culture, and geography of the Waddai Kingdom. How can I help you?',
            fr: 'Bonjour! Je suis un assistant IA spécialisé dans le Royaume du Ouaddaï. Je peux répondre à vos questions sur l\'histoire, la culture et la géographie du Royaume du Ouaddaï. Comment puis-je vous aider?'
        };
        
        this.addMessage(welcomeMessages[this.currentLanguage], 'bot');
    }

    addLanguageSwitchWelcomeMessage() {
        const switchMessages = {
            ar: 'مرحباً! أنا مساعد ذكي مختص بمملكة ودّاي. يمكنني الإجابة على أسئلتك حول تاريخ وثقافة وجغرافية مملكة ودّاي باللغة العربية. كيف يمكنني مساعدتك؟',
            en: 'Hello! I am an AI assistant specialized in the Kingdom of Waddai. I can answer your questions about the history, culture, and geography of the Waddai Kingdom in English. How can I help you?',
            fr: 'Bonjour! Je suis un assistant IA spécialisé dans le Royaume du Ouaddaï. Je peux répondre à vos questions sur l\'histoire, la culture et la géographie du Royaume du Ouaddaï en français. Comment puis-je vous aider?'
        };
        
        // Ensure we have a valid language, fallback to 'ar' if needed
        const language = this.currentLanguage && switchMessages[this.currentLanguage] ? this.currentLanguage : 'ar';
        const messageText = switchMessages[language];
        
        // Check if the last message is already this welcome message
        const lastMessage = this.chatHistory[this.chatHistory.length - 1];
        if (lastMessage && lastMessage.sender === 'bot' && lastMessage.text === messageText) {
            return; // Don't add duplicate welcome message
        }
        
        this.addMessage(messageText, 'bot');
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatContainer = document.getElementById('chatContainer');
        
        if (this.isOpen) {
            // Sync language when opening chat
            this.currentLanguage = window.currentLanguage || this.currentLanguage;
            this.updateChatLanguage();
            
            // Show initial welcome message if this is the first time opening the chat
            if (this.chatHistory.length === 0) {
                this.addLanguageSwitchWelcomeMessage();
                this.lastWelcomeLanguage = this.currentLanguage;
            }
            
            // Apply stored position or default position
            if (this.chatPosition.top !== undefined) {
                // Use dragged position
                chatContainer.style.left = this.chatPosition.left + 'px';
                chatContainer.style.top = this.chatPosition.top + 'px';
                chatContainer.style.right = 'auto';
                chatContainer.style.bottom = 'auto';
            } else {
                // Use default position (initial load)
                chatContainer.style.left = this.chatPosition.left + 'px';
                chatContainer.style.bottom = this.chatPosition.bottom + 'px';
                chatContainer.style.right = 'auto';
                chatContainer.style.top = 'auto';
            }
            
            // Show and animate in
            chatContainer.style.display = 'flex';
            chatContainer.style.transform = 'scale(0.95)';
            chatContainer.style.opacity = '0';
            
            setTimeout(() => {
                chatContainer.style.transform = 'scale(1)';
                chatContainer.style.opacity = '1';
                document.getElementById('chatInput').focus();
            }, 10);
        } else {
            this.closeChat();
        }
    }

    closeChat() {
        this.isOpen = false;
        const chatContainer = document.getElementById('chatContainer');
        
        // Clear any pending language change timeout
        if (this.languageChangeTimeout) {
            clearTimeout(this.languageChangeTimeout);
            this.languageChangeTimeout = null;
        }
        
        // Add closing animation
        chatContainer.style.transform = 'scale(0.95)';
        chatContainer.style.opacity = '0';
        
        setTimeout(() => {
            chatContainer.style.display = 'none';
            // Reset animation styles for next opening
            chatContainer.style.transform = 'scale(1)';
            chatContainer.style.opacity = '1';
        }, 200);
    }

    sendMessage(text = null) {
        const input = document.getElementById('chatInput');
        const message = text || input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        this.showTyping();
        
        // Try OpenAI API first, fallback to local system
        this.generateAIResponse(message)
            .then(response => {
                this.hideTyping();
                this.addMessage(response, 'bot');
            })
            .catch(error => {
                console.error('OpenAI API failed:', error);
                this.hideTyping();
                // Fallback to local keyword-based system
                const fallbackResponse = this.generateLocalResponse(message);
                this.addMessage(fallbackResponse, 'bot');
            });
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.innerHTML = text;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.chatHistory.push({ text, sender, timestamp: Date.now() });
    }

    showTyping() {
        this.isTyping = true;
        document.getElementById('typingIndicator').style.display = 'flex';
        document.getElementById('chatSend').disabled = true;
    }

    hideTyping() {
        this.isTyping = false;
        document.getElementById('typingIndicator').style.display = 'none';
        document.getElementById('chatSend').disabled = false;
    }

    async generateAIResponse(query) {
        try {
            // Build system prompt based on current language
            const systemPrompts = {
                            ar: `أنت مساعد ذكي مختص بمملكة ودّاي التاريخية في تشاد. أجب على جميع الأسئلة باللغة العربية بطريقة ودية ومفيدة.

            معلومات أساسية عن مملكة ودّاي:
- مملكة تاريخية في شرق تشاد وغرب السودان
- تأسست في القرن السادس عشر
- كانت مركزاً مهماً للتجارة والثقافة الإسلامية
- اشتهرت بالتنوع العرقي والثقافي
- لها تاريخ غني في الحكم والسياسة والاقتصاد

            أجب بشكل مفصل ومفيد عن أي سؤال حول تاريخ وثقافة وجغرافية مملكة ودّاي.`,
                
                en: `You are an AI assistant specialized in the historical Kingdom of Waddai in Chad. Answer all questions in English in a friendly and helpful manner.

Basic information about the Kingdom of Waddai:
- Historical kingdom in eastern Chad and western Sudan
- Founded in the 16th century
- Was an important center for trade and Islamic culture
- Known for ethnic and cultural diversity
- Has a rich history in governance, politics, and economy

Provide detailed and helpful answers about the history, culture, and geography of the Waddai Kingdom.`,
                
                fr: `Vous êtes un assistant IA spécialisé dans le Royaume historique du Ouaddaï au Tchad. Répondez à toutes les questions en français de manière amicale et utile.

Informations de base sur le Royaume du Ouaddaï:
- Royaume historique dans l'est du Tchad et l'ouest du Soudan
- Fondé au XVIe siècle
- Était un centre important pour le commerce et la culture islamique
- Connu pour sa diversité ethnique et culturelle
- A une riche histoire en gouvernance, politique et économie

Fournissez des réponses détaillées et utiles sur l'histoire, la culture et la géographie du Royaume du Ouaddaï.`
            };

            // Add user message to conversation history
            this.conversationHistory.push({
                role: 'user',
                content: query
            });

            // Keep conversation history reasonable (last 10 messages)
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }

            const response = await fetch(this.openaiApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.openaiApiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: systemPrompts[this.currentLanguage] || systemPrompts.ar
                        },
                        ...this.conversationHistory
                    ],
                    max_tokens: 500,
                    temperature: 0.7,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            const aiResponse = data.choices[0]?.message?.content || this.getErrorMessage(this.currentLanguage);

            // Add AI response to conversation history
            this.conversationHistory.push({
                role: 'assistant',
                content: aiResponse
            });

            return aiResponse;

        } catch (error) {
            console.error('OpenAI API Error:', error);
            throw error; // Re-throw to trigger fallback
        }
    }

    generateLocalResponse(query) {
        const lang = this.currentLanguage;
        
        // Fallback messages when API fails
        const fallbackMessages = {
            ar: 'عذراً، هناك مشكلة في الاتصال بالخدمة الذكية. يمكنك تجربة السؤال مرة أخرى لاحقاً أو تصفح المحتوى المتاح في أقسام الموقع المختلفة.',
            en: 'Sorry, there is an issue connecting to the AI service. You can try asking again later or browse the available content in the different sections of the website.',
            fr: 'Désolé, il y a un problème de connexion au service IA. Vous pouvez réessayer plus tard ou parcourir le contenu disponible dans les différentes sections du site web.'
        };

        // Simple keyword-based response as fallback
        const category = this.categorizeQuery(query, lang);
        
        if (typeof content !== 'undefined' && content[lang]) {
            const relevantContent = this.findRelevantContent(category, content[lang], query);
            
            if (relevantContent) {
                return this.formatResponse(relevantContent, category, lang);
            }
        }
        
        return fallbackMessages[lang] || fallbackMessages.ar;
    }

    getErrorMessage(lang) {
        const errorMessages = {
            ar: 'عذراً، لا أستطيع الإجابة على هذا السؤال الآن. يرجى المحاولة مرة أخرى.',
            en: 'Sorry, I cannot answer this question right now. Please try again.',
            fr: 'Désolé, je ne peux pas répondre à cette question maintenant. Veuillez réessayer.'
        };
        return errorMessages[lang] || errorMessages.ar;
    }

    getDefaultResponse(lang) {
        const defaultMessages = {
            ar: 'أعتذر، لم أفهم سؤالك بوضوح. يمكنك السؤال عن تاريخ مملكة ودّاي، أو حكامها، أو موقعها، أو ثقافتها. كيف يمكنني مساعدتك؟',
            en: 'I apologize, I did not understand your question clearly. You can ask about the history of the Waddai Kingdom, its rulers, location, or culture. How can I help you?',
            fr: 'Je m\'excuse, je n\'ai pas compris clairement votre question. Vous pouvez poser des questions sur l\'histoire du Royaume du Ouaddaï, ses dirigeants, son emplacement ou sa culture. Comment puis-je vous aider?'
        };
        return defaultMessages[lang] || defaultMessages.ar;
    }

    categorizeQuery(query, lang) {
        const keywords = this.keywords[lang];
        let bestMatch = null;
        let maxMatches = 0;
        
        for (const [category, categoryKeywords] of Object.entries(keywords)) {
            const matches = categoryKeywords.filter(keyword => 
                query.includes(keyword.toLowerCase())
            ).length;
            
            if (matches > maxMatches) {
                maxMatches = matches;
                bestMatch = category;
            }
        }
        
        return bestMatch || 'general';
    }

    findRelevantContent(category, content, query) {
        const sections = content.sections;
        
        switch (category) {
            case 'history':
                return {
                    type: 'history',
                    content: sections.history?.content || sections.ancientHistory?.content || '',
                    title: sections.history?.title || sections.ancientHistory?.title || ''
                };
            
            case 'rulers':
                return {
                    type: 'rulers',
                    content: sections.history?.content || sections.ancientHistory?.content || '',
                    title: sections.history?.title || sections.ancientHistory?.title || ''
                };
            
            case 'location':
                return {
                    type: 'location',
                    content: sections.places?.content || sections.landscape?.content || sections.spaces?.content || '',
                    title: sections.places?.title || sections.landscape?.title || sections.spaces?.title || ''
                };
            
            case 'culture':
                return {
                    type: 'culture',
                    content: sections.intangibleHeritage?.content || sections.cultureHeritage?.content || '',
                    title: sections.intangibleHeritage?.title || sections.cultureHeritage?.title || ''
                };
            
            case 'society':
                return {
                    type: 'society',
                    content: sections.society?.content || sections.cultureHeritage?.content || '',
                    title: sections.society?.title || sections.cultureHeritage?.title || ''
                };
            
            case 'economy':
                return {
                    type: 'economy',
                    content: sections.economy?.content || sections.society?.content || '',
                    title: sections.economy?.title || sections.society?.title || ''
                };
            
            case 'architecture':
                return {
                    type: 'architecture',
                    content: sections.cultureHeritage?.content || sections.places?.content || '',
                    title: sections.cultureHeritage?.title || sections.places?.title || ''
                };
            
            case 'nature':
                return {
                    type: 'nature',
                    content: sections.spaces?.content || sections.landscape?.content || '',
                    title: sections.spaces?.title || sections.landscape?.title || ''
                };
            
            default:
                return {
                    type: 'general',
                    content: sections.mission?.content || sections.ancientHistory?.content || '',
                    title: sections.mission?.title || sections.ancientHistory?.title || ''
                };
        }
    }

    formatResponse(contentData, category, lang) {
        if (!contentData.content) {
            const noDataMessages = {
                ar: 'عذراً، لا توجد معلومات متاحة حول هذا الموضوع حالياً. يمكنك استخدام الاقتراحات أدناه أو سؤال موضوع آخر.',
                en: 'Sorry, no information is available about this topic at the moment. You can use the suggestions below or ask about another topic.',
                fr: 'Désolé, aucune information n\'est disponible sur ce sujet pour le moment. Vous pouvez utiliser les suggestions ci-dessous ou poser une question sur un autre sujet.'
            };
            return noDataMessages[lang];
        }

        // Extract meaningful text from HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = contentData.content;
        
        // Remove HTML tags and get clean text
        let cleanText = tempDiv.textContent || tempDiv.innerText || '';
        
        // Split into sentences and take first few meaningful ones
        const sentences = cleanText.split(/[.!?]\s+/).filter(s => s.length > 20);
        const summary = sentences.slice(0, 3).join('. ') + (sentences.length > 3 ? '.' : '');
        
        const categoryResponses = {
            ar: {
                            history: `<strong>تاريخ مملكة ودّاي:</strong><br><br>${summary}<br><br>لمزيد من التفاصيل، يمكنك زيارة قسم التاريخ في الموقع.`,
            rulers: `<strong>حكام مملكة ودّاي:</strong><br><br>${summary}<br><br>يمكنك معرفة المزيد عن السلاطين في قسم التاريخ.`,
            location: `<strong>موقع مملكة ودّاي:</strong><br><br>${summary}<br><br>للمزيد من المعلومات الجغرافية، تفضل بزيارة قسم الأماكن والفضاءات.`,
            culture: `<strong>ثقافة مملكة ودّاي:</strong><br><br>${summary}<br><br>اكتشف المزيد في قسم التراث الثقافي.`,
            society: `<strong>مجتمع مملكة ودّاي:</strong><br><br>${summary}<br><br>تعرف على المزيد في قسم المجتمع والثقافة.`,
            economy: `<strong>اقتصاد مملكة ودّاي:</strong><br><br>${summary}<br><br>لمعلومات أكثر تفصيلاً، زر قسم المجتمع.`,
            architecture: `<strong>عمارة مملكة ودّاي:</strong><br><br>${summary}<br><br>استكشف المزيد في قسم التراث الثقافي.`,
            nature: `<strong>طبيعة مملكة ودّاي:</strong><br><br>${summary}<br><br>اكتشف المزيد في قسم الفضاءات والأماكن.`,
                general: `${summary}<br><br>لمزيد من المعلومات، يمكنك تصفح الأقسام المختلفة في الموقع أو استخدام الاقتراحات أدناه.`
            },
            en: {
                history: `<strong>History of Waddai Kingdom:</strong><br><br>${summary}<br><br>For more details, you can visit the History section on the website.`,
                rulers: `<strong>Rulers of Waddai Kingdom:</strong><br><br>${summary}<br><br>You can learn more about the sultans in the History section.`,
                location: `<strong>Location of Waddai Kingdom:</strong><br><br>${summary}<br><br>For more geographical information, please visit the Places and Spaces section.`,
                culture: `<strong>Culture of Waddai Kingdom:</strong><br><br>${summary}<br><br>Discover more in the Cultural Heritage section.`,
                society: `<strong>Society of Waddai Kingdom:</strong><br><br>${summary}<br><br>Learn more in the Society and Culture section.`,
                economy: `<strong>Economy of Waddai Kingdom:</strong><br><br>${summary}<br><br>For more detailed information, visit the Society section.`,
                architecture: `<strong>Architecture of Waddai Kingdom:</strong><br><br>${summary}<br><br>Explore more in the Cultural Heritage section.`,
                nature: `<strong>Nature of Waddai Kingdom:</strong><br><br>${summary}<br><br>Discover more in the Spaces and Places section.`,
                general: `${summary}<br><br>For more information, you can browse the different sections on the website or use the suggestions below.`
            },
            fr: {
                history: `<strong>Histoire du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Pour plus de détails, vous pouvez visiter la section Histoire sur le site web.`,
                rulers: `<strong>Dirigeants du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Vous pouvez en apprendre davantage sur les sultans dans la section Histoire.`,
                location: `<strong>Localisation du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Pour plus d'informations géographiques, veuillez visiter la section Lieux et Espaces.`,
                culture: `<strong>Culture du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Découvrez plus dans la section Patrimoine Culturel.`,
                society: `<strong>Société du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Apprenez-en plus dans la section Société et Culture.`,
                economy: `<strong>Économie du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Pour des informations plus détaillées, visitez la section Société.`,
                architecture: `<strong>Architecture du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Explorez plus dans la section Patrimoine Culturel.`,
                nature: `<strong>Nature du Royaume du Ouaddaï:</strong><br><br>${summary}<br><br>Découvrez plus dans la section Espaces et Lieux.`,
                general: `${summary}<br><br>Pour plus d'informations, vous pouvez parcourir les différentes sections du site web ou utiliser les suggestions ci-dessous.`
            }
        };
        
        return categoryResponses[lang][category] || categoryResponses[lang].general;
    }
}

// Initialize AI Chat when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load and set up the language
    setTimeout(() => {
        window.waddaiAI = new WaddaiAI();
    }, 1500);
});

// Make it globally available
window.WaddaiAI = WaddaiAI; 
