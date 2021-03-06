import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/shoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList  from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'
import Member from '@/components/pages/Member'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',name: 'Main',component: Main,
      children:[
        {path: '/',name: 'ShoppingMall',component: ShoppingMall},//商城首页
        {path: '/categoryList',name: 'CategoryList',component: CategoryList},//类别类别页
        {path: '/Cart',name: 'Cart',component: Cart},//购物车页
        {path: '/member',name: 'Member',component: Member},//会员中心
      ]
    },
    {path: '/register',name: 'Register',component: Register},//注册页
    {path: '/login',name: 'Login',component: Login},//登录页
    {path: '/goods',name: 'Goods',component: Goods},//商品详情页
    // {path: '/',name: 'ShoppingMall',component: ShoppingMall},//商城首页
    // {path: '/categoryList',name: 'CategoryList',component: CategoryList},//类别类别页
    // {path: '/Cart',name: 'Cart',component: Cart},//购物车页
  ]
})
