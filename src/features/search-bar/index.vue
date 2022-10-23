<script>
import { SearchIcon, SortIcon } from '@/shared/icons'
import { SearchInput } from '@/shared/ui/atoms'

export default {
  name: 'SearchBar',
  components: {
    SearchInput,
    SortIcon,
    SearchIcon,
  },
  props: ['placeholder'],
  computed: {
    isSearchActive() {
      const { searchQuery } = this.$store.state
      return searchQuery.length > 0
    },
  },
  methods: {
    showModal() {
      this.$store.commit('updateShowModal', true)
    },
    filterUsers() {
      this.$store.dispatch('filterUsers')
    },
  },
}
</script>
<template>
  <div class="search-bar">
    <button class="search-bar__search-btn" @click="filterUsers">
      <SearchIcon :is-active="isSearchActive" />
    </button>
    <SearchInput :placeholder="placeholder" />
    <button class="search-bar__sort-btn" @click="showModal">
      <SortIcon />
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>