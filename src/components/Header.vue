<template lang="html">
  <div id="main-header">
    <h1>Trivia-Quiz</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#main-header {
  margin: none;
  border-radius: 10px;
}

#main-header h1 {
  padding-top: 1%;
  color: var(--green);
}
h1 {
  font-size: 9vw;
}

@media screen and (min-width: 500px) {
  h1{
    font-size: 45px;
  }
}
</style>
