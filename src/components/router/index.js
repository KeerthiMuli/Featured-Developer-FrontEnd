import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../Home';
import ViewAll from '../ViewAll';
import Login from '../Login';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Home
    }, {
        path: "/home",
        component: Home
    },
    {
       path: "/ViewAll",
      component: ViewAll,
    },
    {
        path: "/Login",
       component: Login,
     }
]


const router = new VueRouter({
    routes,
});


export default router;