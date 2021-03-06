import Vue from 'vue';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';
import VueRouter from 'vue-router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	router,
	vuetify: new Vuetify({
		theme: {
			themes: {
				light: {
					primary: '#6D4C41',
					secondary: '#E28A55',
					accent: '#F3BD8E',
					error: '#f44336',
					warning: '#ff5722',
					info: '#03a9f4',
					success: '#8bc34a'
				}
			}
		},
		icons: {
			iconfont: 'mdi' // default - only for display purposes
		}
	}),
	render: (h): any => h(App)
}).$mount('#app');
