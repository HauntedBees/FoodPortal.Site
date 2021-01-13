import Vue from "vue";
import Emoji from "src/components/Emoji.vue";
import SpanTooltip from "src/components/SpanTooltip.vue";
import ExternalLink from "src/components/ExternalLink.vue";

import { SvgMap } from "vue-svg-map";
import WorldMap from "src/components/WorldMap.vue";
import FoodCard from "src/components/FoodCard.vue";
import SongItem from "src/components/SongItem.vue";

import AltFoodCard from "src/components/AltFoodCard.vue";
import SpiceCard from "src/components/SpiceCard.vue";

Vue.component("ax", ExternalLink);
Vue.component("Emoji", Emoji);
Vue.component("spantt", SpanTooltip);

Vue.component("WorldMap", WorldMap);
Vue.component("SvgMap", SvgMap);
Vue.component("FoodCard", FoodCard);
Vue.component("SongItem", SongItem);

Vue.component("AltFoodCard", AltFoodCard);
Vue.component("SpiceCard", SpiceCard);