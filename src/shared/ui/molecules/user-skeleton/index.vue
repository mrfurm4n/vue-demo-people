<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'UserSkeleton',
  components: { ContentLoader },
}
</script>
<template>
  <div class="skeleton-card">
    <content-loader
      viewBox="0 0 343 84"
      :speed="2"
      primary-color="#f3f3f3"
      secondary-color="#ecebeb"
    >
      <circle cx="36" cy="42" r="36" />
      <rect x="88" y="25" rx="8" ry="8" width="144" height="16" />
      <rect x="88" y="47" rx="6" ry="6" width="80" height="12" />
    </content-loader>
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>