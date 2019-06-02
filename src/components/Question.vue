<template lang="html">
  <div id="main-question">
    <transition name="fade">
      <div v-if=questionFetched>
        <Title
          :text="question"
        />
        <Answers
          ref="answers"
          :answers="answers"
          :disabled="disableAnswerButtons"
          @answered="handleAnswer"
        />
        <Timer
          :timerWidth="timerWidth"
        />
        <UserFeedback
          :points="points"
          :category="category.title"
          :message="message"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import handleResult from "../script/questions-handler.js";

import Title from "./Title.vue";
import Answers from "./Answers.vue";
import Timer from "./Timer.vue";
import UserFeedback from "./UserFeedback.vue"

var interval = null;

export default {
  name: "Question",
  props: ["category", "points"],
  components: {
    Title,
    Answers,
    Timer,
    UserFeedback
  },
  data() {
    return {
      question: "",
      answers: [],
      questionFetched: false,
      timerWidth: 100,
      timerRunning: false,
      disableAnswerButtons: false,
      message: ""
    }
  },
  created() {
    this.newQuestion();
  },
  methods: {
    handleAnswer(value) {
      if (this.timerRunning) {
        this.stopTimer();
        this.disableAnswerButtons = true;
        this.$emit("answer", value);
        if(value)
          this.message = "Correct!"
        else
          this.message = "Wrong!"
      }
    },
    startTimer() {
      if (!this.timerRunning) {
        interval = setInterval(function() {
          this.timerWidth -= 1;
          if (this.timerWidth == 0) {
            this.handleAnswer(false);
            var correctAnswer = this.answers.filter(answer => answer.correct == true);
            this.$refs.answers.handleEmit(correctAnswer);
            this.$emit("timesout", false);
            this.message = "Time's out!"
          }
        }.bind(this), 150);
        this.timerRunning = true;
      }
    },
    stopTimer() {
      if (this.timerRunning) {
        clearInterval(interval);
        this.timerRunning = false;
      }
    },
    resetTimer() {
      this.timerWidth = 100;
    },
    newQuestion() {
      var self = this;
      var httpRequest = "https://opentdb.com/api.php?amount=1&category=" +
        this.category.apiId;

      axios.get(httpRequest)
        .then(function(res) {
          self.question = res.data.results[0].question;
          self.answers = handleResult(res);
          self.questionFetched = true;
          self.startTimer();
        }).catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
