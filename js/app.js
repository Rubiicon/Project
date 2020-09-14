const numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?", ""),

  personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false
  };


for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    i--;
    console.log('error');
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Ошыбка');
}

console.log(personalMovieDB);