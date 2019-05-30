<template lang="html">
  <div>
    <UserInput class="user-input" @clicked="handleEmit"/>
  </div>
</template>
<script>
import UserInput from './UserInput.vue'
export default {

  components: {
    UserInput
  },
  methods: {
    handleEmit(username) {
      this.$emit('clicked', username);
    }
  }
}
</script>

<style lang="css" scoped>

.user-input{
margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
