<template>
  <header class="header">
    <div class="container">
      <img class="main-logo" src="../assets/logo.png" alt="Main logo">
      <Filters
          :options="options"
      />
      <nav class="navigation">
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
      </nav>
      <search-reading-book/>
    </div>
  </header>
</template>

<script>
import SearchReadingBook from "./search-reading-book";
import Filters from "./Filters";
// import InlineSvg from 'vue-inline-svg';
export default {
  name: "Header",
  components: {
    SearchReadingBook,
    Filters
    // InlineSvg,
  },
  data() {
    return {
      options: [
          'item1',
          'item2',
          'item3',
          'item4',
          'item5'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    background: #2c3e50;
    width: 100%;
    padding: 1em 0;
    //padding: 1em calc(50% - 720px);
    //display: flex;
    //justify-content: space-between;
    //align-items: center;
    .container {
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    //.filters {
    //  color: #000;
    //  background: white;
    //  width: 250px;
    //  border-radius: 3px;
    //  height: 20px;
    //  display: flex;
    //  align-items: center;
    //  justify-content: center;
    //  position: relative;
    //  .arrow-down {
    //    width: 10px;
    //    position: absolute;
    //    right: 10px;
    //    &:hover {
    //      cursor: pointer;
    //    }
    //  }
    //}
    .main-logo {
      max-width: 50px;
      width: 100%;
    }
    .navigation {
      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
</style>