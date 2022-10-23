<script>
import { RouterView } from 'vue-router'

export default {
  name: 'PagesRouting',
  components: { RouterView },
}
</script>
<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
