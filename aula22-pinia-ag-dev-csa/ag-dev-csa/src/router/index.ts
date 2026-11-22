
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {​
        path: '/projetos',​
        name: 'projetos',​
        component: () => import('../views/ProjetoView.vue')​
    },​
    {
        path: '/contato',
        name: 'contato',
        component: () => import('../views/ContatoView.vue')
    },
    {
        path: '/noticias',
        name: 'noticias',
        component: () => import('../views/NoticiasView.vue')
    },
    {
        path: '/alunos',
        name: 'alunos',
        component: () => import('../views/AlunosView.vue')
    }
]



export default routes
