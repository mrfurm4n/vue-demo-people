<script>
import { SearchBar } from '@/features'
import { PageTitle } from '@/shared/ui/atoms'
import { DepartmentTabs } from '@/shared/ui/organisms'

export default {
  name: 'AppTop',
  components: {
    DepartmentTabs,
    PageTitle,
    SearchBar,
  },
  props: ['pageTitle', 'searchInputPlaceholder', 'departmentsNames', 'activeTabKey'],
}
</script>
<template>
  <div class="top">
    <PageTitle class="top__title" :title="pageTitle" />
    <SearchBar class="top-search" :placeholder="searchInputPlaceholder" />
    <DepartmentTabs
      class="top-tabs"
      :departments-names="departmentsNames"
      :active-tab-key="activeTabKey"
    />
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.css';
</style>