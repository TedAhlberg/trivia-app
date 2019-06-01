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
    v-if="showQuestion"
    :category="category"
  />
  </transition>
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
      showStartScreen: true,
      showCategories: false,
      showQuestion: false,

      username: "",
      category: "",
    }
  },
  methods:{
    userSubmited(value){
      this.username = value;
      this.showStartScreen = false;
      setTimeout(() => this.showCategories = true, 500)
    },
    categorySubmited(value){
      this.category = value;
      this.showCategories  = false;
      setTimeout(() => this.showQuestion = true, 500)
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
</style>
