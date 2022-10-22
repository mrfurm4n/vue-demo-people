<template>
  <div class="users-list" v-if="usersList">
    <UserCard
        v-for="user in usersList"
        v-bind:user="user"
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
export default {
  components: {UserCard, UserSkeleton},
  computed: {
    usersList () {
      return this.$store.state.filteredUsers;
    }
  },
}
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>