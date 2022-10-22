import { createStore } from 'vuex'
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor'
import { apiUrl } from '@/config/apiUrl';

const axios = setupCache(Axios);

export default createStore({
    state () {
        return {
            searchQuery: '',
            activeTabKey: 'all',
            usersList: null,
            error: null,
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
        },
        updateError (state, payload) {
            state.error = payload
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
                .catch((error) => {
                    this.commit('updateError', error);
                })
        }
    }
})