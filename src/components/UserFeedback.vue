<template lang="html">
  <div id="main-user-feedback">
    <div id="points">
      <h3>Score: {{ points }}</h3>
      <h3>Category: {{ category }}</h3>
    </div>
    <div id="message">
      <h1
        :class="objectClass(message)"
      >{{ message }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFeedback",
  props: ["points", "category", "message"],
  methods: {
    objectClass(message){
      return {
        good: this.message == "Correct!",
        bad: this.message == "Time's out!" || this.message == "Wrong!"
      }
    }
  }
}
</script>

<style lang="css" scoped>
#points{
  color: var(--pink);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

h1{
  margin: 0px;
  font-size: 5.5vw;
}

h3 {
  font-size: 5vw;
}

@media screen and (min-width: 500px) {
  h1{
    font-size: 27.5px;
  }

  h3 {
     font-size: 23px;
  }
}

.good{
  color: var(--green);
}

.bad{
  color: var(--red);
}
</style>
