import { createApp } from 'vue'
import App from './App.vue'
import VueMq from 'vue3-mq'
//import { breakpoints } from './breakpoints'

const app = createApp(App)
app.use(VueMq)
console.log('app', app)
app.mount('#app')

export default app
