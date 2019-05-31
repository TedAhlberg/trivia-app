<template lang="html">
  <BaseButton
    class="categoryButton"
    :text="text"
    @click="emitCategory"
  />
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  components: {
    BaseButton
  },
  props: ["category"],
  data() {
    return {
      text: ""
    }
  },
  methods: {
    emitCategory() {
      this.$emit("clicked", this.category);
    }
  },
  created() {
    this.text += "<h1 class=\"emoji\">" + this.category.emoji + "</h1>";
    this.text += "<h3>" + this.category.title + "</h3>";
  }

}
</script>

<style lang="css" scoped>
.categoryButton {
    border-radius: 10px;
    padding: 5vw;
    width: 45%;
    margin: 2.5%;
    font-size: 4vw;
  }

  @media screen and (min-width: 500px) {
  .categoryButton {
     font-size: 18.35px;
     padding: 23px;
   }
  }

</style>
