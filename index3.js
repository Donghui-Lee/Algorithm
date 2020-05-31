const genres = [
  "classic",
  "classic",
  "classic",
  "classic",
  "classic",
  "hong",
  "yang",
];
const plays = [900, 600, 900, 800, 2500, 300, 300];

/**
 * 내가 푼 풀이
 */
function solution(genres = [], plays = []) {
  var answer = [];

  const uniquGenres = genres.filter(
    (item, index) => genres.indexOf(item) === index
  );

  const sumArr = [];
  for (let i = 0; i < uniquGenres.length; i++) {
    let idx = genres.indexOf(uniquGenres[i]);
    const tempArr = [];
    let sum = 0;

    while (idx != -1) {
      let tempIdx = 0;
      for (; tempIdx < tempArr.length; tempIdx++) {
        if (plays[idx] <= plays[tempArr[tempIdx]]) {
          break;
        }
      }

      tempArr.splice(tempIdx, 0, idx);
      sum += plays[idx];
      idx = genres.indexOf(uniquGenres[i], idx + 1);
    }

    if (sumArr.length === 0) {
      sumArr.push({
        genre: uniquGenres[i],
        sum: sum,
        list:
          tempArr.length >= 2
            ? [tempArr[tempArr.length - 1], tempArr[tempArr.length - 2]]
            : tempArr[tempArr.length - 1],
      });
    } else {
      const len = sumArr.length;
      const data = {
        genre: uniquGenres[i],
        sum: sum,
        list:
          tempArr.length >= 2
            ? [tempArr[tempArr.length - 1], tempArr[tempArr.length - 2]]
            : tempArr[tempArr.length - 1],
      };
      let index = 0;
      for (; index < len; index++) {
        if (parseInt(sumArr[index].sum) < sum) {
          break;
        }
      }

      sumArr.splice(index, 0, data);
    }
  }

  sumArr.forEach((data, index) => {
    answer = answer.concat(data.list);
  });

  console.log(answer);
  return answer;
}

solution(genres, plays);

/**
 *  가장 괜찮은풀이
 */
function solution2(genres, plays) {
  debugger;
  var songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      playCount: plays[index],
    };
  });

  var genrePlayCount = [];
  songs.forEach((song) => {
    var thisGenre = genrePlayCount.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    if (!thisGenre) {
      genrePlayCount.push({
        genre: song.genre,
        totalPlayCount: song.playCount,
      });
    } else {
      thisGenre.totalPlayCount += song.playCount;
    }
  });

  genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

  var answer = [];
  genrePlayCount.forEach((genrePlay) => {
    var thisGenreSongs = songs.filter((song) => genrePlay.genre === song.genre);
    thisGenreSongs.sort((a, b) => b.playCount - a.playCount);
    answer.push(thisGenreSongs[0].no);
    if (thisGenreSongs.length > 1) {
      answer.push(thisGenreSongs[1].no);
    }
  });

  return answer;
}

solution2(genres, plays);
