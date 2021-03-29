<template>
  <div class="search-reading-book">
    <input type="text">
    <inline-svg
        :src="require('../assets/images/icons/magnifying-glass.svg')"
        width='10'
        class="search-icon"
    ></inline-svg>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
export default {
  name: "search-reading-book",
  components: {
    InlineSvg
  },
}
</script>

<style lang="scss" scoped>
  .search-reading-book {
    display: flex;
    align-items: center;
    position: relative;
    .search-icon {
      width: 15px;
      position: absolute;
      right: 5px;
      &:hover {
        cursor: pointer;
      }
    }
    input {
      outline: none;
      border-radius: 3px;
      border: none;
      height: 20px;
      padding-left: 5px;
    }
  }
</style>