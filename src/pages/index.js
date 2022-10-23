import PagesRouting from './index.vue'
import HomePage from '@/pages/home-page'
import DetailPage from '@/pages/detail-page'

export const routes = [
  { name: 'home-page', path: '/', component: HomePage },
  { name: 'detail-page', path: '/detail/:id', component: DetailPage, props: true },
]

export { PagesRouting }
