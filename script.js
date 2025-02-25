const games = [
    { name: "Cyber Rush", img: "https://via.placeholder.com/300x200?text=Cyber+Rush" },
    { name: "Neon Drift", img: "https://via.placeholder.com/300x200?text=Neon+Drift" },
    { name: "Shadow Arena", img: "https://via.placeholder.com/300x200?text=Shadow+Arena" },
    { name: "Pixel Blaster", img: "https://via.placeholder.com/300x200?text=Pixel+Blaster" }
];

const gameGrid = document.getElementById("gameGrid");

games.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    gameCard.innerHTML = `
        <img src="${game.img}" alt="${game.name}">
        <div class="game-title">${game.name}</div>
    `;

    gameGrid.appendChild(gameCard);
});
