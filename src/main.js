import Vue from 'vue'
import Sweetalert from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Sweetalert);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
