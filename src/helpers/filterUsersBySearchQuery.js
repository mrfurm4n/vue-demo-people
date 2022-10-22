import { getFilteredUsersBySearchQuery} from "@/helpers";

let filterTimer;
export const filterUsersBySearchQuery = (searchQuery, usersList, commit) => {
    clearTimeout(filterTimer)

    filterTimer = setTimeout(() => {
        const filteredUsers = getFilteredUsersBySearchQuery(searchQuery, usersList)
        const hasSearchQuery = searchQuery.length > 0;
        const hasFilteredUsers = filteredUsers.length > 0;
        const isSearchError = !hasFilteredUsers && hasSearchQuery;

        commit('updateAppError', isSearchError ? 'searchError' : false);
        commit('updateFilteredUsersList', filteredUsers)
    }, 500)
}