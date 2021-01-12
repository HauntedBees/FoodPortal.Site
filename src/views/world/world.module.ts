import { RouteConfig } from "vue-router";
import WorldHome from "src/views/world/Home.vue";
import WorldCountry from "src/views/world/Country.vue";
import WorldFavorites from "src/views/world/Favorites.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: WorldHome },
    { path: "favorites", component: WorldFavorites },
    { path: ":id", component: WorldCountry }
];
export default routes;