import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'
import LocationView from '../views/LocationView.vue'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    
  ]
})

router.beforeEach((to, from) => {
  if(to.name == 'home'){
    return true
  }

  if(!localStorage.getItem('token')){
    return {
      name: 'home'
    }
  }

  checkTokenAuth()
})

const checkTokenAuth = () => {
  axios.get('http://localhost/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response) => {})
  .catch((error) => {
    localStorage.removeItem('token')
    router.push({
      name: 'home'
    })
  })
}

export default router
