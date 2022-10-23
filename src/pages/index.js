import PagesRouting from './index.vue'

const HomePage = () => import('@/pages/home')
const DetailPage = () => import('@/pages/detail')

export const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'detail', path: '/detail/:id', component: DetailPage, props: true },
]

export { PagesRouting }
