import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home'
import App from './App'
import Poppers from "./components/Poppers";
import Example from './components/Example'
import VueMq from 'vue3-mq'

const routes = [
  { path: '/', component: Home, meta: { transition: 'slide-left'} },
  { path: '/poppers', component: Poppers, meta: { transition: 'slide-right'} },
  { path: '/example', component: Example }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(VueMq)
app.use(router)
app.mount('#app')

export default app
