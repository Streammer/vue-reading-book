<template>
  <div class="wrapper">
    <div class="filters"
         @click="isFiltersOpen=!isFiltersOpen"
    >
      <div class="title">{{selected}}</div>
      <inline-svg
          :src="require('../assets/images/icons/down-chevron.svg')"
          width='10'
          :class="isFiltersOpen? 'arrow-down': 'arrow-top'"
      />
    </div>
    <transition name="fade">
      <div
          ref="filters"
          class="filter_categories"
          v-show="isFiltersOpen"
      >
        <div
            class="filter_categories__item"
            v-for="(option, i) in options"
            :key="i"
            @click="select(option)"
        >
          {{option}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
export default {
  name: "Filters",
  components: {
    InlineSvg
  },
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      isFiltersOpen: false
    }
  },
  methods: {
    closeFilterOnClickHandler(event) {
      event.stopPropagation()
      const target = event.target;
      if (target != this.$refs['filters'] && !this.$refs['filters'].contains(target)) {
        this.isFiltersOpen = false
      }
    },
    select(option) {
      this.$emit('select', option)
    }
  },
  watch: {
    isFiltersOpen: function (event) {
      if(event) {
        setTimeout(() => document.addEventListener("click", this.closeFilterOnClickHandler), 50)
      }else{
        document.removeEventListener("click", this.closeFilterOnClickHandler)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity .3s;
  .arrow-down {
    transform: rotate(180deg);
  }
}
.fade-enter {
  opacity: 0;
}
.wrapper {
  position: relative;
  .filters {
    color: #000;
    background: white;
    width: 250px;
    border-radius: 3px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      cursor: pointer;
    }
    .arrow-down {
      width: 10px;
      position: absolute;
      right: 10px;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
      }
    }
    .arrow-top {
      width: 10px;
      position: absolute;
      right: 10px;
      transition: 0.1s;
      &:hover {
        cursor: pointer;
      }
      transform: rotate(180deg);
    }
  }
  .filter_categories {
    position: absolute;
    top: 30px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 3px;
    background: #fff;
    &__item {
      padding: 10px 5px;
      &:hover {
        cursor: pointer;
        background: silver;
        color: white;
      }
    }
  }
}

</style>