import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import './registerServiceWorker'

import FoodView from './pages/FoodView.vue'
import PlanView from './pages/PlanView.vue'

const routes = [
  { path: '/', component: FoodView },
  { path: '/PlanView', component: PlanView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
