<template>
  <div class="top">
    <div class="top__title">
      <PageTitle :title="pageTitle" />
    </div>
    <div class="top-search">
      <SearchBar :placeholder="searchInputPlaceholder" />
    </div>
    <div class="top-tabs">
      <DepartmentTabs :departmentsNames="departmentsNames" :activeTabKey="activeTabKey" />
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/molecules/SearchBar'
  import PageTitle from "@/components/atoms/PageTitle";
  import DepartmentTabs from "@/components/molecules/DepartmentTabs";

  export default {
    props: ['pageTitle', 'searchInputPlaceholder', 'departmentsNames', 'activeTabKey'],
    components: {
      DepartmentTabs,
      PageTitle,
      SearchBar
    }
  }
</script>

<style lang="scss" scoped>
  .top {
    padding-top: 8px;
    border-bottom: 0.3px solid #C3C3C6;
    width: 100%;
    &__title {
      padding: 8px 24px 12px 24px;
    }
    &-search {
      padding: 6px 16px;
    }
    &-tabs {
      padding-top: 8px;
      padding-right: 16px;
      padding-left: 16px;
    }
  }
</style>