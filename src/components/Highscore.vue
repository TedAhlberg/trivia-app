<template lang="html">
  <div class="highscore-box">
    <h1>This is a list of highscore</h1>
    <h3 v-for="highscore in highscorelist">
      {{ highscore.user }} {{ highscore.score }} </h3>
  </div>
</template>

<script>
import getHighscore from "../script/highscore-handler.js";

export default {
  data() {
    return {
      highscorelist: [
      ]
    }
  },
  created() {
    localStorage.setItem('highscores', JSON.stringify(this.highscorelist));
    this.loadScore();
  },
  methods: {
    loadScore() {
      this.highscorelist=getHighscore();
    }
  }
}
</script>

<style lang="css" scoped>
  .highscore-box{
    background-color: lightpink;
    height: 500px;
    border-radius: 10px;
    color:white;
  }
</style>
