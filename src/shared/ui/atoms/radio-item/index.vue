<script>
export default {
  name: 'RadioItem',
  props: ['title', 'isActive'],
}
</script>
<template>
  <li class="radio-item">
    <span class="radio-item__radio" :class="{ active: isActive }"></span>
    <p class="radio-item__title">{{ title }}</p>
  </li>
</template>
<style lang="scss" scoped>
@import 'index.module.css';
</style>