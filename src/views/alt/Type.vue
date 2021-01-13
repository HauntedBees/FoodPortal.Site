<template>
<v-container>
	<v-sheet rounded class="pa-5" v-if="category">
        <h1 class="mb-1"><Emoji :emoji="category.emoji" size="24" class="mr-2" /> {{category.name}} Alternatives</h1>
		<p class="no-big-em" v-html="category.desc"></p>
		<AltFoodCard v-for="food in foods" :key="food.name" :food="food" />
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="!category">
		<h1 class="mb-1">I don't know what that is.</h1>
		<p>
			I don't know what you were trying to see, but we don't have a page for that. Click one of the categories to see products
			that match, or click the title at the top of the page to go back to the home page. I don't know what "{{$route.params.id}}"
			is, so I can't give you a page for that.
		</p>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Food, { Product, FoodCategories, FoodCategory } from 'src/assets/vegan_data';
@Component
export default class AltType extends Vue {
	category:FoodCategory|null = null;
	foods?:Product[];
	created() {
		const id = this.$route.params.id;
		const f = FoodCategories.filter(c => c.id === id)[0];
		if(f !== undefined) {
			document.title = f.name + "Alternatives - Alt. Food";
			this.category = f;
			this.foods = Food[id];
			this.foods.sort((a, b) => (b.rating - a.rating));
		}
	}
}
</script>