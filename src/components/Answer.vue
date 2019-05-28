<template lang="html">
<div class="answerItem">
  <h2 @click="checkAnswer()"  v-html="answer.answer"></h2>
</div>
</template>

<script>
export default {
  name: "Answer",
  components: {
  },
  props: ["answer"],
  methods:{
    checkAnswer(){
      console.log(this.answer.correct);
    }
  }
}
</script>

<style lang="css" scoped>

.answerItem{
  margin: auto;
  width:30%;
  background: #f4f4f4;
  padding: 10px;
  margin-top: 10px;
  border-bottom: 1px #ccc dotted;
  cursor:pointer;
  background-color: lightblue;
  }
  .correct_answer{
    background: green;
  }
  .incorrect_answer{
    background: red;
  }
</style>
