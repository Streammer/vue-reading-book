<template>
  <div class="book-item">
    <img
        class="book-item__image"
        :src="require('@/assets/images/previews/' + book.image)"
        alt="Book-item"
        loading="lazy"
    >
    <h2 class="book-item__capture">{{book.capture}}</h2>
    <p class="book-item__author-name">{{book.authorName}}</p>
    <div class="raiting"></div>
    <button class="book-item__preview">Preview</button>
  </div>
</template>

<script>
export default {
  name: "book-item",
  props: {
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      rating: this.book.rating
    }
  }
}
</script>

<style lang="scss" scoped>
  .book-item {
    border: 1px solid #2c3e50;
    border-radius: 8px;
    padding-top: 15px;
    &__image {
      max-width: 200px;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    &__capture {
      font-size: 22px;
      max-width: 250px;
      margin: 0 auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-top: 5px;
    }
    &__author-name {
      margin:10px auto;
      font-size: 16px;
      max-width: 200px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &__preview {
      border: 1px solid #2c3e50;
      border-radius: 3px;
      background: none;
      outline: none;
      width: 60px;
      height: 20px;
      &:hover {
        cursor: pointer;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

</style>