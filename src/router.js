// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import BookEvent from './views/BookEvent.vue';
import ShowEvent from './views/ShowEvent.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/book-event',
        name: 'BookEvent',
        component: BookEvent,
    },
    {
        path: '/show-event',
        name: 'ShowEvent',
        component: ShowEvent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
