// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

//按需引入
import {Button,Row,Col,Swipe,SwipeItem,Lazyload} from 'vant';
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
