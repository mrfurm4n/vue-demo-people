<template>
  <li class="radio-item">
    <span class="radio-item__radio" :class="{ active: isActive }"></span>
    <p class="radio-item__title">{{ title }}</p>
  </li>
</template>

<script>
  export default {
    props: ['title', 'isActive']
  }
</script>

<style lang="scss" scoped>
  .radio-item {
    padding: 20px 0 20px 34px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    &__radio {
      position: absolute;
      border: 2px solid #6534FF;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transition: 0.2s;
      &.active {
        border-width: 6px;
        transition: 0.2s;
      }
    }
    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #050510;
    }
  }
</style>