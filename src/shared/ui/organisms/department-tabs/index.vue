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
      v-for="tabKey in Object.keys(departmentsNames)"
      :key="tabKey"
      :title="departmentsNames[tabKey]"
      :is-active="tabKey === activeTabKey"
      :tab-key="tabKey"
    />
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>