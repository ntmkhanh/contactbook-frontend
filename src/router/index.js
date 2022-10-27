import { createWebHistory, createRouter } from 'vue-router'; 
import ContactBook from '@/views/ContactBook.vue';



const routes = [
    {
        path: '/contacts/:id',
        name: 'contact.edit',
        component: () => import('@/views/ContactEdit.vue'),
        props: (route) => ({ contactId: parseInt(route.params.id) })
        },
    {
        path: '/',
        name: 'contactbook', 
        component: ContactBook,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
    },
    {
        path: '/contacts',
        name: 'contact.add',
        component: () => import('@/views/ContactAdd.vue')
    },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes,
});

export default router;