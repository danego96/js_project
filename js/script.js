"use strict"


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const lastWatchedFilms = prompt('Один из самых последних фильмов?', '');
const rateFilms = +prompt('Как вы его оцените?', '');

const anotherLastWatchedFilms = prompt('Один из самых последних фильмов?', '');
const anotherRateFilms = +prompt('Как вы его оцените?', '');




const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

personalMovieDB.movies[lastWatchedFilms] = rateFilms;
personalMovieDB.movies[anotherLastWatchedFilms] = anotherRateFilms;

console.log(personalMovieDB)