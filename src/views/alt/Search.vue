<template>
<v-container>
	<v-row class="px-3">
		<v-col cols="12">
			<h2 class="mb-1">Search Results for "{{query}}"</h2>
			<AltFoodCard v-for="food in matchingFoods" :key="food.name" :food="food" />
			<div v-if="matchingFoods.length === 0" class="ma-4">
				Sorry, nothing matches that search query. You can search for a brand name or a product name, and
				that's pretty much it. Try one of those, or just choose a category from the menu.
			</div>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Food, { Product } from 'src/assets/vegan_data';
@Component
export default class AltSearch extends Vue {
    query = "";
	created() {
		this.query = this.$route.params.query || "";
        document.title = `Search Results for "${this.query}" - Alt. Food Reviews`;
        if(this.query === "") { this.$router.push("/vegan/"); }
	}
    get matchingFoods() {
        const q = this.query.toLowerCase();
        const res:Product[] = [];
        for(const key in Food) {
            const foods = Food[key];
            res.push(...foods.filter(f => f.brand.toLowerCase().indexOf(q) >= 0 || f.item.toLowerCase().indexOf(q) >= 0));
        }
        return res;
    }
}
</script>