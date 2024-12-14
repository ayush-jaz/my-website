const words = ['Designer', 'Developer', 'Creator', 'Innovator'];
let currentIndex = 0;

function changeText() {
    const changingText = document.getElementById('changing-text');
    changingText.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

// Change text every 2 seconds
setInterval(changeText, 2000);
