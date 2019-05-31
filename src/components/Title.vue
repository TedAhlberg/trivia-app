<template lang="html">
  <div id="main-question-text">
      <h1 v-html="text"></h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["text"]
}
</script>

<style lang="css" scoped>
  #main-question-text{
    color: var(--blue);
  }

  h1 {
    font-size: 5vw;
  }

  @media screen and (min-width: 500px) {
  h1 {
     font-size: 23px;
  }
}

</style>
