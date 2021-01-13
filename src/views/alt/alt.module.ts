import { RouteConfig } from "vue-router";
import AltHome from "src/views/alt/Home.vue";
import AltType from "src/views/alt/Type.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: AltHome },
    { path: "abeut", component: Abeut },
    { path: ":id", component: AltType }
];
export default routes;