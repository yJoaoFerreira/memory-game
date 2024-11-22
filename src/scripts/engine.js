const emojis = [
    "🍏", "🍏",
    "🍎", "🍎",
    "🍐", "🍐",
    "🍊", "🍊",
    "🍋", "🍋",
    "🍌", "🍌",
    "🍉", "🍉",
    "🍇", "🍇",
];

let OpenCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
};

function handleClick () {
    if (OpenCards.length < 2) {
        this.classList.add("boxOpen");
        OpenCards.push(this);
    };

    if (OpenCards.length == 2) {
        setTimeout(checkMatch, 500);
    };

    console.log(OpenCards);
};

function checkMatch () {
    if (OpenCards[0].innerHTML === OpenCards[1].innerHTML) {
        OpenCards[0].classList.add("boxMatch");
        OpenCards[1].classList.add("boxMatch");
    } else {
        OpenCards[0].classList.remove("boxMatch");
        OpenCards[1].classList.remove("boxMatch");
    };

    OpenCards = [];

    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
        alert("Você venceu!");
    };
};