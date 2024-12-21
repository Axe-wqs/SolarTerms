import { createRouter,createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolarTerm from '../views/SolarTerm.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/solar-term',
        name: 'solar-term',
        component: SolarTerm
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;