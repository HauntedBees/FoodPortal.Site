import Vue from 'vue'
import App from './App.vue'
import router from 'src/views/views.module';
import vuetify from './plugins/vuetify';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'hammerjs';
import 'src/components/components.module';
dayjs.extend(utc);
Object.defineProperty(Vue.prototype, "$formatdate", { value: (val: string) => dayjs(val).format("D MMMM, YYYY") });
Object.defineProperty(Vue.prototype, "$rootpath", { value: process.env.BASE_URL });

Object.defineProperty(Vue.prototype, "$filters", { value: {
	titlecase(str:string) { return str.split(" ").map(w => w[0].toLocaleUpperCase() + w.slice(1)).join(" "); },
	percent(num:number) { return isNaN(num) ? "N/A%" : (num * 100).toFixed(0) + "%"; }
} });
Vue.config.productionTip = false;
new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');