import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//전역으로 사용할 module은 main.js에서 선언한다.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
