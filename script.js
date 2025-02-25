const games = [
    { name: "Cyber Rush", img: "https://via.placeholder.com/300x200?text=Cyber+Rush" },
    { name: "Neon Drift", img: "https://via.placeholder.com/300x200?text=Neon+Drift" },
    { name: "Shadow Arena", img: "https://via.placeholder.com/300x200?text=Shadow+Arena" },
    { name: "Pixel Blaster", img: "https://via.placeholder.com/300x200?text=Pixel+Blaster" },
    { name: "Galaxy Warriors", img: "https://via.placeholder.com/300x200?text=Galaxy+Warriors" },
    { name: "Techno Runners", img: "https://via.placeholder.com/300x200?text=Techno+Runners" }
];

const gameGrid = document.getElementById("gameGrid");

function displayGames(filteredGames) {
    gameGrid.innerHTML = ""; // Clear previous games

    filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-title">${game.name}</div>
        `;

        gameGrid.appendChild(gameCard);
    });
}

// Initial load
displayGames(games);

// Search Functionality
function filterGames() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
    displayGames(filteredGames);
}
