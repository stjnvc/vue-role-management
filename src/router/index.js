import { createRouter, createWebHistory } from 'vue-router'
import RolesListView from '../views/RoleListView.vue'

const routes = [
  {
    path: '/',
    name: 'roles-list',
    component: RolesListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
