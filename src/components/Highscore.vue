<template lang="html">
  <div id="main-highscore">
    <h2>Highscores</h2>
    <ol type="1">
      <li v-for="highscore in highscorelist">
        <h3>
          <span id="username"> {{ highscore.user }} </span>
          <span id="score"> {{ highscore.score }} </span>
        </h3>
      </li>
    </ol>
  </div>
</template>

<script>
import getHighscore from "../script/highscore-handler.js";

export default {
  data() {
    return {
      highscorelist: []
    }
  },
  created() {
    localStorage.setItem('highscores', JSON.stringify(this.highscorelist));
    this.loadScore();
  },
  methods: {
    loadScore() {
      this.highscorelist = getHighscore();
    }
  }
}
</script>

<style lang="css" scoped>
  #main-highscore{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 190px;
    color: lightpink;
  }

  ol{
    padding-left: 20px;
  }

  li{
    text-align: left;
  }

  #score{
    float: right;
  }


</style>
