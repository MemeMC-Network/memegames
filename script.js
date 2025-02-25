const games = [
    { 
        name: "Cyber Rush", 
        img: "https://via.placeholder.com/300x200?text=Cyber+Rush", 
        link: "https://example.com/cyber-rush"
    },
    { 
        name: "Neon Drift", 
        img: "https://via.placeholder.com/300x200?text=Neon+Drift", 
        link: "https://example.com/neon-drift"
    },
    { 
        name: "Shadow Arena", 
        img: "https://via.placeholder.com/300x200?text=Shadow+Arena", 
        link: "https://example.com/shadow-arena"
    }
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

        gameCard.addEventListener("click", () => {
            window.location.href = `game.html?name=${encodeURIComponent(game.name)}&img=${encodeURIComponent(game.img)}&link=${encodeURIComponent(game.link)}`;
        });

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
