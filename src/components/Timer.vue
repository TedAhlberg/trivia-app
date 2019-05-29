<template>
  <div id="main-timer">
    <div id="timer-wrapper">
      <div id="timer" :style="{ width: timerWidth + '%' }"></div>
    </div>
    <button type="button" @click="startTimer()">Start</button>
    <button type="button" @click="stopTimer()">Stop</button>
    <button type="button" @click="resetTimer()">Reset</button>
  </div>
</template>

<script>
var interval = null;

export default {
  name: 'Timer',
  data() {
    return {
      running: false,
      timerWidth: 100
    }
  },
  methods: {
    startTimer: function() {
      if (!this.running) {
        interval = setInterval(function() {
          this.timerWidth -= 1;
        }.bind(this), 100);
        this.running = true;
      }
    },
    stopTimer: function() {
      if (this.running) {
        clearInterval(interval);
        this.running = false;
      }
    },
    resetTimer: function() {
      this.timerWidth = 100;
    },
  },
}
</script>

<style scoped>
#timer-wrapper {
  width: var(--timer-width);
  margin: 20px auto auto auto;
  height: var(--timer-height);
  background-color: var(--timer-background-color);
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 10px gray;
}

#timer {
  height: var(--timer-height);
  background-color: var(--timer-color);
  -webkit-box-shadow: inset 0 0 8px darkgreen;
  border-radius: 7px;
  -webkit-transition: width 0.1s;
  transition-timing-function: linear;
}
</style>
