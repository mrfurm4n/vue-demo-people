<script>
import { DepartmentTab } from '@/shared/ui/atoms'

export default {
  name: 'DepartmentTabs',
  components: {
    DepartmentTab,
  },
  props: ['departmentsNames', 'activeTabKey'],
}
</script>
<template>
  <div class="department-tabs">
    <DepartmentTab
      v-for="key in Object.keys(departmentsNames)"
      :key="key"
      :title="departmentsNames[key]"
      :is-active="key === activeTabKey"
      :tab-key="key"
    />
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.css';
</style>