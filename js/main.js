'use strict';

// constants 
const d = document;
const w = window;
const containerDate = d.querySelector('.container-date');
const API = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

// Fetch parameters
const params = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

// Process

w.addEventListener('DOMContentLoaded', async()=>{
    try{
        const request = await fetch(API, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        const json = await request.json();
    
        
    }catch(e){
        console.log(e);
    }
});