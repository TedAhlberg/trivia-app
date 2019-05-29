<template>
<div id="app">
  <Question />
</div>
</template>

<script>
import axios from 'axios';
import Timer from './components/Timer.vue'
import Question from './components/Question.vue'
import Answers from './components/Answers.vue'


export default {
  name: 'app',
  components: {
    Question
  }
}
</script>

<style>
</style>
