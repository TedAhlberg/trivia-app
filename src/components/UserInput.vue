<template lang="html">
  <div id="main-user-input">
    <input
      class="user-input"
      type="text"
      v-model="username"
      :placeholder="placeholder"
      @input="checkInput"
      @keyup.enter="emitName"
    />

    <BaseButton
    id="start-button"
      :class="{ disabled: buttonDisabled }"
      :placeholder="buttonText"
      :disabled="buttonDisabled"
    />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      username: "",
      placeholder: "Insert Your Name",
      buttonText: "Start",
      buttonDisabled: true
    }
  },
  methods: {
    emitName() {
      if (!this.buttonDisabled)
        this.$emit("clicked", this.username);
    },
    checkInput() {
      if (this.username.length > 1)
        this.buttonDisabled = false;
      else
        this.buttonDisabled = true;
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

input:focus::placeholder{
  opacity: 0;
}

::placeholder{
  opacity: 0.7;
}

#start-button{
  background-color: var(--user-input-main-color);
  width: var(--user-input-button-size);
  height: var(--user-input-button-size);
  border-radius: 50%;
}

#start-button:hover:enabled,
#start-button:focus:enabled{
  background-color: var(--user-input-darker-color);
}
</style>
