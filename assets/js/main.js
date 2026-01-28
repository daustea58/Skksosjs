// Main JavaScript for Birthday Website

// Music Control
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Initialize music state from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const musicState = localStorage.getItem('musicPlaying');
    const musicTime = localStorage.getItem('musicTime');
    
    if (musicState === 'true') {
        bgMusic.currentTime = parseFloat(musicTime) || 0;
        playMusic();
    } else {
        updateMusicButton(false);
    }
});

// Auto-play music on first interaction (required by browsers)
document.addEventListener('click', () => {
    if (!musicPlaying) {
        playMusic();
    }
}, { once: true });

function playMusic() {
    bgMusic.play().then(() => {
        musicPlaying = true;
        updateMusicButton(true);
        localStorage.setItem('musicPlaying', 'true');
    }).catch(err => {
        console.log('Auto-play prevented:', err);
    });
}

function pauseMusic() {
    bgMusic.pause();
    musicPlaying = false;
    updateMusicButton(false);
    localStorage.setItem('musicPlaying', 'false');
}

function toggleMusic() {
    if (musicPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function updateMusicButton(playing) {
    if (musicToggle) {
        musicToggle.textContent = playing ? '🔊' : '🔇';
    }
}

// Save music time periodically
setInterval(() => {
    if (musicPlaying) {
        localStorage.setItem('musicTime', bgMusic.currentTime);
    }
}, 1000);

// Navigation
function goToPage(url) {
    // Save current music time before navigating
    localStorage.setItem('musicTime', bgMusic.currentTime);
    window.location.href = url;
}

// Smooth scroll reveal animations
function revealOnScroll() {
    const elements = document.querySelectorAll('.slide-up, .slide-right, .slide-left');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
