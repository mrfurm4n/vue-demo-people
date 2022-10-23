<template>
  <button class="department-tab" :class="{active: isActive}" @click="changeActiveTab">
    {{ title }}
  </button>
</template>

<script>
  export default {
    props: ['title', 'tabKey', 'isActive'],
    methods: {
      changeActiveTab() {
        this.$store.commit('updateActiveTabKey', this.tabKey)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .department-tab {
    min-width: fit-content;
    padding: 8px 12px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #97979B;
    transition: 0.2s;
    &.active {
      color: #050510;
      font-weight: 600;
      border-color: rgba(101, 52, 255, 1);
      transition: 0.2s;
    }
  }
</style>