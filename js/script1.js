"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрли?', '');

const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последние просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMobieDB.movies[a] = b;
personalMobieDB.movies[c] = d;

console.log(personalMobieDB);

