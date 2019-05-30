<template lang="html">
  <div class="answerList ">
      <AnswerButton
        v-for="answer in answers"
        :key="answer.id"
        :answer="answer"
        :class="objectClass(answer.id)"
        @clicked="handleEmit"
      />
  </div>

</template>

<script>
import Vue from "vue";
import AnswerButton from "./AnswerButton.vue";
export default {
  name: "Answers",
  components: {
    AnswerButton
  },
  data() {
    return {
      answerClasses: []
    }
  },
  props: ["answers"],
  methods: {
    handleEmit(answer) {
      if (answer.correct) {
        Vue.set(this.answerClasses, answer.id, "correct");
        this.$emit("answered", true);
      } else {
        Vue.set(this.answerClasses, answer.id, "incorrect");
        var correctAnswer = this.answers.filter(answer => answer.correct == true);
        var correctAnswerId = correctAnswer[0].id;
        Vue.set(this.answerClasses, correctAnswerId, "correct");
        this.$emit("answered", false);
      }
    },
    objectClass(id) {
      return {
        correct_answer: this.answerClasses[id] == "correct",
        incorrect_answer: this.answerClasses[id] == "incorrect"
      }
    }
  }
}
</script>

<style lang="css" scoped>
.correct_answer{
  background: green;
}
.incorrect_answer{
  background: red;
}

</style>
