<template>
  <div class="page">
    <AppTop
        pageTitle="Поиск"
        searchInputPlaceholder="Введи имя, фамилию, тег..."
        :departmentsNames="departmentsNames"
        :activeTabKey="activeTabKey"
    />
    <UsersList v-if="!appError" />
    <ErrorScreen v-else :errorType="appError" />
  </div>
</template>

<script>
  import AppTop from '@/components/templates/AppTop'
  import UsersList from "@/components/molecules/UsersList";
  import { departmentsNames } from "@/config/deparments-names";
  import {filterUsersBySearchQuery} from "@/helpers";
  import ErrorScreen from "@/components/organisms/ErrorScreen";

  export default {
    data() {
      return {
        departmentsNames: departmentsNames
      }
    },
    components: {
      AppTop,
      UsersList,
      ErrorScreen
    },
    emits: ['changeActiveTab'],
    computed: {
      activeTabKey () {
        return this.$store.state.activeTabKey
      },
      searchQuery () {
        return this.$store.state.searchQuery
      },
      appError () {
        return this.$store.state.appError
      }
    },
    watch: {
      activeTabKey() {
        this.$store.dispatch('getUsersLists')
      },
      searchQuery() {
        filterUsersBySearchQuery(
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
    height: 100vh;
  }
  .users-list {
    width: 100%;
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    overflow-y: auto;
  }
</style>