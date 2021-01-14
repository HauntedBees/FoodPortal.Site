<template>
<v-container>
	<v-row>
		<v-col cols="12" md="2">
			<v-sheet class="pa-1 pb-3" shaped>
				<h4 class="pa-2 pl-4">Herbs</h4>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in herbs" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
				<h4 class="pa-2 pl-4">Spices</h4>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in spices" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
				<h4 class="pa-2 pl-4">Spice Blends</h4>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in blends" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
			</v-sheet>
		</v-col>
		<v-col cols="12" md="10">
			<router-view />
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { FoodCategories } from 'src/assets/vegan_data';
import { Vue, Component } from 'vue-property-decorator';
import Spices, { Spice } from 'src/assets/spice_data';
@Component
export default class SpicePage extends Vue {
    FoodCategories = FoodCategories;
	herbs:Spice[] = [];
	spices:Spice[] = [];
	blends:Spice[] = [];
    get activeRoute() {
        const params = this.$router.currentRoute.params;
        if(!params) { return ""; }
        return params.id;
    }
    created() {
		const sortedSpices = [...Spices];
		sortedSpices.sort((a, b) => a.name.localeCompare(b.name));
		for(let i = 0; i < sortedSpices.length; i++) {
			const s = sortedSpices[i];
			switch(s.type) {
				case 0: this.herbs.push(s); break;
				case 1: this.spices.push(s); break;
				case 2: this.blends.push(s); break;
			}
		}
    }
}
</script>