<template lang="html">
  <div id="main-question">
    <Title :text="question"/>
    <Answers
      :answers="answers"
      @answered=""
    />
    <Timer />
  </div>
</template>

<script>
import axios from "axios";
import handleResult from "../script/questions-handler.js";

import Title from "../components/Title.vue";
import Answers from "../components/Answers.vue";
import Timer from "../components/Timer.vue";

export default {
  name: "Question",
  props: ["category"],
  components: {
    Title,
    Answers,
    Timer
  },
  data() {
    return {
      question: "",
      answers: [],
    }
  },
  created() {
    this.newQuestion();
  },
  methods: {
    handleAnswer(value){
      
    },
    newQuestion() {
      var self = this;
      var httpRequest = "https://opentdb.com/api.php?amount=1&category="
        + this.category;

      axios.get(httpRequest)
        .then(function(res) {
          self.question = res.data.results[0].question;
          self.answers = handleResult(res);
        })
        .catch(err => console.log(err));
    }
  }
}
</script>
