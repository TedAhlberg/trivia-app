<template lang="html">
  <BaseButton
    class="answerButton"
    :text="answer.string"
    @click="emitAnswer($event)"
  />
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  name: "Answer",
  components: {
    BaseButton
  },
  props: ["answer"],
  methods: {
    emitAnswer() {
      this.$emit("clicked", this.answer);
    }
  }
}
</script>

<style lang="css" scoped>
.answerButton{
  border-radius: 10px;
  padding: 5vw;
  width: 45%;
  margin: 2.5%;
  font-size: 4vw;
  }

  @media screen and (min-width: 500px) {
  .answerButton {
     font-size: 18.35px;
     padding: 23px;
   }
  }
</style>
