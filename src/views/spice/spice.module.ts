import { RouteConfig } from "vue-router";
import SpiceHome from "src/views/spice/Home.vue";
import SpicePage from "src/views/spice/SpicePage.vue";
import SpiceSearch from "src/views/spice/Search.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: SpiceHome },
    { path: "abeut", component: Abeut },
    { path: "q/:query", component: SpiceSearch },
    { path: "q", redirect: "/spice" },
    { path: ":id", component: SpicePage }
];
export default routes;