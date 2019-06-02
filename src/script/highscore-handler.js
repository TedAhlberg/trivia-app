var scorelist;

function getHighscore() {
  scorelist = JSON.parse(localStorage.getItem('highscores'));
  var sortedArray = sortList(scorelist);
  if(Array.isArray(sortedArray))
    return sortedArray.splice(0, 5)
  else return sortedArray;
}

function compare(a, b) {
  return b.score - a.score;
}

function sortList(array) {
  if(Array.isArray(array) && array.length > 1){
    var sortedArray = array.sort(compare);
    return sortedArray;
  } else return array;
}

export default getHighscore
