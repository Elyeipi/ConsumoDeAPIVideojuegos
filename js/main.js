const d = document;
const w = window;

const API = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const application = d.querySelector('.container-date');

w.addEventListener('DOMContentLoaded', async (e) => {
  try {
    const res = await fetch(API, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });
    const json = await res.json();
    console.log(json);
    for(games of json){
        application.innerHTML += `<div>Title: ${games.title} And id: ${games.id}</div>`;
    }
  } catch (err) {
    console.error(err);
  }
});