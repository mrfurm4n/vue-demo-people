<template>
  <div class="users-list" v-if="usersList && !isBirthdaySort">
    <UserCard
        v-for="user in usersList"
        v-bind:isBirthdayActive="false"
        v-bind:user="user"
        v-bind:key="user.id"
    />
  </div>
  <div class="users-list" v-else-if="usersList && isBirthdaySort">
    <UserCard
        v-for="user in slicesUsersList.currentYearList"
        v-bind:user="user"
        v-bind:isBirthdayActive="true"
        v-bind:key="user.id"
    />
    <div class="separator" v-if="isSeparatorActive">
      <span class="separator__title">2023</span>
    </div>
    <UserCard
        v-for="user in slicesUsersList.nextYearList"
        v-bind:user="user"
        v-bind:isBirthdayActive="true"
        v-bind:key="user.id"
    />
  </div>
  <div class="users-list" v-else>
    <UserSkeleton
      v-for="item in [...Array(10).keys()]"
      v-bind:key="item"
    />
  </div>
</template>

<script>
import UserCard from "@/components/atoms/UserCard";
import UserSkeleton from "@/components/atoms/UserSkeleton";
import { getYearsSlicesUsersList } from '@/helpers';
export default {
  components: {UserCard, UserSkeleton},
  props: ['usersList', 'activeSortType'],
  computed: {
    slicesUsersList() {
      return getYearsSlicesUsersList(this.usersList)
    },
    isBirthdaySort () {
      return this.activeSortType === 'birthday';
    },
    isSeparatorActive () {
      return this.slicesUsersList.nextYearList.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.separator {
  margin: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #C3C3C6;
    width: 160px;
    margin: 0 12px;
  }
  &::before,
  &::after {
    content: '';
    display: inline-block;
    height: 1px;
    background: #C3C3C6;
    width: 100%;
  }
}
</style>