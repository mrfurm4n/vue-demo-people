<template>
  <span class="caret" :class="{ focused: focused }">{{ searchQuery }}</span>
  <input
      class="input"
      type="text"
      v-model="searchQuery"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
  >
</template>

<script>
export default {
  props: ['placeholder'],
  data() {
    return {
      focused: false
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('updateSearchQuery', value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes CaretPulsing {
  50% {
    border-color: #6534FF;
  }
}
.caret,
.input {
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #050510;
}
.input {
  padding: 10px 44px;
  background: #F7F7F8;
  border-radius: 16px;
  width: 100%;
  appearance: none;
  caret-color: transparent;
  &::placeholder {
    color: #C3C3C6;
  }
}
.caret {
  position: absolute;
  left: 42px;
  align-items: center;
  border-right: 2px solid transparent;
  animation: CaretPulsing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards infinite;
  height: 20px;
  color: transparent;
  opacity: 0;
  &.focused {
    opacity: 1;
  }
}
</style>