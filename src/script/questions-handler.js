function handleResult(res) {
  var temparr = [];
  var result = res.data.results[0];

  for (var i = 0; i < result.incorrect_answers.length; i++) {
    temparr[i] = ({
      id: i,
      string: result.incorrect_answers[i],
      correct: false
    });
  }
  temparr[i] = ({
    id: i,
    string: result.correct_answer,
    correct: true
  });
return shuffleArray(temparr);
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  var shuffledList;

  shuffledList = array.slice(0)

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledList[currentIndex];
    shuffledList[currentIndex] = shuffledList[randomIndex];
    shuffledList[randomIndex] = temporaryValue;
  }
  return shuffledList;
}

export default handleResult
