// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {toMoney} from '@/filter/moneyFilter.js'//价格过滤器
//全局引入
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

//按需引入
import {Cell, CellGroup,Tabbar, TabbarItem ,Stepper,PullRefresh,Button,Row,Col,Swipe,SwipeItem,Lazyload,List,Field,NavBar,tab,tabs} from 'vant';
Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper)
    .use(PullRefresh).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
    .use(Lazyload).use(List).use(Field).use(NavBar).use(tab).use(tabs)

Vue.config.productionTip = false
Vue.filter('moneyFilter', toMoney)//价格过滤器
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
