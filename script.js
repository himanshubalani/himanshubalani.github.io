const animeData = [
    {
        "index": 1,
        "title": "Dragon Ball Super",
        "episodes": 131,
        "seasons": 1,
        "duration": 23,
        "total_time": 3013,
        "rating": "",
        "genre": "Action, Adventure, Fantasy",
        "comments": "Too long, but good becasue of MUI",
        "image": "https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "mal_link": "https://myanimelist.net/anime/30694/Dragon_Ball_Super"
    },
    {
        "index": 2,
        "title": "Dragon Ball Z: Resurrection 'F' (Movie)",
        "episodes": 1,
        "seasons": 1,
        "duration": 93,
        "total_time": 93,
        "rating": "",
        "genre": "Action, Adventure, Fantasy",
        "comments": "No comment",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkp7AJAmpYvEl2ADHygr5CG6rP9-IG_Tvlw&s"
    },
    {
        "index": 3,
        "title": "Dragon Ball Super: Broly (Movie)",
        "episodes": 1,
        "seasons": 1,
        "duration": 100,
        "total_time": 100,
        "rating": "",
        "genre": "Action, Adventure, Fantasy",
        "comments": "Fine okay,",
        "image": "https://m.media-amazon.com/images/M/MV5BMTA5MTc1M2EtZWQ2Ni00ZmU2LTg3MzQtOTliMjE4OGM0ZWFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "index": 4,
        "title": "Dragon Ball Super: Super Hero (Movie)",
        "episodes": 1,
        "seasons": 1,
        "duration": 93,
        "total_time": 93,
        "rating": "",
        "comments": "Could have been written better",
        "image": "https://m.media-amazon.com/images/M/MV5BNzA2NmEwZGQtNWI1Ni00MTEyLTlkZDUtZDc5ZTJiOGYyNDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "index": 5,
        "title": "Your Name (Movie)",
        "episodes": 1,
        "seasons": 1,
        "duration": 107,
        "total_time": 107,
        "rating": "",
        "comments": "PEAK, cried Feb 09 Watched on Home TV",
        "image": "https://m.media-amazon.com/images/M/MV5BNmEyZjI0M2MtNGFkOC00YTRlLWI0MGQtYTgyODY2MGRhMjc4XkEyXkFqcGc@._V1_QL75_UX154_.jpg"
    },
    {
        "index": 6,
        "title": "SPY x FAMILY",
        "episodes": 37,
        "seasons": 1,
        "duration": 23,
        "total_time": 851,
        "rating": "",
        "comments": "Love the light heartedness",
        "image": "https://m.media-amazon.com/images/M/MV5BZDkwNjc0NWEtNzJlOC00N2YwLTk4MjktZGFlZDE2Y2QzOWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "index": 7,
        "title": "Horimiya",
        "episodes": 13,
        "seasons": 2,
        "duration": 23,
        "total_time": 598,
        "rating": "",
        "comments": "PEAK, Watched it on Home TV",
        "image": "https://m.media-amazon.com/images/M/MV5BOGUzYmZkZjItNjI5Yi00NjllLThiMjUtYTY0MDI4M2Y0MmZlXkEyXkFqcGc@._V1_.jpg"
    }
];

function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';

    const image = document.createElement('img');
    image.src = anime.image || '/placeholder.svg?height=400&width=300';
    image.alt = anime.title;
    image.className = 'anime-image';
    image.onerror = function() {
        this.src = '/placeholder.svg?height=400&width=300';
    };

    const info = document.createElement('div');
    info.className = 'anime-info';

    const title = document.createElement('div');
    title.className = 'anime-title';
    title.textContent = anime.title;

    const details = document.createElement('div');
    details.className = 'anime-details';
    details.textContent = `${anime.episodes} episode${anime.episodes > 1 ? 's' : ''} | ${anime.duration} mins each`;

    const genre = document.createElement('div');
    genre.className = 'anime-details';
    genre.textContent = anime.genre || 'Genre not specified';

    const comment = document.createElement('div');
    comment.className = 'anime-comment';
    comment.textContent = anime.comments || 'No comment';

    const malLink = document.createElement('a');
    malLink.href = anime.mal_link || '#';
    malLink.className = 'mal-button';
    malLink.textContent = 'View on MyAnimeList';
    malLink.target = '_blank';

    info.appendChild(title);
    info.appendChild(details);
    info.appendChild(genre);
    info.appendChild(comment);
    info.appendChild(malLink);

    card.appendChild(image);
    card.appendChild(info);

    return card;
}

function renderAnimeCards() {
    const container = document.getElementById('anime-container');
    animeData.forEach(anime => {
        const card = createAnimeCard(anime);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderAnimeCards);