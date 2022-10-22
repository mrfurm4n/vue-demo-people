<template>
  <div class="search-bar">
    <button class="search-bar__search-btn">
      <SearchIcon :isActive="isSearchActive" />
    </button>
    <SearchInput :placeholder="placeholder" />
    <button class="search-bar__sort-btn">
      <SortIcon />
    </button>
  </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon";
import SortIcon from "@/components/icons/SortIcon";
import SearchInput from "@/components/atoms/SearchInput";

export default {
  props: ['placeholder'],
  computed: {
    isSearchActive () {
      const { searchQuery } = this.$store.state;
      return searchQuery.length > 0;
    }
  },
  components: {
    SearchInput,
    SortIcon,
    SearchIcon,
  }
}
</script>

<style lang="scss" scoped>
  .search-bar {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &__search-btn,
    &__sort-btn {
      position: absolute;
    }
    &__search-btn {
      left: 12px;
    }
    &__sort-btn {
      right: 12px;
    }
  }
</style>