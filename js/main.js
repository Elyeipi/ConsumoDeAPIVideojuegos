const aplicacion = document.querySelector('.container-date');
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const listGames = [];

fetch(url, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
    }
})
.then(date => {return date.json()})
.then(games => {
    listGames.push(games.map(item => {
        const game = {
            id: item.id,
            title: item.title,
            platform: item.platform,
            developer: item.developer,
            publisher: item.publisher,
            release_date: item.release_date,
            genre: item.genre,
            description: item.short_description,
            img: item.thumbnail,
            freetogame_url: item.freetogame_profile_url,
            game_url: item.game_url,
        }
        return game;
    }));
})
.catch(error => console.log(error)) 

console.log(listGames.length)

