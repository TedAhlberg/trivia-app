<template lang="html">
<div class="answerItem" @click="emitAnswer($event)">
  <h2 v-html="answer.string"></h2>
</div>
</template>

<script>
export default {
  name: "Answer",
  components: {
  },
  props: ["answer"],
  methods:{
    emitAnswer(){
      this.$emit("clicked", this.answer);

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
