
// my
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
// // let lastFilm = prompt('Один из просмотренных фильмов?', '')
// // let raitingFilm = +prompt('На сколько оцените его?', '')

// var personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false
// };

// for(let i = 0; i <= 1; i++){
//     const lastFilm = prompt('Один из просмотренных фильмов?', '')
//     const raitingFilm = +prompt('На сколько оцените его?', '')

//     personalMovieDB.movies[i] = lastFilm + ' : ' + raitingFilm
//     // console.log(lastFilm);
//     // console.log(raitingFilm);
// }
// console.log(personalMovieDB);


// по уроку 
//first

var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

while(numberOfFilms < 1){
    var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
}
console.log(numberOfFilms);



var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

if(personalMovieDB.count < 10){
    alert('Просмотрено очень мало фильмов')
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель')
}else if (personalMovieDB.count > 30){
    alert('Вы киноман')
}else{
    alert('Ошибка! Вводите только числа')
};



var a = prompt('Один из просмотренных фильмов?', '')
while(a.length < 1){
    var a = prompt('Не ври! Назови один из просмотренных фильмов?', '')
}
while(a.length > 50){
    var a = prompt('Очень длинное название! Максимальное к-во символов - 50', '')
}
const b = +prompt('На сколько оцените его?', '')

var c = prompt('Еще один из просмотренных фильмов?', '')
while(c.length < 1){
    var c = prompt('Не ври! Назови один из просмотренных фильмов?', '')
}
while(c.length > 50 ){
    var c = prompt('Очень длинное название! Максимальное к-во символов - 50', '')
}
const d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);