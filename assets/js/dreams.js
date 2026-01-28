// Dreams Feature - Click to reveal messages

function showDreamMessage(dreamNumber) {
    const message = document.getElementById('message-' + dreamNumber);
    
    if (message) {
        // Toggle the message visibility
        if (message.classList.contains('show')) {
            message.classList.remove('show');
        } else {
            message.classList.add('show');
            
            // Add sparkle effect
            createSparkles(event.currentTarget);
        }
    }
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = `sparkleFloat ${1 + Math.random()}s ease-out forwards`;
        
        const angle = (Math.PI * 2 * i) / sparkleCount;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Add sparkle animation via inline style (fallback)
if (!document.getElementById('sparkle-animation-style')) {
    const style = document.createElement('style');
    style.id = 'sparkle-animation-style';
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
