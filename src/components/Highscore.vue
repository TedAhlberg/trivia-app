<template lang="html">
  <div id="main-highscore">
    <h2 v-if="showHighscores">Highscores</h2>
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
      highscorelist: [],
      showHighscores: false
    }
  },
  created(){
    var scores = getHighscore();
    if(Array.isArray(scores) && scores.length > 0){
      this.showHighscores = true;
      this.highscorelist = scores;
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
    color: var(--pink);
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
