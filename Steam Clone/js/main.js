// DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  renderGenreFilter();
  renderPlatformFilter();
  renderGames();

  // Search
  document.getElementById('searchBox').addEventListener('input', () => {
    renderGames();
  });

  // Genre filter
  document.getElementById('genreFilter').addEventListener('change', () => {
    renderGames();
  });

  // Platform filter
  document.getElementById('platformFilter').addEventListener('change', () => {
    renderGames();
  });

  // Sort select
  document.getElementById('sortSelect').addEventListener('change', () => {
    renderGames();
  });
});

// Genre filter
function renderGenreFilter() {
  const genreSet = Array.from(new Set(games.map(g => g.genre)));
  const filter = document.getElementById('genreFilter');
  // Clean old
  filter.innerHTML = '<option value="">Semua Genre</option>';
  genreSet.forEach(genre => {
    const opt = document.createElement('option');
    opt.value = genre;
    opt.textContent = genre;
    filter.appendChild(opt);
  });
}

// Platform filter
function renderPlatformFilter() {
  const platforms = Array.from(new Set(games.map(g => g.platform)));
  const filter = document.getElementById('platformFilter');
  filter.innerHTML = "";
  platforms.forEach(plat => {
    const id = 'plat-' + plat.replace(/\s/g,'');
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${plat}" id="${id}"> ${plat}`;
    filter.appendChild(label);
  });
}

// Get selected platform(s)
function getSelectedPlatforms() {
  const checks = document.querySelectorAll('#platformFilter input[type="checkbox"]:checked');
  return Array.from(checks).map(ch => ch.value);
}

// LocalStorage favorites
function getFavorites() {
  let fav = [];
  try {
    fav = JSON.parse(localStorage.getItem('ministeam_fav') || '[]');
  } catch(e){fav=[];}
  return fav;
}
function setFavorites(arr) {
  localStorage.setItem('ministeam_fav', JSON.stringify(arr));
}

// Render favorites
function renderFavorites() {
  const favList = getFavorites();
  const favUl = document.getElementById('favoriteList');
  favUl.innerHTML = "";
  if (!favList.length) {
    favUl.innerHTML = "<li>(Belum ada)</li>";
    return;
  }
  favList.forEach(title => {
    const game = games.find(g => g.title === title);
    if (!game) return;
    const li = document.createElement('li');
    li.innerHTML = `<a href="${game.url}" target="_blank" rel="noopener noreferrer">${game.title}</a>`;
    favUl.appendChild(li);
  });
}

// Main render
function renderGames() {
  const list = document.getElementById('gameList');
  list.innerHTML = "";
  let search = document.getElementById('searchBox').value.trim().toLowerCase();
  let genre = document.getElementById('genreFilter').value;
  let plats = getSelectedPlatforms();
  let sort = document.getElementById('sortSelect').value;

  let filtered = games.filter(g =>
    (!search || g.title.toLowerCase().includes(search) || g.desc.toLowerCase().includes(search)) &&
    (!genre || g.genre === genre) &&
    (!plats.length || plats.includes(g.platform))
  );
  // Sort
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "az") filtered.sort((a, b) => a.title.localeCompare(b.title));

  if(filtered.length === 0) {
    list.innerHTML = "<p style='color:#777;font-size:1.07em'>Tidak ada game ditemukan.</p>";
    renderFavorites();
    return;
  }
  const favList = getFavorites();
  filtered.forEach(g => {
    const card = document.createElement('div');
    card.className = "game-card";
    card.innerHTML = `
      <img src="${g.image}" alt="${g.title}" class="game-thumb" loading="lazy">
      <div class="game-info">
        <h3>${g.title}</h3>
        <span class="game-genre">${g.genre}</span>
        <span class="game-platform">${g.platform}</span>
        <p class="game-desc">${g.desc}</p>
        <span class="game-rating">⭐ ${g.rating}</span>
        <a href="${g.url}" target="_blank" rel="noopener noreferrer" class="play-btn">Mainkan</a>
        <button class="fav-btn${favList.includes(g.title) ? " faved" : ""}" type="button">${
          favList.includes(g.title) ? "★ Favorit" : "☆ Tambah Favorit"
        }</button>
      </div>
    `;
    // Event fav
    card.querySelector('.fav-btn').onclick = function() {
      let favs = getFavorites();
      if (favs.includes(g.title)) {
        favs = favs.filter(f => f !== g.title);
      } else {
        favs.push(g.title);
      }
      setFavorites(favs);
      renderGames();
      renderFavorites();
    };
    list.appendChild(card);
  });
  renderFavorites();
}