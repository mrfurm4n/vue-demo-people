<template>
  <div class="error">
    <img :src="error.image" :alt="errorType" class="error__img">
    <p class="error__title">{{ error.title }}</p>
    <p class="error__subtitle">{{ error.subtitle }}</p>
    <button v-if="error.buttonTitle" class="error__btn" @click="updateQuery">{{ error.buttonTitle }}</button>
  </div>
</template>

<script>
import { errorsConfig } from '@/config';

export default {
  props: ['errorType'],
  computed: {
    error() {
      return errorsConfig[this.errorType]
    }
  },
  methods: {
    updateQuery() {
      this.$store.dispatch('getUsersLists')
    }
  }
}
</script>

<style lang="scss" scoped>
 .error {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
   &__img {
     width: 56px;
     height: 56px;
   }
   &__title {
     margin-top: 8px;
     font-weight: 600;
     font-size: 17px;
     line-height: 22px;
     text-align: center;
     color: #050510;
   }
   &__subtitle {
     margin-top: 12px;
     font-weight: 400;
     font-size: 16px;
     line-height: 20px;
     text-align: center;
     color: #97979B;
   }
   &__btn {
     margin-top: 12px;
     font-weight: 600;
     font-size: 16px;
     line-height: 20px;
     text-align: center;
     color: #6534FF;
   }
 }
</style>