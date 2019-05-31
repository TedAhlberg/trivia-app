<template lang="html">
  <button
    type="button"
    v-html="text"
    @click="emitClick"/>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["text"],
  methods: {
    emitClick() {
      this.$emit("click");
    }
  }
}
</script>

<style lang="css" scoped>
button{
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 23px;
  margin-top: 15px;
  border: 0px;
  background-color: var(--user-input-main-color);
  color: white;
  cursor: pointer;
  transition: background 250ms ease-in-out,
              transform 150ms ease,
              opacity 250ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:active:enabled {
    transform: scale(0.97);
}

button:disabled {
  cursor: default;
}

button::-moz-focus-inner {
  border: 0;
}
</style>
