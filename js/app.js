let numberOfFilm;

function start() {
  numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
    numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  geners: [],
  privat: false
};

function rememberMyFilm() {
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
}

rememberMyFilm();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Ошыбка');
  }
}

detectedPersonalLevel();

function showMyDB() {
  if(personalMovieDB.privat === false){
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGeners() {
  for(let i=1; i<=3; i++){
    personalMovieDB.geners[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);;
  }
}

writeYourGeners();
