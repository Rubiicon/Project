
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilm: function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        i--;
        console.log('error');
      }
    }
  },

  detectedPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Ошибка');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if(personalMovieDB.privat){
      personalMovieDB.privat=false;
    } else{
      personalMovieDB.privat=true;
    }
  },
  writeYourGeners: function () {
    for (let i = 1; i <= 3; i++) {
      let gener = prompt(`Ваш любимый жанр под номером ${i}`);

      if(gener === null || gener === ''){
        i--;
      } else{
        personalMovieDB.geners[i - 1] = gener;
      }
    }
    personalMovieDB.geners.forEach( (item, i) => {
     console.log(`Любимий жанр #${i+1} - это ${item}`);
    });
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilm();
// personalMovieDB.detectedPersonalLevel();


personalMovieDB.writeYourGeners();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);

