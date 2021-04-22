<template>
  <div class="catalog">
    <h1 class="popular">Popular of the week</h1>
    <div class="container">
      <book-item
          v-for="(book, i) in BOOKS"
          :book="book"
          :key="i"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import bookItem from './book-item'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Catalog',
  components: {
    bookItem
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
        'GET_BOOKS_FROM_API'
    ])
  },
  computed: {
    ...mapGetters([
        'BOOKS'
    ])
  },
  mounted() {
    this.GET_BOOKS_FROM_API()
  },
}
</script>
<style lang="scss" scoped>
  .popular {
    margin: 1em 0;
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
  }
  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: min(420px);
    grid-auto-rows: min(420px);
    grid-gap: 20px;
  }
  @media (max-width: 1440px) {
    .container {
      max-width: 1140px;
    }
  }
  @media (max-width: 1140px) {
    .container {
      max-width: 960px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (max-width: 960px) {
    .container {
      max-width: 720px;
    }
  }
  @media (max-width: 720px) {
    .container {
      max-width: 540px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 540px) {
    .container {
      max-width: 320px;
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>