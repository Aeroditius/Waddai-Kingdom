// Current language state
let currentLanguage = 'ar';
// Make it globally available too
window.currentLanguage = 'ar';

// Navigation groups with their labels - Optimized for better organization and space management
const navigationGroups = {
    main: {
        label: { ar: 'الرئيسية', en: 'Main', fr: 'Principal' },
        items: ['mission', 'vision', 'goals'],
        icon: 'fas fa-home'
    },
    geography: {
        label: { ar: 'الجغرافيا والتاريخ', en: 'Geography & History', fr: 'Géographie & Histoire' },
        items: ['landscape', 'history', 'places', 'spaces'],
        icon: 'fas fa-globe-africa'
    },
    heritage: {
        label: { ar: 'التراث والثقافة', en: 'Heritage & Culture', fr: 'Patrimoine & Culture' },
        items: ['ancientHistory', 'cultureHeritage', 'intangibleHeritage'],
        icon: 'fas fa-landmark'
    },
    society: {
        label: { ar: 'المجتمع', en: 'Community', fr: 'Communauté' },
        items: ['society', 'socialLife'],
        icon: 'fas fa-users'
    },
    media: {
        label: { ar: 'الوسائط', en: 'Media', fr: 'Médias' },
        items: ['publications', 'gallery', 'video'],
        icon: 'fas fa-photo-video'
    },
    services: {
        label: { ar: 'الخدمات', en: 'Services', fr: 'Services' },
        items: ['shop', 'map', 'donate', 'news', 'events'],
        icon: 'fas fa-concierge-bell'
    },
    language: {
        label: { ar: 'اللغة', en: 'Language', fr: 'Langue' },
        items: ['language'],
        icon: 'fas fa-language'
    },
    governance: {
        label: { ar: 'الاقتصاد', en: 'Economy', fr: 'Économie' },
        items: ['economy'],
        icon: 'fas fa-coins'
    }
};

// Initialize the website with enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // First load content and set initial language
    if (typeof content !== 'undefined') {
        currentLanguage = 'ar'; // Ensure language is set
        createSections();
        createNavigation();
        updateContent();
        setupScrollSpy();
        updateLanguageButtons();
        initializeVideoPlaylist();
        createBackToTopButton();
        addKeyboardNavigation();
        addProgressIndicator();
    }
});

