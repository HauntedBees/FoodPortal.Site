import Vue from "vue";
import { SvgMap } from "vue-svg-map";
import Emoji from "src/components/Emoji.vue";
import SpanTooltip from "src/components/SpanTooltip.vue";
import ExternalLink from "src/components/ExternalLink.vue";
import Component from "src/components/WorldMap.vue";

import FoodCard from "src/components/FoodCard.vue";
import SongItem from "src/components/SongItem.vue";

Vue.component("ax", ExternalLink);
Vue.component("Emoji", Emoji);
Vue.component("spantt", SpanTooltip);

Vue.component("WorldMap", Component);
Vue.component("SvgMap", SvgMap);
Vue.component("FoodCard", FoodCard);
Vue.component("SongItem", SongItem);