const extras = [
    {name : "Password Strength Checker", image:"../extras/images/password-strength.png", link:"https://password-strength-checker-jet.vercel.app/"},
    {name : "Draw Box", image:"../extras/images/draw-box.png", link:"https://canvas-project-rho.vercel.app/"},
    {name : "Rock Paper Scissors", image:"/extras/images/rock-paper-scissors.png", link:"https://rock-paper-scissors-delta-pink.vercel.app/"},
    {name : "Networking Ports", image:"../extras/images/networking-ports.png", link:"https://networking-ports.vercel.app/"},
    {name : "Http Status Codes", image:"../extras/images/status-codes.png", link:"https://status-codes-ten.vercel.app/"},
    {name : "Currency Convertor", image:"../extras/images/currency-convertor.png", link:"https://currency-drab-seven.vercel.app/"},
    {name: "Bingo!", image:"../extras/images/bingo.png", link:"https://bingo-game-gamma.vercel.app/"},
    {name:"Stopwatch Timer", image:"../extras/images/stopwatch.png", link:"https://stopwatch-timer-fawn.vercel.app/"},
    {name:"Countdown Timer", image:"../extras/images/countdown.png", link:"https://countdown-timer-ten-amber.vercel.app/"},
    {name:"Fakebook", image:"../extras/images/fakebook.png", link:"https://simulation-silk-mu.vercel.app/"},
]

const container = document.querySelector("#extras-container");

extras.forEach(item => {
    const itemElement = document.createElement("a");
    itemElement.href = item.link;
    itemElement.classList.add("extras-card");
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="extras-image">
        <div class="extras-overlay">${item.name}</div>
    `;
    container.appendChild(itemElement);
});