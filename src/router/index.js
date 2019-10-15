import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Order from '@/components/module/Order'
import Login from '@/components/module/Login'
import Shocart from '@/components/module/Shocart'
import Phone from '@/components/module/Phone'
import Find from '@/components/module/Find'
import OldForNew from '@/components/module/OldForNew'
import InForMation from '@/components/userInformation/InForMation'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/shocart',
    name: 'Shocart',
    component: Shocart
  },
  {
    path: '/phone',
    name: 'Phone',
    component: Phone
  },
  {
    path: '/oldfornew',
    component: OldForNew
  },
  {
    path: '/inForMation',
    component: InForMation
  },
  {
    path: '/find',
    component: Find
  }
  ]
})
