<template lang="html">
  <div id="main-categories">
    <Title :text="title" />
    <div id="main-category-buttons">
      <CategoryButton
        v-for="category in categories"
        :category="category"
        @clicked="handleEmit"
      />
  </div>
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
  data() {
    return {
      title: "Choose a category",
      selectedCategory: "",
      categories: getCategories()
    }
  },
  methods: {
    buttonHTML(category) {
      var html = ""
    },
    handleEmit(value) {
      this.$emit("categorySubmited", value.apiId);
    }
  }
}
</script>

<style lang="css" scoped>
  #main-category-buttons{
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
