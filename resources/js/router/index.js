import { createRouter, createWebHistory } from "vue-router";
import productIndex from '../components/products/Index.vue'
import productCreate from '../components/products/Create.vue'
import notFound from '../components/notFound.vue'

const routes = [
    {
        path:'/',
        name:'products.index',
        component:productIndex
    },
    {
        path:'/products/create',
        name:'products.create',
        component:productCreate
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notFound',
        component:notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
