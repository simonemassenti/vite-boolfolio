import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import PortfoliosPage from './pages/PortfoliosPage.vue';
import SinglePortfolio from './pages/SinglePortfolio.vue';
const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/portfolios',
            name: 'portfolios',
            component: PortfoliosPage
        },
        {
            path: '/portfolios/:slug',
            name: 'single-portfolio',
            component: SinglePortfolio
        }
    ]
});
export { router };