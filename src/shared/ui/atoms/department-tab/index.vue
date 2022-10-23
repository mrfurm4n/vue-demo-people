<script>
export default {
  name: 'DepartmentTab',
  props: ['title', 'tabKey', 'isActive'],
  methods: {
    changeActiveTab() {
      this.$store.commit('updateActiveTabKey', this.tabKey)
    },
  },
}
</script>
<template>
  <button class="department-tab" :class="{ active: isActive }" @click="changeActiveTab">
    {{ title }}
  </button>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>