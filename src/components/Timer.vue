<template>
  <div id="main-timer">
    <div id="timer-wrapper">
      <div id="timer" :style="{ width: timerWidth + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: ["timerWidth"]
}
</script>

<style scoped>
#timer-wrapper {
  width: var(--timer-width);
  margin: 20px auto auto auto;
  height: var(--timer-height);
  background-color: var(--timer-background-color);
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 10px #c7c3c0;
}

#timer {
  height: var(--timer-height);
  background-color: var(--timer-color);
  -webkit-box-shadow: inset 0 0 8px var(--timer-darker-color);
  border-radius: 7px;
  -webkit-transition: width 0.15s;
  transition-timing-function: linear;
}
</style>
