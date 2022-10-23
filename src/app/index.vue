<script>
import { PagesRouting } from '@/pages'

export default {
  name: 'App',
  components: { PagesRouting },
}
</script>
<template>
  <PagesRouting />
</template>
<style lang="scss">
@import './index.module.scss';
@import 'normalize-scss';
@include normalize();
</style>
