<template lang="html">
  <div id="main-user-input">
    <input
      class="user-input"
      type="text"
      v-model="username"
      :placeholder="placeholder"
      @keyup.enter="emitName"
    />

    <BaseButton
    id="start-button"
      :class="{ disabled: username.length < 2 }"
      :text="buttonText"
      :disabled="username.length < 2"
      @click="emitName"
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
      username: sessionStorage.getItem("username"),
      placeholder: "Insert Your Name",
      buttonText: "Start",
    }
  },
  methods: {
    emitName() {
      if (this.username.length > 2)
        this.$emit("clicked", this.username);
    }
  }
}
</script>

<style lang="css" scoped>
input{
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  max-width: 250px;
  height: 25px;
  font-family: sans-serif;
  text-align: center;
  color: var(--blue);
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
  background-color: var(--blue);
}
</style>
