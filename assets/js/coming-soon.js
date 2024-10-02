// Set the date for the countdown (replace 'YYYY-MM-DD' with your desired date)
const countdownDate = new Date('2024-11-05').getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining until the countdown date
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.coming-soon p').textContent = "Our latest blog post is now live!";
    }
}, 1000);