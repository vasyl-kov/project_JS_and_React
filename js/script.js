/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами
Проверить, чтобы все работало без ошибок в консоли */
"use strict";

let numberOfFilms;
// console.log(numberOfFilms);

function star() {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    }
}
star();
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const a = prompt('Один з останніх фільмів, які подивились?', ''),
//       b = prompt('Як ви його оцінете?', ''),
//       c = prompt('Один з останніх фільмів, які подивились?', ''),
//       d = prompt('Як ви його оцінете?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function rememberMyFilms() {
    for (let i = 0; i<2; i++){
        const a = prompt('Один з останніх фільмів, які подивились?', ''),
          b = prompt('Як ви його оцінете?', '');
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    
    (personalMovieDB.count < 10) ?  console.log('Подивились замало фільмів') : 
    (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 
    console.log('ви типовий глядач') : (personalMovieDB.count >= 30) ? 
    console.log('Ви кіноман') : console.log('Сталась помилка'); 
}
detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`, '');
    }

}
writeYourGenres();
/*
// будуєм ялинку заповнючи пустими строками
const lines = 5;
let result = '';
for(let i = 0; i <= lines; i++) {
    console.log(`i:${i}`);
    for(let j = 0; j<=i*2; j++) {
        result += '*';
        console.log(`j:${j}`);

    }
    for (k = lines; k >i; k--) {
        result += ' ';
        console.log(`k:${k}`);
    }
    result +='\n'; 

    console.log(result);

      *
     ***
    *****
   *******
  *********
 ***********
    

}
 //перевертаєм массив:
let arr = [5,2,'sun', 4, true, 'moon'];
let res = [];
for(let i = 1; i<=arr.length; i++) {
    console.log(i);
    res[i-1] = arr[arr.length-i];

    console.log(res);
//res = ['moon', true, 4, 'sun', 2, 5 ];
}

*/
  // Место для третьей задачи
// function getMathResult(base, multiplay) {
//     let res = '';
//     if (multiplay <=0 || typeof(multiplay) === 'string') {
//          res = base;
//     }else{
//         for (let i = 1; i <=multiplay; i++) {
//             if ( i === multiplay) {
//                 res +=`${base*i}`
//             } else {
//                 res +=`${base*i}---`;
//             }
//         }
//     }
//     return res;
// }





