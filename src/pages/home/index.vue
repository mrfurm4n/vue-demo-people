<script>
import { ModalWindow, UsersList } from '@/shared/ui/organisms'
import { ErrorScreen, AppTop } from '@/shared/ui/templates'
import { departmentsNames } from '@/shared/config'
import { getSortedUsersByType } from '@/shared/helpers'
import { Defer } from '@/shared/mixins'

export default {
  name: 'HomePage',
  components: {
    AppTop,
    UsersList,
    ErrorScreen,
    ModalWindow,
  },
  mixins: [Defer()],
  data() {
    return {
      departmentsNames: departmentsNames,
    }
  },
  computed: {
    usersList() {
      return this.$store.getters.getFilteredUsers
    },
    activeTabKey() {
      return this.$store.state.activeTabKey
    },
    searchQuery() {
      return this.$store.state.searchQuery
    },
    appError() {
      return this.$store.state.appError
    },
    activeSortType() {
      return this.$store.state.activeSortType
    },
  },
  watch: {
    searchQuery() {
      this.filterUsers()
    },
    activeTabKey() {
      this.updateUsers()
    },
    activeSortType() {
      this.sortUsers()
    },
  },
  mounted() {
    this.updateUsers()
    this.sortUsers()
    this.filterUsers()
  },
  methods: {
    filterUsers() {
      this.$store.dispatch('filterUsers')
    },
    updateUsers() {
      this.$store.dispatch('getUsersLists')
    },
    sortUsers() {
      const sortedUsers = getSortedUsersByType(this.activeSortType, this.$store.state.filteredUsers)
      this.$store.commit('updateFilteredUsersList', sortedUsers)
    },
  },
}
</script>
<template>
  <div class="page">
    <template v-if="defer(1)">
      <AppTop
        page-title="Поиск"
        search-input-placeholder="Введи имя, фамилию, тег..."
        :departments-names="departmentsNames"
        :active-tab-key="activeTabKey"
      />
    </template>
    <template v-if="defer(2)">
      <UsersList v-show="!appError" :active-sort-type="activeSortType" :users-list="usersList" />
    </template>
    <ErrorScreen v-if="appError" :error-type="appError" />
  </div>
  <ModalWindow />
</template>
<style lang="scss" scoped>
@import './index.module.css';
</style>