var scorelist;

function getHighscore() {
  setHighscore();

  scorelist = JSON.parse(localStorage.getItem('highscores'));

  return sortList(scorelist);
}


function compare(a, b) {
  return b.score - a.score;
}

function sortList(array) {
  return array.sort(compare);
}




function setHighscore(){

  var highscorelist = [{
      user: "test",
      score: "1"
    },
    {
      user: "testar",
      score: "2"
    },
    {
      user: "Erik",
      score: "13"
    },
    {
      user: "asdf",
      score: "7"
    }
  ];
  localStorage.setItem('highscores', JSON.stringify(highscorelist));
}

export default getHighscore
