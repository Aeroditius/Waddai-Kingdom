// Video functionality for Wadai Kingdom website
function initializeVideoSection() {
    const videoItems = document.querySelectorAll('.video-item');

    if (videoItems.length === 0) {
        // Retry after a short delay if elements aren't found
        setTimeout(initializeVideoSection, 200);
        return;
    }

    videoItems.forEach((videoItem, index) => {
        const thumbnail = videoItem.querySelector('.video-thumbnail');
        const playButton = videoItem.querySelector('.play-button');
        const videoPlayer = videoItem.querySelector('.video-player');

        if (!thumbnail || !playButton || !videoPlayer) {
            return;
        }

        // Initially hide the video player and show thumbnail
        videoPlayer.style.display = 'none';
        thumbnail.style.display = 'block';

        // Add click event to play button
        playButton.addEventListener('click', function() {
            // Hide thumbnail and show video player
            thumbnail.style.display = 'none';
            videoPlayer.style.display = 'block';
            
            // Try to play the video
            videoPlayer.play().then(() => {
                // Video started playing successfully
            }).catch(error => {
                // If video fails to play, show thumbnail again
                thumbnail.style.display = 'block';
                videoPlayer.style.display = 'none';
            });
        });

        // Add click event to thumbnail (same as play button)
        thumbnail.addEventListener('click', function() {
            playButton.click();
        });

        // Add event listener for when video ends
        videoPlayer.addEventListener('ended', function() {
            // Show thumbnail again when video ends
            videoPlayer.style.display = 'none';
            thumbnail.style.display = 'block';
            // Reset video to beginning
            videoPlayer.currentTime = 0;
        });

        // Handle video loading errors
        videoPlayer.addEventListener('error', function(e) {
            // Show thumbnail if video fails to load
            videoPlayer.style.display = 'none';
            thumbnail.style.display = 'block';
        });

        // Handle video loading
        videoPlayer.addEventListener('loadstart', function() {
            // Video started loading
        });

        videoPlayer.addEventListener('canplay', function() {
            // Video can start playing
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeVideoSection, 500);
});

// Reinitialize after language switch or content update
document.addEventListener('languageChanged', function() {
    setTimeout(initializeVideoSection, 500);
});

// Also try to initialize when script loads
setTimeout(initializeVideoSection, 1000);

// Video functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize videos when content changes
    initializeVideoControls();
    
    // Listen for content updates
    document.addEventListener('contentUpdated', function() {
        setTimeout(initializeVideoControls, 200);
    });
});

function initializeVideoControls() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach((item, index) => {
        const video = item.querySelector('.video-player');
        const container = item.querySelector('.video-container');
        
        if (video && container) {
            // Remove existing controls to avoid duplicates
            const existingControls = container.querySelector('.video-controls');
            if (existingControls) {
                existingControls.remove();
            }
            
            // Create play button controls
            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'video-controls';
            
            const playButton = document.createElement('button');
            playButton.className = 'video-play-btn';
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            playButton.setAttribute('aria-label', 'Play/Pause');
            
            controlsDiv.appendChild(playButton);
            container.appendChild(controlsDiv);
            
            // Set up event listeners
            setupVideoEventListeners(video, playButton, container, index);
        }
    });
}

function setupVideoEventListeners(video, playBtn, container, index) {
    // Play button click handler
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleVideoPlayback(video);
    });
    
    // Container click handler for easy play/pause
    container.addEventListener('click', (e) => {
        if (e.target === container || e.target === video) {
            toggleVideoPlayback(video);
        }
    });
    
    // Set up proper caption language based on current language
    setupVideoCaptions(video);
    
    // Video event listeners
    video.addEventListener('play', () => {
        pauseOtherVideos(video);
        container.classList.add('playing');
        updatePlayButtonIcon(playBtn, true);
    });
    
    video.addEventListener('pause', () => {
        container.classList.remove('playing');
        updatePlayButtonIcon(playBtn, false);
    });
    
    video.addEventListener('ended', () => {
        container.classList.remove('playing');
        updatePlayButtonIcon(playBtn, false);
    });
    
    video.addEventListener('loadeddata', () => {
        // Set up captions again after video loads
        setupVideoCaptions(video);
    });
    
    video.addEventListener('error', (e) => {
        // Handle video error
    });
}

function setupVideoCaptions(video) {
    // Get current language from global state
    const currentLang = getCurrentLanguage();
    const tracks = video.textTracks;
    
    // Disable all tracks first
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = 'disabled';
    }
    
    // Enable the track that matches current language
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        if (track.language === currentLang) {
            track.mode = 'showing';
            break;
        }
    }
    
    // If no matching language found, enable English as fallback
    if (currentLang !== 'en') {
        for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            if (track.language === 'en' && track.mode === 'disabled') {
                // Only enable English if no other track is already showing
                const anyShowing = Array.from(tracks).some(t => t.mode === 'showing');
                if (!anyShowing) {
                    track.mode = 'showing';
                }
                break;
            }
        }
    }
}

function getCurrentLanguage() {
    // Try to get language from global currentLanguage variable
    if (typeof window.currentLanguage !== 'undefined') {
        return window.currentLanguage;
    }
    
    // Fallback: check document language attribute
    const htmlLang = document.documentElement.lang;
    if (htmlLang) {
        return htmlLang;
    }
    
    // Default fallback
    return 'ar';
}

function updateAllVideoCaptions() {
    const videos = document.querySelectorAll('.video-player');
    videos.forEach(video => {
        setupVideoCaptions(video);
    });
}

function toggleVideoPlayback(video) {
    try {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    } catch (error) {
        // Handle error silently
    }
}

function updatePlayButtonIcon(playBtn, isPlaying) {
    if (playBtn) {
        const icon = playBtn.querySelector('i');
        if (icon) {
            if (isPlaying) {
                icon.className = 'fas fa-pause';
                playBtn.classList.add('playing');
            } else {
                icon.className = 'fas fa-play';
                playBtn.classList.remove('playing');
            }
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

// Export functions for global access
window.initializeVideoControls = initializeVideoControls;
window.toggleVideoPlayback = toggleVideoPlayback;
window.updateAllVideoCaptions = updateAllVideoCaptions;

// Listen for language switches from script.js
document.addEventListener('contentUpdated', function() {
    setTimeout(initializeVideoSection, 200);
});

// Listen for manual language switches
window.addEventListener('languageSwitch', function(event) {
    setTimeout(initializeVideoSection, 300);
}); 