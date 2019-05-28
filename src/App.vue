<template>
<div id="app">
  <input type="button" v-on:click="newQuestion" value="New Question"/>
  <Question v-bind:question="result.question"></Question>
  <Answers v-bind:answers="result"></Answers>
</div>
</template>

<script>
import axios from 'axios';
import Question from './components/Question.vue'
import Answers from './components/Answers.vue'

export default {
  name: 'app',
  components: {
    Question,
    Answers
  },
  data() {
    return {
      result: [{
        question: "",
        correct_answer:"",
        incorrect_answers:[]
      }],
    }
  },
  methods: {
    handleResult(res) {
      this.result = res.data.results[0];
      console.log(this.result);
    },
    newQuestion() {
      axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
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
</style>
