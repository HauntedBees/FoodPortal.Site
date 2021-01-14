import Vue from 'vue'
import App from './App.vue'
import router from 'src/views/views.module';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import "src/components/components.module";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(advancedFormat);
Object.defineProperty(Vue.prototype, "$dayjs", { value: (val: string) => dayjs.utc(val).local() });
Object.defineProperty(Vue.prototype, "$formatdate", { value: (val: string) => dayjs(val).format("D MMMM, YYYY") });

Object.defineProperty(Vue.prototype, "$filters", { value: {
	titlecase(str:string) { return str.split(" ").map(w => w[0].toLocaleUpperCase() + w.slice(1)).join(" "); },
	percent(num:number) { return isNaN(num) ? "N/A%" : (num * 100).toFixed(0) + "%"; }
} });
Vue.config.productionTip = false;
new Vue({
	router,
	vuetify,
	i18n,
	render: h => h(App)
}).$mount('#app');