import { RouteConfig } from "vue-router";
import WorldHome from "src/views/world/Home.vue";
import WorldCountry from "src/views/world/Country.vue";
import WorldFavorites from "src/views/world/Favorites.vue";
import WorldSearch from "src/views/world/Search.vue";
import Abeut from "src/views/Abeut.vue";
const routes:Array<RouteConfig> = [
    { path: "", component: WorldHome },
    { path: "favorites", component: WorldFavorites },
    { path: "abeut", component: Abeut },
    { path: "search/:query", component: WorldSearch },
    { path: ":id", component: WorldCountry }
];
export default routes;