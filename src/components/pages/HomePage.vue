<template>
  <div class="page">
    <template v-if="defer(1)" >
      <AppTop
          pageTitle="Поиск"
          searchInputPlaceholder="Введи имя, фамилию, тег..."
          :departmentsNames="departmentsNames"
          :activeTabKey="activeTabKey"
      />
    </template>
    <template v-if="defer(2)" >
      <UsersList :activeSortType="activeSortType" :usersList="usersList" v-show="!appError" />
    </template>
    <ErrorScreen v-if="appError" :errorType="appError" />
  </div>
  <ModalWindow />
</template>

<script>
  import ModalWindow from "@/components/organisms/ModalWindow";
  import AppTop from '@/components/templates/AppTop'
  import UsersList from "@/components/molecules/UsersList";
  import { departmentsNames } from "@/config/deparments-names";
  import { getSortedUsersByType} from "@/helpers";
  import ErrorScreen from "@/components/organisms/ErrorScreen";
  import Defer from '@/mixins/Defer';

  export default {
    data() {
      return {
        departmentsNames: departmentsNames
      }
    },
    mixins: [
      Defer()
    ],
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
        this.filterUsers();
      },
      activeTabKey() {
        this.updateUsers();
      },
      activeSortType() {
        this.sortUsers();
      }
    },
    methods: {
      filterUsers() {
        this.$store.dispatch('filterUsers');
      },
      updateUsers () {
        this.$store.dispatch('getUsersLists')
      },
      sortUsers () {
        const sortedUsers = getSortedUsersByType(
            this.activeSortType,
            this.$store.state.filteredUsers
        )
        this.$store.commit('updateFilteredUsersList', sortedUsers)
      }
    },
    mounted() {
      this.updateUsers();
      this.sortUsers();
      this.filterUsers();
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>