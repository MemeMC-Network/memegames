const games = [
    { 
        name: "Connect 4", 
        img: "img/c4.png", 
        link: "https://kenrick95.github.io/c4"
    },
    { 
        name: "Drift Hunters", 
        img: "/img/drifthunters.png", 
        link: "https://class811.github.io/g/drift-hunters"
    },
    { 
        name: "Tiny Fishing", 
        img: "/img/tinyfishing.png", 
        link: "https://class811.github.io/g/tiny-fishing"
    },
    { 
        name: "OvO", 
        img: "/img/OVO.png", 
        link: "https://class811.github.io/g/ovo"
    },
    { 
        name: "Stick Merge", 
        img: "/img/stickmerge.png", 
        link: "https://class811.github.io/g3/stick-merge"
    },
    { 
        name: "Slope", 
        img: "/img/slope.png", 
        link: "https://firespread01.github.io/slope"
    },
    { 
        name: "Retro Bowl", 
        img: "/img/retrobowl.png", 
        link: "https://game316009.konggames.com/gamez/0031/6009/live/index.html"
    },
    { 
        name: "Cluster Rush", 
        img: "/img/clusterrush.png", 
        link: "https://script.google.com/a/macros/my.npsct.org/s/AKfycbw6e8fflbfydV7kom5id09nKaM6ix0hLlXHbs3XHOnxzrndUgPtHUHENrwKomI2Hpk3/exec"
    },
    { 
        name: "Burrito Bison", 
        img: "/img/burritobison.png", 
        link: "https://burritobisononline.github.io/file"
    },
    { 
        name: "Rooftop Snipers", 
        img: "/img/rooftopsnipers.png", 
        link: "https://spew45.github.io/simple-games-assets/src/rooftop-snipers"
    },
    { 
        name: "Basketball Random", 
        img: "/img/basketrandom.png", 
        link: "https://basket-testing.glitch.me/"
    },
    { 
        name: "Soccer Random", 
        img: "/img/soccerrandom.png", 
        link: "https://spew45.github.io/simple-games-assets/src/soccer-random"
    },
    { 
        name: "Boxing Random", 
        img: "/img/boxingrandom.png", 
        link: "https://spew45.github.io/simple-games-assets/src/boxing-random"
    },
    { 
        name: "Monkey Mart", 
        img: "/img/monkeymart.png", 
        link: "https://swordslasher.com/games/ugi7ftbv2kgodcq7vful9u9v34wein5z/index.html"
    },
    { 
        name: "Stickman Hook", 
        img: "/img/stickmanhook.png", 
        link: "https://hypackel.github.io/fork/0/g/stickmanhook/game/index.html"
    },
    { 
        name: "N-Gon", 
        img: "/img/ngon.png", 
        link: "https://swordslasher.com/games/ngon/game.html"
    },
    { 
        name: "Gun Spin", 
        img: "/img/gunspin.png", 
        link: "https://class811.github.io/g/gunspin"
    },
    {
        name: "Snow Rider 3D",
        img: "/img/sr3d.png",
        link: "https://itsvijaysingh.github.io/Snow-Rider3D"
    },
    {
        name: "Escape Road",
        img: "/img/escaperoad.png",
        link: "https://azgames.io/game/escape-road/"
    },
    {
        name: "Idle Dice",
        img: "/img/idle-dice.png",
        link: "https://swordslasher.com/games/idle-dice-main/"
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

