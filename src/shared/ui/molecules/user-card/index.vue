<script>
import { departmentsNames } from '@/shared/config'
import { getNormalizeBirthday } from '@/shared/helpers'

export default {
  name: 'UserCard',
  props: ['user', 'isBirthdayActive'],
  computed: {
    department() {
      const departmentKey = this.user.department
      return departmentsNames[departmentKey]
    },
    birthday() {
      return getNormalizeBirthday(this.user.birthday)
    },
  },
}
</script>
<template>
  <router-link class="card" :to="{ name: 'detail', params: { id: user.id } }">
    <img :src="user.avatarUrl" :alt="user.name" class="card__photo" />
    <div calss="card-info">
      <p class="card-info__name">{{ user.firstName }} {{ user.lastName }}</p>
      <p class="card-info__tag">{{ user.userTag }}</p>
      <p class="card-info__department">{{ department }}</p>
    </div>
    <p v-show="isBirthdayActive" class="card__birthday">{{ birthday }}</p>
  </router-link>
</template>
<style lang="scss" scoped>
@import './index.module.css';
</style>