import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/css/swiper.css';

import router from "@/router";
import axios from "@/axios";

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);

new Vue({
    render: h => h(App),
    router,
    axios
}).$mount('#app')