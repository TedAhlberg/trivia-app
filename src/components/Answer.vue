<template lang="html">
<div class="answerItem">
 {{answer}}
</div>
</template>

<script>
export default {
  name: "Answer",
  components: {
  },
  props: ["answer"],
}
</script>

<style lang="css" scoped>

.answerItem{
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  }
</style>
