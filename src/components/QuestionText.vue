<template lang="html">
  <div id="main-question-text">
      <h1 v-html="question"></h1>
  </div>
</template>

<script>
export default {
  name: "QuestionText",
  props: ["question"]
}
</script>

<style lang="css" scoped>
#main-question-text{
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  }
</style>
