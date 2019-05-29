<template lang="html">
  <div class="answerList ">
      <Answer
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
import Answer from "./Answer.vue";
export default {
  name: "Answers",
  components: {
    Answer
  },
  data() {
    return {
      answerClasses: []
    }
  },
  props: ["answers"],
  methods: {
    handleEmit(answer) {
      console.log(answer.correct)
      if(answer.correct){
        Vue.set(this.answerClasses, answer.id, "correct");
      }else{
        Vue.set(this.answerClasses, answer.id, "incorrect");
        var correctAnswer=this.answers.filter(answer => answer.correct==true);
        var correctAnswerId = correctAnswer[0].id;
              Vue.set(this.answerClasses, correctAnswerId, "correct");
      }
      console.log(this.answerClasses)
    },
    objectClass(id){
      return {
        correct_answer: this.answerClasses[id] == "correct",
        incorrect_answer: this.answerClasses[id] == "incorrect"
      }
    }
  }
}
</script>

<style lang="css" scoped>
.answerList{
}

.correct_answer{
  background: green;
}
.incorrect_answer{
  background: red;
}

</style>
