import { createStore } from 'vuex'
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor'
import { apiUrl } from '@/config/apiUrl';
import { getSortedUsersByType} from "@/helpers";

const axios = setupCache(Axios);

export default createStore({
    state () {
        return {
            searchQuery: '',
            activeTabKey: 'all',
            usersList: null,
            criticalError: null,
            filteredUsers: null,
            appError: false,
            showModal: false,
            activeSortType: 'alphabet'
        }
    },
    mutations: {
        updateActiveTabKey (state, payload) {
            state.activeTabKey = payload.tabKey
        },
        updateSearchQuery (state, payload) {
            state.searchQuery = payload
        },
        updateUsersList (state, payload) {
            state.usersList = payload
            state.filteredUsers = payload
        },
        updateFilteredUsersList (state, payload) {
            state.filteredUsers = payload
        },
        updateAppError (state, payload) {
            state.appError = payload
        },
        updateShowModal (state, payload) {
            state.showModal = payload
        },
        updateActiveSortType (state, payload) {
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