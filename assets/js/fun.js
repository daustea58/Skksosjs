// Fun Interactive Feature - "Kamu Sayang Aku Ga?"

let noClickCount = 0;
let yesClickCount = 0;
let easterEggClicks = 0;

const funnyMessages = [
    "Yakin ga sayang? Coba klik lagi deh 😏",
    "Masa iya sih ga sayang? 🥺",
    "Aku tau kok kamu sayang aku hihi 💙",
    "Ayolah... pasti sayang kan? 😊",
    "Tombol 'Engga' nya rusak tuh, klik yang 'IYA' aja 😂",
    "Kamu yakin? Aku sedih nih 🥺",
    "Last chance nih! Masa ga sayang sih? 💔",
    "Oke deh, aku tau kamu cuma bercanda 😌"
];

function clickYes() {
    yesClickCount++;
    const responseMessage = document.getElementById('responseMessage');
    const heartsAnimation = document.getElementById('heartsAnimation');
    
    // Show response message
    if (responseMessage) {
        if (yesClickCount === 1) {
            responseMessage.textContent = "Aku juga sayang kamu banget! 💙";
        } else if (yesClickCount === 2) {
            responseMessage.textContent = "Aww, makin cinta deh sama kamu! 🥰";
        } else if (yesClickCount === 3) {
            responseMessage.textContent = "Udah cukup kliknya sayang, aku percaya kok! 😊";
        } else {
            responseMessage.textContent = "Love you to the moon and back! 🌙💙";
        }
    }
    
    // Create floating hearts
    createFloatingHearts(heartsAnimation);
    
    // Animate yes button
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        yesBtn.style.transform = 'scale(1)';
    }, 200);
}

function clickNo() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    // Show funny message
    if (responseMessage) {
        const messageIndex = Math.min(noClickCount - 1, funnyMessages.length - 1);
        responseMessage.textContent = funnyMessages[messageIndex];
    }
    
    // Make NO button move randomly
    const container = document.querySelector('.question-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // After 5 attempts, change NO button to YES
    if (noClickCount >= 5) {
        setTimeout(() => {
            noBtn.textContent = 'Iya Sayang! 💙';
            noBtn.onclick = clickYes;
            noBtn.classList.remove('btn-no');
            noBtn.classList.add('btn-yes');
            noBtn.style.position = 'relative';
            noBtn.style.left = '0';
            noBtn.style.top = '0';
            
            if (responseMessage) {
                responseMessage.textContent = 'Nah gitu dong! Aku tau kok kamu sayang aku 😊';
            }
        }, 500);
    }
}

function createFloatingHearts(container) {
    if (!container) return;
    
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '💙';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '0';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Easter Egg Feature
function easterEggClick() {
    easterEggClicks++;
    
    const trigger = document.getElementById('easterEggTrigger');
    
    // Animate the trigger
    trigger.style.transform = 'scale(1.5) rotate(360deg)';
    setTimeout(() => {
        trigger.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
    
    // Show easter egg message after 5 clicks
    if (easterEggClicks >= 5) {
        const easterEggMessage = document.getElementById('easterEggMessage');
        if (easterEggMessage) {
            easterEggMessage.classList.add('show');
            
            // Create confetti effect
            createConfetti();
        }
        
        easterEggClicks = 0; // Reset counter
    }
}

function closeEasterEgg() {
    const easterEggMessage = document.getElementById('easterEggMessage');
    if (easterEggMessage) {
        easterEggMessage.classList.remove('show');
    }
}

function createConfetti() {
    const colors = ['#60a5fa', '#93c5fd', '#ffffff', '#e5e7eb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            confetti.style.zIndex = '9999';
            confetti.style.animation = 'confettiFall ' + (2 + Math.random() * 2) + 's ease-out forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Add confetti animation
if (!document.getElementById('confetti-animation-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-animation-style';
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
