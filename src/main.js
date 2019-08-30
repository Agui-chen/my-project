import Vue from 'vue';
import App from './App';
// 引入echarts
import echarts from 'echarts';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import store from './vuex/store'
import VueResouce from 'vue-resource'
import 'jquery'
import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI);
Vue.use(router);
Vue.use(VueResouce)
Vue.use(BaiduMap, {
    ak: 'WP8eBlalrFn8dSFy9YUe532xXVj5Xlgb'
})
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});