<template lang="html">
  <div>
    <UserInput class="user-input" @clicked="handleEmit"/>
    <Highscore/>
  </div>
</template>
<script>
import UserInput from './UserInput.vue'
import Highscore from './Highscore.vue'

export default {
  components: {
    UserInput,
    Highscore
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
  margin-top: 3%;
}
</style>
