import { RouteConfig } from "vue-router";
import SpiceHome from "src/views/spice/Home.vue";
import SpicePage from "src/views/spice/SpicePage.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: SpiceHome },
    { path: "abeut", component: Abeut },
    { path: ":id", component: SpicePage }
];
export default routes;