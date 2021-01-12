<template>
<v-container>
	<v-row>
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FilterInfo, FoodList } from 'src/assets/data';
@Component
export default class WorldFilter extends Vue {
    @Prop() dishfilters!:FilterInfo[];
    @Prop() dietfilters!:FilterInfo[];
    get matchingFoods() {
        const goodDishes = this.dishfilters.filter(d => d.status > 0).map(d => d.name);
        const badDishes = this.dishfilters.filter(d => d.status < 0).map(d => d.name);
        const goodDiets = this.dietfilters.filter(d => d.status > 0).map(d => d.name);
        const badDiets = this.dietfilters.filter(d => d.status < 0).map(d => d.name);
        return FoodList.filter(f => {
            if(goodDishes.length > 0 && goodDishes.indexOf(f.type) < 0) { return false; }
            if(badDishes.indexOf(f.type) >= 0) { return false; }
            const dietMatches = [];
            for(let i = 0; i < f.diet.length; i++) {
                const diet = f.diet[i].type;
                if(goodDiets.indexOf(diet) >= 0 && dietMatches.indexOf(diet) < 0) { dietMatches.push(diet); }
                if(badDiets.indexOf(diet) >= 0) { return false; }
            }
            return dietMatches.length === goodDiets.length;
        }).sort((a, b) => a.name.localeCompare(b.name));
    }
}
</script>