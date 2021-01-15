import { RouteConfig } from "vue-router";
import AltHome from "src/views/alt/Home.vue";
import AltSearch from "src/views/alt/Search.vue";
import AltType from "src/views/alt/Type.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: AltHome },
    { path: "abeut", component: Abeut },
    { path: "q/:query", component: AltSearch },
    { path: "q", redirect: "/vegan" },
    { path: ":id", component: AltType }
];
export default routes;