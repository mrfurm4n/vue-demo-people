<script>
import { errorsConfig } from '@/shared/config'

export default {
  name: 'ErrorScreen',
  props: ['errorType'],
  computed: {
    error() {
      return errorsConfig[this.errorType]
    },
  },
  methods: {
    updateQuery() {
      this.$store.dispatch('getUsersLists')
    },
  },
}
</script>
<template>
  <div class="error">
    <img :src="error.image" :alt="errorType" class="error__img" />
    <p class="error__title">{{ error.title }}</p>
    <p class="error__subtitle">{{ error.subtitle }}</p>
    <button v-show="error.buttonTitle" class="error__btn" @click="updateQuery">
      {{ error.buttonTitle }}
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import 'index.module.css';
</style>