<template>
<div id="app">
  <Timer />
  <input type="button" v-on:click="newQuestion" value="New Question" />
  <input type="button" v-on:click="show=!show" value="Show" />
  <transition name="fade">
    <div v-if="!show" name="categories-view">
      <h1>BAJS</h1>
    </div>

  </transition>
  <transition name="fade">
    <div v-if="show" name="question-view">
      <Question v-bind:question="result.question"></Question>
      <Answers v-bind:answers="answers"></Answers>
    </div>
  </transition>
</div>
</template>

<script>
import axios from 'axios';
import Timer from './components/Timer.vue'
import Question from './components/Question.vue'
import Answers from './components/Answers.vue'


export default {
  name: 'app',
  components: {
    Timer,
    Question,
    Answers
  },
  data() {
    return {
      result: [{
        question: ""
      }],
      answers: [{}],
      show: false,
    }
  },


  methods: {
    handleResult(res) {
      var temparr = [];
      this.result = res.data.results[0];

      var i;

      for (i = 0; i < this.result.incorrect_answers.length; i++) {
        temparr[i] = ({
          id: i,
          string: this.result.incorrect_answers[i],
          correct: false
        });
      }
      temparr[i] = ({
        id: i,
        string: this.result.correct_answer,
        correct: true
      });

      this.answers = this.shuffleList(temparr);

    },
    shuffleList: function(array) {
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
    },


    newQuestion() {
      axios.get('https://opentdb.com/api.php?amount=1')
        .then(res => this.handleResult(res))
        .catch(err => console.log(err));
    }
  },

  created() {
    this.newQuestion();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
