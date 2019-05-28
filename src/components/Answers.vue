<template lang="html">
  <div class="answerList ">
    <Answer v-bind:answer="answers.correct_answer"></Answer>
     <div v-for="answer in answers.incorrect_answers">
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
}
</script>

<style lang="css" scoped>
.answerList{

}

</style>
