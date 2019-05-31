<template lang="html">
  <div id="main-categories">
    <Title :text="title" />
    <CategoryButton
      v-for="category in categories"
      :category="category"
    />
  </div>
</template>

<script>
import Title from "./Title.vue"
import CategoryButton from "./CategoryButton.vue"
import getCategories from "../script/categories-handler.js"

export default {
  name: "Categories",
  components: {
    Title,
    CategoryButton
  },
  data(){
    return {
      title: "Choose a category",
      selectedCategory: "",
      categories: getCategories()
    }
  },
  methods: {
    buttonHTML(category){
      var html = ""
    }
  }
}
</script>

<style lang="css" scoped>
</style>
