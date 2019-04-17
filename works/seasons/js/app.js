"use strict";

var seasons = ['Зима', 'Весна', 'Лето', 'Осень'];
var currentMonth = new Date().getMonth();
var currentSeason = Math.floor((currentMonth / 12 * 4)) % 4;
var text = 'Сейчас '+ seasons[currentSeason];

var heading = document.getElementById('heading');
var body = document.getElementById('body');

document.title = text;
heading.innerText = text;
body.classList = 'season-' + currentSeason;
