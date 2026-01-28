// Countdown to Birthday (1 Februari 2026)

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Set target date to February 1st
    let targetDate = new Date(currentYear, 1, 1, 0, 0, 0); // Month is 0-indexed (1 = February)
    
    // If birthday has passed this year, set to next year
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 1, 1, 0, 0, 0);
    }
    
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        // It's the birthday!
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        
        // Show birthday message
        const countdownLabel = document.querySelector('.countdown-label');
        if (countdownLabel) {
            countdownLabel.textContent = '🎉 SELAMAT ULANG TAHUN! 🎉';
        }
    }
}

// Update countdown every second
if (document.getElementById('days')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
