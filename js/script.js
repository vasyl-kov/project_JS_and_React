
"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    star: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        while (ersonalMovieDB.count == '' || ersonalMovieDB.count == null || isNaN(ersonalMovieDB.count) ) {
            ersonalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
    
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i<2; i++){
            const a = prompt('Один з останніх фільмів, які подивились?', ''),
              b = prompt('Як ви його оцінете?', '');
            if (a != null && b != null && a !='' && b !='' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
    
        (personalMovieDB.count < 10) ?  console.log('Подивились замало фільмів') : 
        (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 
        console.log('ви типовий глядач') : (personalMovieDB.count >= 30) ? 
        console.log('Ви кіноман') : console.log('Сталась помилка'); 
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat ? personalMovieDB.privat  = false : personalMovieDB.privat = true;
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3; i++){
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');
            if(genre === '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index+1} - это ${item}`);
        })
    }
};





