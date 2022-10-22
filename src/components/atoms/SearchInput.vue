<template>
  <input class="input" type="text" v-model="searchQuery" :placeholder="placeholder" >
</template>

<script>
export default {
  props: ['placeholder'],
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('updateSearchQuery', value)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.input {
  padding: 10px 44px;
  background: #F7F7F8;
  border-radius: 16px;
  width: 100%;
  &::placeholder {
    color: #C3C3C6;
  }
}
</style>