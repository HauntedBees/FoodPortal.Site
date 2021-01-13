import { RouteConfig } from "vue-router";
import SpiceHome from "src/views/spice/Home.vue";
import Spice from "src/views/spice/Spice.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: SpiceHome },
    { path: "abeut", component: Abeut },
    { path: ":id", component: Spice }
];
export default routes;