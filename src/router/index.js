import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import LoginComponent from '@/components/Login'
import HomeComponent from '@/components/HelloWorld'
import Teste from '@/components/Teste'
import Carteira from '@/components/Carteira'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/teste',
      component: Teste
    },
    {
      path: '/carteira',
      component: Carteira
    },
  ]
})

router.beforeEach(navigationGuard)

export default router