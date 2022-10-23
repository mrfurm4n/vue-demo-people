import { createStore } from 'vuex'
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor'
import { apiUrl } from '@/config/apiUrl';
import {
    getSortedUsersByType,
    getLocalStorage,
    setLocalStorage,
    getFilteredUsersBySearchQuery
} from "@/helpers";

const axios = setupCache(Axios);
let filterTimer = null;

export default createStore({
    state () {
        return {
            searchQuery: getLocalStorage('search-query', ''),
            activeTabKey: getLocalStorage('active-tab', 'all'),
            usersList: null,
            criticalError: null,
            filteredUsers: null,
            appError: false,
            showModal: false,
            activeSortType: getLocalStorage('sort-type', 'alphabet')
        }
    },
    mutations: {
        updateActiveTabKey (state, payload) {
            setLocalStorage('active-tab', payload)
            state.activeTabKey = payload
        },
        updateSearchQuery (state, payload) {
            setLocalStorage('search-query', payload)
            state.searchQuery = payload
        },
        updateUsersList (state, payload) {
            state.usersList = payload === null ? null : payload.map(item => Object.freeze(item))
            state.filteredUsers = payload === null ? null : payload.map(item => Object.freeze(item))
        },
        updateFilteredUsersList (state, payload) {
            state.filteredUsers = payload === null ? null : payload.map(item => Object.freeze(item))
        },
        updateAppError (state, payload) {
            state.appError = payload
        },
        updateShowModal (state, payload) {
            state.showModal = payload
        },
        updateActiveSortType (state, payload) {
            setLocalStorage('sort-type', payload)
            state.activeSortType = payload
        }
    },
    actions: {
        getUsersLists () {
            const source = Axios.CancelToken.source();
            this.commit('updateUsersList', null);

            axios
                .get(`${apiUrl}?__example=${this.state.activeTabKey}`, {
                    cache: {
                        ttl: 1000 * 60 * 5,
                        methods: ['get'],
                        cachePredicate: {
                            statusCheck: (status) => status >= 200 && status < 400,
                        },
                    },
                    cancelToken: source.token,
                })
                .then((response) => {
                    this.commit('updateUsersList', response.data.items);
                })
                .catch(() => {
                    this.commit('updateAppError', 'criticalError');
                })
        },
        filterUsers() {
            const searchQuery = this.state.searchQuery;
            const usersList = this.state.usersList;

            const filter = () => {
                const filteredUsers = getFilteredUsersBySearchQuery(searchQuery, usersList)
                const hasSearchQuery = searchQuery.length > 0;
                const hasFilteredUsers = Array.isArray(filteredUsers) ? filteredUsers.length > 0 : false;
                const isSearchError = !hasFilteredUsers && hasSearchQuery;

                this.commit('updateAppError', isSearchError ? 'searchError' : false);
                this.commit('updateFilteredUsersList', filteredUsers)
            }

            clearTimeout(filterTimer);
            filterTimer = setTimeout(() => filter(), 500);
        }
    },
    getters: {
        getFilteredUsers (state) {
            return getSortedUsersByType(
                state.activeSortType,
                state.filteredUsers
            )
        }
    }
})