// Create navigation items with improved interactivity
function createNavigation() {
    const navList = document.querySelector('.navbar-nav');
    navList.innerHTML = ''; // Clear existing items
    
    // Create grouped navigation with enhanced features
    Object.entries(navigationGroups).forEach(([group, config]) => {
        const items = config.items;
        if (items.length === 1) {
            // Single items with icons - use group label instead of content navigation
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.innerHTML = `
                <a class="nav-link d-flex align-items-center" href="#${items[0]}" data-nav="${items[0]}" data-group-label="${group}">
                    <i class="${config.icon} me-2"></i>
                    <span class="nav-text me-2">${config.label[currentLanguage] || config.label['en']}</span>
                </a>
            `;
            navList.appendChild(li);
        } else {
            // Create enhanced dropdown for groups
            const li = document.createElement('li');
            li.className = 'nav-item dropdown';
            li.innerHTML = `
                <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" 
                   data-bs-toggle="dropdown" aria-expanded="false" data-nav-group="${group}">
                    <i class="${config.icon} me-2"></i>
                    <span class="nav-text me-2">${config.label[currentLanguage] || config.label['en']}</span>
                    <i class="fas fa-chevron-down ms-2 dropdown-arrow"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                    ${items.map(item => `
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="#${item}" data-nav="${item}">
                                <i class="fas fa-circle me-2 dropdown-bullet"></i>
                                <span class="dropdown-text me-2"></span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `;
            navList.appendChild(li);
        }
    });

    // Add smooth scroll behavior to navigation links
    document.querySelectorAll('.nav-link[href^="#"], .dropdown-item[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Add active state animation
                this.classList.add('nav-clicking');
                setTimeout(() => this.classList.remove('nav-clicking'), 200);
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbar = document.querySelector('.navbar-collapse');
                if (navbar && navbar.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    if (toggler) toggler.click();
                }
            }
        });
    });

    // Add hover effects for dropdown arrows
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.dropdown-arrow');
            if (arrow) arrow.style.transform = 'rotate(180deg)';
        });
        
        toggle.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.dropdown-arrow');
            if (arrow && !this.classList.contains('show')) {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Create content sections
function createSections() {
    const contentContainer = document.getElementById('content-sections');
    contentContainer.innerHTML = ''; // Clear existing content first
    
    // Get sections that are referenced in navigation groups
    const navigationSections = new Set();
    Object.values(navigationGroups).forEach(group => {
        group.items.forEach(item => {
            navigationSections.add(item);
        });
    });
    
    console.log('Navigation sections to create:', Array.from(navigationSections));
    
    // Only create sections that exist in navigation groups and have content in Arabic (reference language)
    navigationSections.forEach(key => {
        if (content.ar && content.ar.sections && content.ar.sections[key]) {
            console.log('Creating section:', key);
        const section = document.createElement('section');
        section.className = 'section-card card shadow-sm';
        section.id = key;
        
        section.innerHTML = `
            <div class="card-body">
                <h2 class="card-title" data-section="${key}-title"></h2>
                <div class="card-text" data-section="${key}-content"></div>
            </div>
        `;
        contentContainer.appendChild(section);
        } else {
            console.log('Skipping section (not in Arabic content):', key);
        }
    });

    // Add store section (shop is in navigation groups)
    console.log('Creating shop section');
    const storeSection = document.createElement('section');
    storeSection.id = 'shop';
    storeSection.className = 'section-card card shadow-sm';
    storeSection.innerHTML = `
        <div class="card-body">
            <h2 class="card-title" data-section="shop-title"></h2>
            <div class="card-text" data-section="shop-content"></div>
        </div>
    `;
    contentContainer.appendChild(storeSection);
    
    console.log('Total sections created:', contentContainer.children.length);
}

// Switch language function
function switchLanguage(lang) {
    // Store the old language before changing
    const oldLanguage = window.currentLanguage;
    
    // Store current language globally for video captions
    window.currentLanguage = lang;
    currentLanguage = lang; // Update the local variable too
    
    // Update document language and direction
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.className = 'rtl-layout';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.className = 'ltr-layout';
    }
    
    // Update page title
    const currentContent = content[lang];
    document.title = currentContent.siteName;
    
    // Create navigation and sections with new language
    createNavigation();
    createSections();
    updateContent();
    
    // Update language dropdown display
    const currentLanguageSpan = document.getElementById('currentLanguage');
    const languageNames = {
        'ar': 'العربية',
        'en': 'English', 
        'fr': 'Français'
    };
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = languageNames[lang] || lang;
    }
    
    // Update video captions for new language
    setTimeout(() => {
        if (typeof window.updateAllVideoCaptions === 'function') {
            window.updateAllVideoCaptions();
        }
    }, 500);
    
    // Dispatch language change event for other scripts (like AI chat)
    const languageChangeEvent = new CustomEvent('languageSwitch', { 
        detail: { language: lang, oldLanguage: oldLanguage },
        bubbles: true
    });
    
    // Dispatch on both document and window to ensure it's caught
    document.dispatchEvent(languageChangeEvent);
    window.dispatchEvent(languageChangeEvent);
}

// Update all content based on selected language
function updateContent() {
    const currentContent = content[currentLanguage];
    
    // Update site name while preserving the logo
    const siteNameElement = document.querySelector('[data-key="siteName"]');
    if (siteNameElement) {
        // Clear all content and rebuild it properly
        siteNameElement.innerHTML = '';
        
        // Add responsive site name text
        const textContainer = document.createElement('span');
        textContainer.className = 'navbar-text-container';
        
        // Full name for larger screens
        const fullName = document.createElement('span');
        fullName.className = 'd-none d-md-inline';
        fullName.textContent = currentContent.siteName;
        
        // Abbreviated name for smaller screens
        const shortName = document.createElement('span');
        shortName.className = 'd-inline d-md-none';
        const abbreviatedNames = {
            ar: 'ودّاي',
            en: 'Waddai',
            fr: 'Ouaddaï'
        };
        shortName.textContent = abbreviatedNames[currentLanguage] || 'Waddai';
        
        textContainer.appendChild(fullName);
        textContainer.appendChild(shortName);
        siteNameElement.appendChild(textContainer);
    }
    
    // Update navigation including group labels
    Object.entries(currentContent.navigation).forEach(([key, value]) => {
        const navLink = document.querySelector(`[data-nav="${key}"]`);
        if (navLink) {
            // Check if this is a single item with a group label
            const groupLabel = navLink.getAttribute('data-group-label');
            if (groupLabel && navigationGroups[groupLabel]) {
                // Use the group label instead of content navigation
                const textSpan = navLink.querySelector('.nav-text');
                if (textSpan) {
                    textSpan.textContent = navigationGroups[groupLabel].label[currentLanguage];
                }
            } else {
                // Regular dropdown items
                const textSpan = navLink.querySelector('.nav-text, .dropdown-text');
                if (textSpan) {
                    textSpan.textContent = value;
                } else {
                    navLink.textContent = value;
                }
            }
        }
    });
    
    // Update group labels with improved text handling
    document.querySelectorAll('[data-nav-group]').forEach(group => {
        const groupKey = group.getAttribute('data-nav-group');
        const textSpan = group.querySelector('.nav-text');
        if (textSpan && navigationGroups[groupKey]) {
            textSpan.textContent = navigationGroups[groupKey].label[currentLanguage];
        }
    });
    
    // Update sections
    Object.entries(currentContent.sections).forEach(([key, section]) => {
        const sectionElement = document.getElementById(key);
        if (sectionElement) {
            const titleElement = sectionElement.querySelector(`[data-section="${key}-title"]`);
            const contentElement = sectionElement.querySelector(`[data-section="${key}-content"]`);
            
            if (titleElement) titleElement.innerHTML = section.title;
            if (contentElement) {
                contentElement.innerHTML = section.content;
                
                // Initialize gallery if this is the gallery section
                if (key === 'gallery') {
                    // Dispatch event to notify gallery.js
                    setTimeout(() => {
                        const event = new CustomEvent('contentUpdated', { detail: { section: key } });
                        document.dispatchEvent(event);
                        
                        // Also call gallery initialization if available
                        if (typeof window.reinitializeGallery === 'function') {
                            window.reinitializeGallery();
                        }
                    }, 200);
                }
                
                // Initialize video controls if this is the video section
                if (key === 'video') {
                    setTimeout(() => {
                        // Dispatch event to notify video.js
                        const event = new CustomEvent('contentUpdated', { detail: { section: key } });
                        document.dispatchEvent(event);
                        
                        // Also call video initialization if available
                        if (typeof window.initializeVideoControls === 'function') {
                            window.initializeVideoControls();
                        }
                    }, 200);
                }
            }
        }
    });

    // Update store section
    const storeSection = document.getElementById('shop');
    if (storeSection && currentContent.store) {
        const storeContent = currentContent.store;
        storeSection.querySelector('.card-title').innerHTML = storeContent.title;
        storeSection.querySelector('.card-text').innerHTML = `
            <p class="text-center mb-4">${storeContent.description}</p>
            <div id="book-list" class="book-list">
                ${storeContent.books.map(book => `
                    <div class="book-card">
                        <img src="${book.image.replace('images/gallery/', 'images/')}" 
                             alt="${book.title}" 
                             class="book-image"
                             onerror="this.onerror=null; this.src='images/placeholder-book.jpg';">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">${currentLanguage === 'en' ? 'by ' : currentLanguage === 'fr' ? 'par ' : ''}${book.author}</p>
                        <p class="book-price">${book.price}</p>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (storeSection && !currentContent.store) {
        // Hide store section if no store content available
        storeSection.style.display = 'none';
    }
    
    // Update footer
    document.querySelector('[data-key="footer"]').textContent = currentContent.footer;

    // Setup scroll spy after content is updated
    setupScrollSpy();
    updateLanguageButtons();
    updateBackToTopLabel();
    
    // Reinitialize gallery after content update
    setTimeout(() => {
        if (typeof window.reinitializeGallery === 'function') {
            window.reinitializeGallery();
        }
    }, 400);
}

// Enhanced scroll spy
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    let ticking = false;
    
    function updateActiveSection() {
        if (!ticking) {
            requestAnimationFrame(() => {
                let current = '';
                const scrollPosition = window.pageYOffset + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });
                
                // Update navigation active states
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
                
                ticking = false;
            });
        }
        ticking = true;
    }
    
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    
    // Initial update
    updateActiveSection();
}

// Update language buttons
function updateLanguageButtons() {
    // Update the current language display in the dropdown button
    const currentLanguageSpan = document.getElementById('currentLanguage');
    const languageNames = {
        'ar': 'العربية',
        'en': 'English', 
        'fr': 'Français'
    };
    
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = languageNames[currentLanguage];
    }
    
    // Update active state for dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item[data-lang]');
    dropdownItems.forEach(item => {
        const lang = item.getAttribute('data-lang');
        if (lang === currentLanguage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Video Playlist Functionality
function initializeVideoPlaylist() {
    const mainVideo = document.getElementById('mainVideo');
    const playlistItems = document.querySelectorAll('.playlist-item');

    if (!mainVideo || !playlistItems.length) return;

    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active state
            playlistItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update video source
            const videoSrc = item.dataset.video;
            const posterSrc = item.dataset.poster;
            const videoTitle = item.querySelector('h4').textContent;
            const videoDescription = item.querySelector('p').textContent;

            // Update main video
            mainVideo.src = videoSrc;
            mainVideo.poster = posterSrc;
            mainVideo.load();
            mainVideo.play();

            // Update video info
            const videoInfo = document.querySelector('.video-info');
            if (videoInfo) {
                videoInfo.querySelector('.video-title').textContent = videoTitle;
                videoInfo.querySelector('.video-description').textContent = videoDescription;
            }
        });
    });

    // Handle video end
    mainVideo.addEventListener('ended', () => {
        const currentIndex = Array.from(playlistItems).findIndex(item => item.classList.contains('active'));
        const nextIndex = (currentIndex + 1) % playlistItems.length;
        playlistItems[nextIndex].click();
    });
}

// Create back to top button with multilingual support
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.id = 'backToTopBtn';
    document.body.appendChild(backToTopBtn);
    
    // Update aria-label based on current language
    updateBackToTopLabel();
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top with haptic feedback on supported devices
    backToTopBtn.addEventListener('click', () => {
        // Add click animation
        backToTopBtn.style.transform = 'translateY(0) scale(0.95)';
        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 150);
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Optional: Haptic feedback for mobile devices
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
}

// Update back-to-top button aria-label based on current language
function updateBackToTopLabel() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        const labels = {
            ar: 'العودة إلى الأعلى',
            en: 'Back to top',
            fr: 'Retour en haut'
        };
        backToTopBtn.setAttribute('aria-label', labels[currentLanguage] || labels['en']);
        backToTopBtn.setAttribute('title', labels[currentLanguage] || labels['en']);
    }
}

// Add keyboard navigation support
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Alt + H for home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Alt + M for menu (focus first nav item)
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const firstNavLink = document.querySelector('.nav-link');
            if (firstNavLink) firstNavLink.focus();
        }
        
        // Escape to close any open dropdowns
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                const toggle = menu.previousElementSibling;
                if (toggle) toggle.click();
            });
        }
    });
}

// Add reading progress indicator
function addProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function renderStore() {
    const storeSection = document.createElement('section');
    storeSection.id = 'shop';
    storeSection.className = 'section-card card shadow-sm';
    
    const currentLang = getCurrentLanguage();
    const storeContent = content[currentLang].store;
    
    storeSection.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${storeContent.title}</h2>
            <p class="text-center mb-4">${storeContent.description}</p>
            <div id="book-list" class="book-list">
                ${storeContent.books.map(book => `
                    <div class="book-card">
                        <img src="${book.image}" 
                             alt="${book.title}" 
                             class="book-image"
                             onerror="this.onerror=null; this.src='images/placeholder-book.jpg';">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">${currentLang === 'en' ? 'by ' : currentLang === 'fr' ? 'par ' : ''}${book.author}</p>
                        <p class="book-price">${book.price}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return storeSection;
}

// Update the renderContent function to include the store section
function renderContent() {
    const contentContainer = document.getElementById('content-sections');
    contentContainer.innerHTML = '';
    
    // Add other sections
    // ... existing sections ...
    
    // Add store section
    contentContainer.appendChild(renderStore());
}

// Load gallery script
function loadGalleryScript() {
    const galleryScript = document.createElement('script');
    galleryScript.src = 'js/gallery.js';
    document.body.appendChild(galleryScript);
}

// Initialize video functionality - enhanced with custom controls
function initializeVideos() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach((item, index) => {
        const video = item.querySelector('.video-player');
        const playBtn = item.querySelector('.video-play-btn');
        const container = item.querySelector('.video-container');
        
        if (video && container) {
            // Create play button if it doesn't exist
            if (!playBtn) {
                const controlsDiv = document.createElement('div');
                controlsDiv.className = 'video-controls';
                
                const playButton = document.createElement('button');
                playButton.className = 'video-play-btn';
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                playButton.setAttribute('aria-label', 'Play/Pause');
                
                controlsDiv.appendChild(playButton);
                container.appendChild(controlsDiv);
                
                // Set up click handler for the new button
                setupVideoControls(video, playButton, container);
            } else {
                // Set up click handler for existing button
                setupVideoControls(video, playBtn, container);
            }
            
            // Handle video events
            video.addEventListener('play', () => {
                pauseOtherVideos(video);
                container.classList.add('playing');
                updatePlayButton(container.querySelector('.video-play-btn'), true);
            });
            
            video.addEventListener('pause', () => {
                container.classList.remove('playing');
                updatePlayButton(container.querySelector('.video-play-btn'), false);
            });
            
            video.addEventListener('ended', () => {
                container.classList.remove('playing');
                updatePlayButton(container.querySelector('.video-play-btn'), false);
            });
            
            video.addEventListener('loadeddata', () => {
                // Video data loaded
            });
            
            video.addEventListener('error', (e) => {
                // Handle video error
            });
        }
    });
}

function setupVideoControls(video, playBtn, container) {
    // Play button click handler
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleVideo(video);
    });
    
    // Container click handler (for easy play/pause)
    container.addEventListener('click', (e) => {
        // Only trigger if clicking on the container itself, not controls
        if (e.target === container || e.target === video) {
            toggleVideo(video);
        }
    });
}

function toggleVideo(video) {
    if (video.paused) {
        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
    } else {
        video.pause();
    }
}

function updatePlayButton(playBtn, isPlaying) {
    if (playBtn) {
        const icon = playBtn.querySelector('i');
        if (isPlaying) {
            icon.className = 'fas fa-pause';
            playBtn.classList.add('playing');
        } else {
            icon.className = 'fas fa-play';
            playBtn.classList.remove('playing');
        }
    }
}

function pauseOtherVideos(currentVideo) {
    const allVideos = document.querySelectorAll('.video-player');
    allVideos.forEach(video => {
        if (video !== currentVideo && !video.paused) {
            video.pause();
        }
    });
}

// Remove old video functions that relied on thumbnails
function playVideo(videoItem) {
    // This function is no longer needed since we don't have thumbnails
    return;
}

function pauseAllVideos() {
    const allVideos = document.querySelectorAll('.video-player');
    allVideos.forEach(video => {
        if (!video.paused) {
            video.pause();
        }
    });
}

// Enhanced content update with video initialization
const originalUpdateContent = updateContent;
updateContent = function(lang) {
    originalUpdateContent(lang);
    
    // Initialize videos after content is updated
    setTimeout(() => {
        initializeVideos();
    }, 100);
};