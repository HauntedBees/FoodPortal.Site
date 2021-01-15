<template>
<v-container>
	<v-row>
        <SideTopPanel>
            <template #header>Herbs</template>
            <template #content>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in herbs" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
            </template>
            <template #headerb>Spices</template>
            <template #contentb>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in spices" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
            </template>
            <template #headerc>Blends</template>
            <template #contentc>
                <div :class="'px-5 pb-1' + (activeRoute === s.id ? ' active' : '')" v-for="s in blends" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
            </template>
        </SideTopPanel>
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