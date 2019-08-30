import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../view/Login.vue'
import home from '../view/Home.vue'
import notFind from '../view/404.vue'
import main from '../view/Main.vue'
import form from '../view/One/Form.vue'
import table from '../view/One/Table.vue'
import user from '../view/One/User.vue'
import tableTwo from '../view/Two/TableTwo.vue'
import map from '../view/Two/Map.vue'


const routes = [{
    path: '/',
    name: 'login',
    component: login
}, {
    path: '/notFind',
    name: 'notFind',
    component: notFind
}, {
    path: '/home',
    name: 'home',
    component: home,
    children: [{
        path: '/main',
        name: 'main',
        component: main
    }, {
        path: '/form',
        name: 'form',
        component: form
    }, {
        path: '/table',
        name: 'table',
        component: table
    }, {
        path: '/user',
        name: 'user',
        component: user
    }, {
        path: '/tableTwo',
        name: 'tableTwo',
        component: tableTwo
    }, {
        path: '/map',
        name: 'map',
        component: map
    }]
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;