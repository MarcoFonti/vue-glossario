import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MembersPage from '../pages/MembersPage.vue';
import WordDetailPage from '../pages/WordDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/membri', component: MembersPage, name: 'members' },
        { path: '/words/:slug', component: WordDetailPage, name: 'word-detail' },
        { path: '/notfound', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: '/notfound' }

    ]
});

export { router };