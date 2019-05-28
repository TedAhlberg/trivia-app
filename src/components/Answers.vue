<template lang="html">
  <div class="answerList ">
     <div v-for="answer in answers">
      <Answer v-bind:answer="answer"/>
    </div>
  </div>

</template>

<script>
import Answer from "./Answer.vue";
export default {
  name: "Answers",
  components: {
    Answer
  },
  props: ["answers"],
  methods:{}
  }


</script>

<style lang="css" scoped>
.answerList{
}

</style>
