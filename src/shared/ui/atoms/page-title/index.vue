<template>
  <h1 class="title">{{ title }}</h1>
</template>
<script>
export default {
  name: 'PageTitle',
  props: ['title'],
}
</script>
<style lang="scss" scoped>
@import 'index.module.css';
</style>