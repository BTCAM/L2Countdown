
function initializeCountdown(elementId, deadline) {
    const countdownElement = document.getElementById(elementId);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            countdownElement.innerHTML = "EXPIRED";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call to display immediately
}

// Initialize countdowns with specific deadlines
initializeCountdown('countdown1', new Date('2024-08-22T09:00:00').getTime()); 
initializeCountdown('countdown2', new Date('2024-11-15T23:59:59').getTime()); 

initializeCountdown('countdown3', new Date('2025-06-15T23:59:59').getTime()); 
