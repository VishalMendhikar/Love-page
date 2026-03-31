function moveNoButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noBtn').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noBtn').offsetHeight);
    
    document.getElementById('noBtn').style.left = x + 'px';
    document.getElementById('noBtn').style.top = y + 'px';
    document.getElementById('noBtn').style.position = 'absolute';
}

function handleYes() {
    alert("I knew it! ❤️ Let's celebrate!");
    document.body.innerHTML = "<h1>Yay! I love you too! 🥰</h1>";
    document.body.style.backgroundColor = "#ffcccc";
}
