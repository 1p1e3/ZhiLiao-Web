import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AddView from '@/views/AddView.vue'
import DetailView from "@/views/DetailView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DetailView
        },
        {
            path: '/add',
            component: AddView
        }
    ]
})

export default router