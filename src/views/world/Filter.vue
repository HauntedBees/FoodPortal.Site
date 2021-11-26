<template>
<v-container>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-row v-if="!loading && !isError">
		<h2 class="mb-1">Filtered Foods <span v-if="matchingFoods.length">({{matchingFoods.length}})</span></h2>
		<FoodCard v-for="food in matchingFoods" :key="food.name" :food="food" />
        <div v-if="matchingFoods.length === 0" class="ma-4">
            Sorry, nothing matches those filters. Try removing some to broaden your scope. And don't do something like picking 
            vegan dishes that need to have meat in them. That's not gonna fly.
        </div>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { FilterInfo, FoodInfo } from 'src/models/world';
import { bee } from 'src/util/webmethod';
@Component
export default class WorldFilter extends Vue {
    @Prop() dishfilters!:FilterInfo[];
    @Prop() dietfilters!:FilterInfo[];
    loading = true;
	isError = false;
    matchingFoods:FoodInfo[] = [];
    created() { document.title = `Filtered Results - Areund the World`; this.GetDishes(); }
    @Watch("dishfilters") OnChange() { this.GetDishes(); } // both dishfilters and dietfilters will change on either being toggled 
    async GetDishes() {
        const goodDishes = this.dishfilters.filter(d => d.status > 0).map(d => d.name);
        const badDishes = this.dishfilters.filter(d => d.status < 0).map(d => d.name);
        const goodDiets = this.dietfilters.filter(d => d.status > 0).map(d => d.name);
        const badDiets = this.dietfilters.filter(d => d.status < 0).map(d => d.name);
        try {
            this.isError = false;
            this.matchingFoods = await bee.get<FoodInfo[]>(this, "FilterResults", [goodDiets, badDiets, goodDishes, badDishes]);
        } catch(e) {
            this.isError = true;
        }
    }
}
</script>