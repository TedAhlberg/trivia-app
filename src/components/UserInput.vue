<template lang="html">
  <div class="wrap">
    <div class="input-row">
      <input class="user-input"type="text" name="username" value="" placeholder="Insert Your Name" />
      <button class="user-input" type="button" value="Start" @click="emitName($event)"> Start</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {

  data() {
    return {
      username: ""
    }
  },
  methods: {
    emitName() {
      this.username = document.querySelector("input[name=username]").value;
      if (!this.username == "") {
        console.log("Emit: " + this.username);
        this.$emit('clicked', this.username);
      }
    }
  }
}
</script>

<style lang="css" scoped>

.input-row{
  margin: auto;
  padding-top: 3%;
  display: flex;
  width: 60%;

}


input[type="text"] {
  flex: 10;
  padding: 5px;
  font-size: 16px;
}
.wrap{
  background-color: lightblue;
   height: 100px;
   border-radius: 10px;
}
</style>
