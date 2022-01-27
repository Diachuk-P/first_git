'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
// let lastFilm = prompt('Один из просмотренных фильмов?', '')
// let raitingFilm = +prompt('На сколько оцените его?', '')

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

// let filmsAndRairing = lastFilm + ':' + raitingFilm
// console.log(filmsAndRairing);

for(let i = 0; i <= 1; i++){
    const lastFilm = prompt('Один из просмотренных фильмов?', '')
    const raitingFilm = +prompt('На сколько оцените его?', '')

    personalMovieDB.movies[i] = lastFilm + ' : ' + raitingFilm
    // console.log(lastFilm);
    // console.log(raitingFilm);
}

console.log(personalMovieDB);
// alert(`Список просмотренных фильмов и их рейтинг ${personalMovieDB.movies.last} : ${personalMovieDB.movies.raiting} бала`)

// console.log(personalMovieDB);

// alert(`Вы посмотрели ${numberOfFilms} фильмов`)



// по уроку 


// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// var personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false
// };


// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', '')
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);