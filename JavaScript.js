const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const headerText = document.getElementById('headerText');

function moveNoButton() {
    // Calculate available screen space
    // Subtracting button dimensions ensures it stays fully on screen
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply new position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function handleYes() {
    // Remove the buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Update the message and background
    headerText.innerHTML = "I knew it! ❤️ <br> I love you too!";
    document.body.style.backgroundColor = "#ffccd5";
    
    // Optional: Add a little "heart beat" animation to the text
    headerText.style.animation = "heartbeat 1.5s infinite";
}