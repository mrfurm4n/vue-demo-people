import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import HomePage from "@/components/pages/HomePage";
import DetailPage from "@/components/pages/DetailPage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { name: 'home', path: '/', component: HomePage },
    { name: 'detail', path: '/detail/:id', component: DetailPage, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

