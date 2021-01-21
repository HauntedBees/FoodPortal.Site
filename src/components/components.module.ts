import Vue from "vue";
import { ExternalLink, Emoji, SpanTooltip, ClassDirective } from "bee-vue-gang";
import SideTopPanel from "src/components/SideTopPanel.vue";

import { SvgMap } from "vue-svg-map";
import WorldMap from "src/components/WorldMap.vue";
import FoodCard from "src/components/FoodCard.vue";
import SongItem from "src/components/SongItem.vue";

import AltFoodCard from "src/components/AltFoodCard.vue";
import SpiceCard from "src/components/SpiceCard.vue";

Vue.directive("class", ClassDirective);
Vue.component("ax", ExternalLink);
Vue.component("Emoji", Emoji);
Vue.component("spantt", SpanTooltip);
Vue.component("SideTopPanel", SideTopPanel);

Vue.component("WorldMap", WorldMap);
Vue.component("SvgMap", SvgMap);
Vue.component("FoodCard", FoodCard);
Vue.component("SongItem", SongItem);

Vue.component("AltFoodCard", AltFoodCard);
Vue.component("SpiceCard", SpiceCard);