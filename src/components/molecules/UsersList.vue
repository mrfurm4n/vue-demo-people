<template>
  <div class="cards-wrap" v-if="usersList">
    <UserCard
        v-for="user in usersList"
        v-bind:user="user"
        v-bind:key="user.id"
    />
  </div>
  <div class="cards-wrap" v-else>
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
.cards-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card {
  display: flex;
  align-items: center;
  padding: 6px 0;
  &__photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #5F30F9;
  }
  &-info {
    margin-left: 16px;
    &__name {
      display: inline-block;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #050510;
      margin-right: 4px;
    }
    &__tag {
      display: inline-block;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #97979B;
    }
    &__department {
      margin-top: 3px;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: #55555C;
    }
  }
}
</style>