<template>
<div id="app">
  <Header/>
  <!-- <StartScreen/> -->
  <Question/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import StartScreen from './components/StartScreen.vue'
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    Header,
    Question,
    StartScreen,
  },
  data(){
    return{
      showQuestion: false,
      showStartScreen: true
    }
  },
  methods:{
    startQuiz(username){
      console.log(username);
      this.showQuestion=!this.showQuestion;
      this.showStartScreen=!this.showStartScreen;
    }
  }
}
</script>

<style>
</style>
