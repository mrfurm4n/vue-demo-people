<template>
  <div class="page">
    <AppTop
        pageTitle="Поиск"
        searchInputPlaceholder="Введи имя, фамилию, тег..."
        :departmentsNames="departmentsNames"
        :activeTabKey="activeTabKey"
    />
    <UsersList :activeSortType="activeSortType" :usersList="usersList" v-if="!appError" />
    <ErrorScreen v-else :errorType="appError" />
  </div>
  <ModalWindow />
</template>

<script>
  import ModalWindow from "@/components/organisms/ModalWindow";
  import AppTop from '@/components/templates/AppTop'
  import UsersList from "@/components/molecules/UsersList";
  import { departmentsNames } from "@/config/deparments-names";
  import {filterUsersBySearchQuery, getSortedUsersByType} from "@/helpers";
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
      ErrorScreen,
      ModalWindow
    },
    emits: ['changeActiveTab'],
    computed: {
      usersList () {
        return this.$store.getters.getFilteredUsers;
      },
      activeTabKey () {
        return this.$store.state.activeTabKey
      },
      searchQuery () {
        return this.$store.state.searchQuery
      },
      appError () {
        return this.$store.state.appError
      },
      activeSortType () {
        return this.$store.state.activeSortType
      }
    },
    watch: {
      searchQuery() {
        filterUsersBySearchQuery(
            this.searchQuery,
            this.$store.state.usersList,
            this.$store.commit
        )
      },
      activeTabKey() {
        this.updateUsers();
      },
      activeSortType() {
        this.sortUsers();
      }
    },
    methods: {
      updateUsers () {
        this.$store.dispatch('getUsersLists')
      },
      sortUsers () {
        const sortedUsers = getSortedUsersByType(
            this.activeSortType,
            this.$store.state.filteredUsers
        )
        console.log(sortedUsers)
        this.$store.commit('updateFilteredUsersList', sortedUsers)
      }
    },
    mounted() {
      this.updateUsers();
      this.sortUsers();
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