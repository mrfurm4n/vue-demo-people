<script>
export default {
  name: 'SearchInput',
  props: ['placeholder'],
  data() {
    return {
      focused: false,
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('updateSearchQuery', value)
      },
    },
  },
}
</script>
<template>
  <div class="input-wrap">
    <span class="caret" :class="{ focused: focused }">{{ searchQuery }}</span>
    <input
      v-model="searchQuery"
      class="input"
      type="text"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>