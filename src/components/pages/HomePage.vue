<template>
  <div class="page">
    <AppTop
        pageTitle="Поиск"
        searchInputPlaceholder="Введи имя, фамилию, тег..."
        :departmentsNames="departmentsNames"
        :activeTabKey="activeTabKey"
    />
    <div class="users-list">
      <UsersList />
    </div>
  </div>
</template>

<script>
  import AppTop from '@/components/templates/AppTop'
  import UsersList from "@/components/molecules/UsersList";
  import { departmentsNames } from "@/config/deparments-names";
  import {searchUsersByQuery} from "@/helpers";

  export default {
    data() {
      return {
        departmentsNames: departmentsNames
      }
    },
    components: {
      AppTop,
      UsersList
    },
    emits: ['changeActiveTab'],
    computed: {
      activeTabKey () {
        return this.$store.state.activeTabKey
      },
      searchQuery () {
        return this.$store.state.searchQuery
      }
    },
    watch: {
      activeTabKey() {
        this.$store.dispatch('getUsersLists')
      },
      searchQuery() {
        searchUsersByQuery(
            this.searchQuery,
            this.$store.state.usersList,
            this.$store.commit
        )
      }
    },
    mounted() {
      this.$store.dispatch('getUsersLists')
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
  }
  .users-list {
    width: 100%;
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    overflow-y: auto;
  }
</style>