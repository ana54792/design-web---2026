import { cretaeRouter, createWebHistory } from 'vue-router'
import OrganizacaoView from '@/view/OrganizacaoView.vue'
import ContatoView from '@/view/ContatoView.vue'

const routes = [
    {
        path: '/',
        name 'Home',
        component: HomeView
    },
    {
        path: '/contato',
        name 'Contato',
        component: ContatoView
    },
    {
        path: '/organizacao',
        name 'Organização',
        component: OrganizacaoView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router