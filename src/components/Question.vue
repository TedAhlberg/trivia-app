<template lang="html">
  <div class="questionBox">
      <h1>{{question}}</h1>
  </div>
</template>

<script>

export default {
  name: "Question",
  components: {
  },
  props: ["question"],
}



</script>

<style lang="css" scoped>

.questionBox{
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  }
</style>
