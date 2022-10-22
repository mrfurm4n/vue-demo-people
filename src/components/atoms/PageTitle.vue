<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #050510;
  }
</style>