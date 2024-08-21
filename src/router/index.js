import {createWebHistory, createRouter} from 'vue-router'

import HomePage from "@/components/HomePage.vue";
import BaseRouting from '@/components/BaseRouting.vue'
import NestedRoutes from "@/components/NestedRoutes.vue";
import NestedChild from "@/components/NestedChild.vue";
//Navigation Guards
import LoginComponent from "@/components/NavigationGuards/LoginComponent.vue";
import UserPage from "@/components/NavigationGuards/UserPage.vue";
import AdminPage from "@/components/NavigationGuards/AdminPage.vue";
import {auth} from "@/auth.js";
//Error
import NotFound from "@/components/NotFound.vue";
//V-model
import MainModel from "@/components/V_model/MainModel.vue";
import ParentCustomSelect from "@/components/V_model/SelectModel/ParentCustomSelect.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/BaseRouting/:id',
        name: 'base',
        component: BaseRouting,
    },
    {
        path: '/NestedRoutes',
        component: NestedRoutes,
        children: [
            {
                path: 'child1',
                component: NestedChild
            }
        ]
    },
    {
        path: '/Login',
        component: LoginComponent,
        meta: {title: 'Login page', requiresAuth: false}
    },
    {
        path: '/UserPage/:id',
        component: UserPage,
        meta: {title: 'User page', requiresAuth: true, requiresRole: 'user', extraInfo: 'Only for users'},
        props: true,
    },
    {
        path: '/admin',
        component: AdminPage,
        meta: {title: 'Admin Page', requiresAuth: true, requiresRole: 'admin'},
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        meta: {title: '404 Not found'}
    },
    {
        path: '/MainModel',
        component: MainModel
    },
    {
        path: '/ParentCustomSelect',
        component: ParentCustomSelect
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!auth.isAuthenticated) {
            next('/');
        } else if (to.meta.requiresRole && to.meta.requiresRole !== auth.role) {
            next('/404');
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router