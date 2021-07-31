const d = document;
const w = window;

const API = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const application = d.querySelector('.container-date');

w.addEventListener('DOMContentLoaded', async (e) => {
  try {
    const res = await fetch(API, {
      headers: {
        'x-rapidapi-key': '94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });
    const json = await res.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }
});
