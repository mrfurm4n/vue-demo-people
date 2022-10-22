import { getSearchableUsers} from "@/helpers";

let filterTimer;
export const searchUsersByQuery = (searchQuery, usersList, commit) => {
    clearTimeout(filterTimer)

    filterTimer = setTimeout(() => {
        const filteredUsers = getSearchableUsers(searchQuery, usersList)
        commit('updateFilteredUsersList', filteredUsers)

        const hasSearchQuery = searchQuery.length > 0
        const hasFilteredUsers = filteredUsers.length > 0;
        commit('updateSearchError', !hasFilteredUsers && hasSearchQuery)
    }, 500)
}