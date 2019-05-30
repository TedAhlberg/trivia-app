<template>
<div id="app">
  <Header/>
  <StartScreen v-if="showStartScreen" @clicked="startQuiz"/>
  <Question v-if="showQuestion" />
</div>
</template>

<script>
import Question from './components/Question.vue'
import StartScreen from './components/StartScreen.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
    Question,
    StartScreen
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
