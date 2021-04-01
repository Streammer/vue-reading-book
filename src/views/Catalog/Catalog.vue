<template>
  <div class="catalog">
    <h1 class="popular">Popular of the week</h1>
    <div class="container">
      <book-item
          v-for="(book, i) in books"
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
      books: [
        {
          image: '188236_600.jpg',
          capture: 'Капитанская дочка',
          authorName: 'А.С. Пушкин',
          rating: 1
        },
        {
          image: 'gogol-mertvye-dushi.jpg',
          capture: 'Мертвые души',
          authorName: 'Н.В. Гоголь',
          rating: 2
        },
        {
          image: 'kypala_spadchina.jpg',
          capture: 'Спадчына',
          authorName: 'Янка Купала',
          rating: 3
        },
        {
          image: 'Kyprin_sulamif.jpg',
          capture: 'Суламифь',
          authorName: 'А.И. Куприн',
          rating: 4
        },
        {
          image: 'Lev_Tolstoj__Anna_Karenina.jpeg',
          capture: 'Анна Каренина',
          authorName: 'Л.H. Толстой',
          rating: 5
        },
        {
          image: 'lolita.jpg',
          capture: 'Лолита',
          authorName: 'Владимир Набоков',
          rating: 1
        },
        {
          image: 'Nekrasov_peasans_children.jpeg',
          capture: 'Крестьянские дети',
          authorName: 'Н.А. Некрасов',
          rating: 2
        },
        {
          image: 'saltykov_story_city.jpg',
          capture: 'История одного города',
          authorName: 'М. Салтыков-Щедрин',
          rating: 3
        },
      ]
    }
  },
  methods: {
    ...mapActions([
        // 'GET_BOOKS_ARRAY_FROM_API',
        'GET_BOOKS_ARRAY_FROM_API2'
    ])
  },
  computed: {
    ...mapGetters([
        'BOOKS'
    ])
  },
  mounted() {
    // this.GET_BOOKS_ARRAY_FROM_API();
    this.GET_BOOKS_ARRAY_FROM_API2();
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