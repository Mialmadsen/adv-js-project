import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../modules/useAuth.js'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true } // This route requires authentication
    },
    
  ],
})

// Navigation guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  const { isLoggedIn } = useAuth()
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    next({ name: 'login' })  // Redirect to login if not authenticated
  }
  else {
    next()  // Proceed to the route
  }
})



export default router
