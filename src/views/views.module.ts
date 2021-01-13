import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WorldPage from "src/views/WorldPage.vue";
import AltPage from "src/views/AltPage.vue";
import WorldRoutes from "src/views/world/world.module";
import AltRoutes from "src/views/alt/alt.module";
Vue.use(VueRouter);
const routes:Array<RouteConfig> = [
    { path: "/world", component: WorldPage, meta: { title: "Areund the World" }, children: WorldRoutes },
    { path: "/vegan", component: AltPage, meta: { title: "Alt. Food Reviews" }, children: AltRoutes }
];
const router = new VueRouter({ mode: "history", base: process.env.BASE_URL, routes, scrollBehavior() { return { x: 0, y: 0 }; } });
router.afterEach(to => {
    Vue.nextTick(() => {
        if(to.meta.title) { document.title = to.meta.title; }
    });
});
export default router;