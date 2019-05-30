<template lang="html">
  <div id="main-user-input">
    <input
      class="user-input"type="text"
      v-model="username"
      placeholder="Insert Your Name"
    />
    <button
      class="user-input"
      type="button"
      @click="emitName($event)"
    >Start</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {

  data() {
    return {
      username: "",
    }
  },
  methods: {
    emitName() {
      if (this.username.length > 1) {
        console.log(this.username)
        this.$emit("clicked", this.username);
      }
    }
  }
}
</script>

<style lang="css" scoped>
input{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  max-width: 250px;
  height: 20px;
  font-family: sans-serif;
  text-align: center;
  color: var(--user-input-darker-color);
  border: 5px solid var(--user-input-main-color);
  border-radius: 15px;
}

input[type="text"] {
  flex: 10;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}

::placeholder{
  opacity: 1;
}

button{
  font-family: "Montserrat", sans-serif;
  font-size: 23px;
  margin-top: 15px;
  width: var(--user-input-button-size);
  height: var(--user-input-button-size);
  border-radius: 50%;
  border: 0px;
  background-color: var(--user-input-main-color);
  color: white;
  cursor: pointer;
  transition: background 250ms ease-in-out,
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover,
button:focus {
    background: var(--user-input-darker-color);
}

button:active {
    transform: scale(0.97);
}
</style>
