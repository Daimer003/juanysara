import { createRouter, createWebHistory } from 'vue-router'
import Invitation from '../components/views/Invitation.vue'
import Load from '../components/loading/Loading.vue'

const routes = [
  { path: '/invitation', component: Load },
  { path: '/invitation', component: Invitation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router