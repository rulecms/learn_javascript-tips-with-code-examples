import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TipDetail from '../views/TipDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tip/:slug',
            name: 'tipDetail',
            component: TipDetail,
            props: true
        }
    ]
})

export default router 