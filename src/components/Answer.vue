<template lang="html">
<div class="answerItem">
  <h2 @click="checkAnswer()">{{answer.answer}}</h2>
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
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  cursor:pointer;
  }
  .correct_answer{
    background: green;
  }
  .incorrect_answer{
    background: red;
  }
</style>
