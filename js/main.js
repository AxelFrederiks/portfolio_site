const games = [
  {
    title: "Once Upon a SLime",
    description: "Once Upon a Slime will be the game that starts my career as a solo game developer. This game is an adventure / bossbeater game about a little slime trying to escape a dungeon full of bosses. Beat them all to solve the mysteries of these dark dungeons!",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2438790/header.jpg?t=1748909245",
    link: "https://store.steampowered.com/app/2438790/Once_Upon_a_Slime/"
  },
  {
    title: "Super Slime Swipe",
    description: "This game utilizes swipes from the player to eliminate evil slimes attacking the special box trying to protect itself! Make sure to swipe in time!",
    image: "https://img.itch.zone/aW1nLzIxNTc1NTUxLnBuZw==/315x250%23c/0O2%2Fyr.png",
    link: "https://lonelygoat.itch.io/slime-swipemaster"
  },
];

const gamesGrid = document.getElementById('gamesGrid');

games.forEach((game, index) => {
  const row = document.createElement('div');
  row.className = 'game-row';
  if (index % 2 !== 0) {
    row.classList.add('reverse');
  }

  row.innerHTML = `
    <div class="game-content">
      <a href="${game.link}" target="_blank" class="image-link">
        <div class="image-container">
          <img src="${game.image}" alt="${game.title} Screenshot" />
        </div>
      </a>
    </div>
    <div class="game-image">
      <h2>${game.title}</h2>
      <p>${game.description}</p>
      <a href="${game.link}" target="_blank">View Project</a>
    </div>
  `;

  gamesGrid.appendChild(row);
});
