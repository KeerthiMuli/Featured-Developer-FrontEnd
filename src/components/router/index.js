import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../Home';
import ViewAll from '../ViewAll';
import Login from '../Login';
import Signup from '../Signup'

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
        path: "/Signup",
       component: Signup,
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