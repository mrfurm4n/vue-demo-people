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
  <div class="users-list">
    <template v-if="usersList && !isBirthdaySort">
      <UserCard v-for="user in usersList" :key="user.id" :is-birthday-active="false" :user="user" />
    </template>
    <template v-else-if="usersList && isBirthdaySort">
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
    </template>
    <template v-else>
      <UserSkeleton v-for="item in [...Array(10).keys()]" :key="item" />
    </template>
  </div>
</template>
<style lang="scss" scoped>
@import './index.module.scss';
</style>