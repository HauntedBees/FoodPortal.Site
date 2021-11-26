<template>
<v-container>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-row v-if="!loading && !isError">
        <v-col cols="12">
            <h2 class="mb-1">Search Results for "{{query}}"</h2>
            <FoodCard v-for="food in matchingFoods" :key="food.name" :food="food" />
            <div v-if="matchingFoods.length === 0" class="ma-4">
                Sorry, nothing matches that search query. You can search for a recipe name or one of its ingredients. This search isn't 
                super fancy; stick with the name of a thing like "bell pepper" or "spaghetti."
            </div>
        </v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FoodInfo } from 'src/models/world';
import { bee } from 'src/util/webmethod';
@Component
export default class WorldSearch extends Vue {
    query = "";
    loading = true;
	isError = false;
    matchingFoods:FoodInfo[] = [];
	created() {
		this.query = this.$route.params.query || "";
        document.title = `Search Results for "${this.query}" - Areund the World`;
        if(this.query === "") {
            this.$router.push("/world/");
        } else {
            bee.get<FoodInfo[]>(this, "SearchResults", [this.query]).then(r => { this.matchingFoods = r; }).catch(() => { this.isError = true; });
        }
	}
}
</script>