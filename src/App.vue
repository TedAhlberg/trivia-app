<template>
<div id="app">
  <Header/>
  <transition name="fade">
    <StartScreen
      v-if="showStartScreen"
      @userSubmited="userSubmited"
    />
    <Categories
      v-if="showCategories"
      @categorySubmited="categorySubmited"
    />
    <Question
      ref="question"
      v-if="showQuestion"
      :category="category"
      :points="points"
      @answer="answerSubmited"
      @timesout="answerSubmited"
    />
  </transition>
  <transition name="fade">
    <BaseButton
      id="playAgainButton"
      v-if="showPlayAgain"
      :text="playAgainText"
      @click="playAgainSubmited"
    />
  </transition>
</div>
</template>

<script>
import Header from "./components/Header.vue"
import StartScreen from "./components/StartScreen.vue"
import Question from "./components/Question.vue"
import Categories from "./components/Categories.vue"
import BaseButton from "./components/BaseButton.vue"
import getHighscore from "./script/highscore-handler.js"

export default {
  name: 'app',
  components: {
    Header,
    Question,
    StartScreen,
    Categories,
    BaseButton
  },
  data(){
    return{
      showStartScreen: true,
      showCategories: false,
      showQuestion: false,
      showPlayAgain: false,

      username: "",
      category: "",
      points: 0,
      playAgainText: "Play Again?"
    }
  },
  methods:{
    userSubmited(value){
      this.username = value;
      sessionStorage.setItem("username", value);
      this.showStartScreen = false;
      setTimeout(() => this.showCategories = true, 600);
    },
    categorySubmited(value){
      this.category = value;
      this.showCategories  = false;
      setTimeout(() => this.showQuestion = true, 600);
    },
    answerSubmited(value){
      if(value){
        this.points += 1;
        setTimeout(() => this.showQuestion = false, 2000);
        setTimeout(() => this.showCategories = true, 2600);
      } else {
        var array = getHighscore();
        if(array == null){
          array = [{user: this.username, score: this.points}];
        } else {
          array.push({user: this.username, score: this.points});
        }
        localStorage.setItem('highscores', JSON.stringify(array));
        this.showPlayAgain = true;
      }
    },
    playAgainSubmited(){
      this.showQuestion  = false;
      this.showPlayAgain = false;
      setTimeout(() => this.showStartScreen = true, 600);
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#playAgainButton{
  border-radius: 10px;
  padding: 5vw;
  width: 45%;
  margin: 2.5%;
  font-size: 4vw;
  }

  @media screen and (min-width: 500px) {
  #playAgainButton {
     font-size: 18.35px;
     padding: 23px;
   }
  }
  #playAgainButton:hover:enabled,
  #playAgainButton:focus:enabled{
    background-color: var(--blue);
  }
</style>
