<template>
<div id="app">
  <Header/>
  <!-- <StartScreen/> -->
  <!-- <Question/> -->
  <Categories/>
</div>
</template>

<script>
import Header from "./components/Header.vue"
import StartScreen from "./components/StartScreen.vue"
import Question from "./components/Question.vue"
import Categories from "./components/Categories.vue"

export default {
  name: 'app',
  components: {
    Header,
    Question,
    StartScreen,
    Categories,
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
