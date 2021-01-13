<template>
<v-container>
	<v-row>
		<h2 class="mb-1">Search Results for "{{query}}"</h2>
		<FoodCard v-for="food in matchingFoods" :key="food.name" :food="food" />
        <div v-if="matchingFoods.length === 0" class="ma-4">
            Sorry, nothing matches that search query. You can search for a recipe name or one of its ingredients. This search isn't 
            super fancy; stick with the name of a thing like "bell pepper" or "spaghetti."
        </div>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FoodList } from 'src/assets/world_data';
@Component
export default class WorldSearch extends Vue {
    query = "";
	created() {
		this.query = this.$route.params.query || "";
        document.title = `Search Results for "${this.query}" - Areund the World`;
        if(this.query === "") {
            this.$router.push("/world/");
        }
	}
    get matchingFoods() {
        const q = this.query.toLowerCase();
        return FoodList.filter(f => {
            return f.name.indexOf(q) >= 0 || f.ingredients.some(i => i.indexOf(q) >= 0);
        }).sort((a, b) => a.name.localeCompare(b.name));
    }
}
</script>