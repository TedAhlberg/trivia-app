<template lang="html">
  <div id="main-answers">
      <AnswerButton
        v-for="answer in answers"
        :key="answer.id"
        :answer="answer"
        :class="objectClass(answer.id)"
        :disabled="disabled"
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
      answerClasses: [],
      answered: false
    }
  },
  props: ["answers", "disabled"],
  methods: {
    handleEmit(answer) {
      if (answer.correct) {
        this.playCorrect();
        Vue.set(this.answerClasses, answer.id, "correct");
        this.$emit("answered", true);
      } else {
        this.playFalse();
        Vue.set(this.answerClasses, answer.id, "incorrect");
        var correctAnswer = this.answers.filter(answer => answer.correct == true);
        var correctAnswerId = correctAnswer[0].id;
        Vue.set(this.answerClasses, correctAnswerId, "correct");
        this.$emit("answered", false);
        this.answered = true;
      }
    },
    objectClass(id) {
      return {
        disabled: this.answered,
        correct_answer: this.answerClasses[id] == "correct",
        incorrect_answer: this.answerClasses[id] == "incorrect"
      }
    },
    playCorrect() {
        var track = new Audio(require('../sound/Crowd.wav'));
        track.play();
    },
    playFalse() {
        var track = new Audio(require('../sound/Sad_Trombone.wav'));
        track.play();
    }
  }
}
</script>

<style lang="css" scoped>
#main-answers{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.correct_answer{
  background: var(--green);
}
.incorrect_answer{
  background: var(--red);
}

</style>
