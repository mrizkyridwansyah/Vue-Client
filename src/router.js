import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: '/user',
			name: 'user',
			component: () => import('./components/user/Index')			
		},
		{
			path: '/adduser',
			name: 'user-add',
			component: () => import('./components/user/Add')			
		},
		{
			path: '/detail/:id',
			name: 'user-detail',
			component: () => import('./components/user/Show')			
		}
	]
});