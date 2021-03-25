<template>
  <div class="search-reading-book">
    <input type="text">
<!--    <vue-simple-svg-->
<!--        :src="require('../assets/images/icons/loupe_icon.svg')"-->
<!--        width="100%"-->
<!--        height="100%"-->
<!--    />-->
    <img class="search-icon" src="../assets/images/icons/loupe_icon.png" alt="seaarch icon">
  </div>
</template>

<script>
// import vueSimpleSvg from 'vue-simple-svg'
export default {
  name: "search-reading-book",
  components: {
    // vueSimpleSvg,
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