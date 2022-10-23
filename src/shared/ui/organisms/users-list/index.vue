<script>
import { UserCard, UserSkeleton } from '@/shared/ui/molecules'
import { getYearsSlicesUsersList } from '@/shared/helpers'
export default {
  name: 'UsersList',
  components: { UserCard, UserSkeleton },
  props: ['usersList', 'activeSortType'],
  computed: {
    slicesUsersList() {
      return getYearsSlicesUsersList(this.usersList)
    },
    isBirthdaySort() {
      return this.activeSortType === 'birthday'
    },
    isSeparatorActive() {
      return this.slicesUsersList.nextYearList.length > 0
    },
  },
}
</script>
<template>
  <div v-show="usersList && !isBirthdaySort" class="users-list">
    <UserCard v-for="user in usersList" :key="user.id" :is-birthday-active="false" :user="user" />
  </div>
  <div v-show="usersList && isBirthdaySort" class="users-list">
    <UserCard
      v-for="user in slicesUsersList.currentYearList"
      :key="user.id"
      :user="user"
      :is-birthday-active="true"
    />
    <div v-show="isSeparatorActive" class="separator">
      <span class="separator__title">2023</span>
    </div>
    <UserCard
      v-for="user in slicesUsersList.nextYearList"
      :key="user.id"
      :user="user"
      :is-birthday-active="true"
    />
  </div>
  <div v-show="!usersList" class="users-list">
    <UserSkeleton v-for="item in [...Array(10).keys()]" :key="item" />
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.css';
</style>