import Main from '../components/Main.vue'
import Build from '../components/build/Build.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = { template: '<div class="w-full max-w-xs">Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Main },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/build', component: Build },
  { path: '/analyze', component: Main }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;
