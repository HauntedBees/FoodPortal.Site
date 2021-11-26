<template>
<v-container>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-row class="px-3" v-if="!loading && !isError">
		<v-col cols="12" md="7">
			<h2>Favorite Foods</h2>
			<FoodCard v-for="food in favoriteFoods" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="12" md="5" class="pl-10">
			<h2>Favorite Songs</h2>
			<ul class="show-flag">
				<SongItem v-for="song in favoriteSongs" :key="song.name" :song="song" :showFlag="true" />
			</ul>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FoodInfo, SongInfo } from 'src/models/world';
import { bee } from 'src/util/webmethod';
interface FavResponse {
	food:FoodInfo[];
	music:SongInfo[];
}
@Component
export default class WorldFavorites extends Vue {
	favoriteFoods:FoodInfo[] = [];
	favoriteSongs:SongInfo[] = [];
	isError = false;
	loading = false;
	created() {
		bee.get<FavResponse>(this, "Favorites").then(r => {
			this.favoriteFoods = r.food;
			this.favoriteSongs = r.music;
		}).catch(() => { this.isError = true; });
	}
}
</script>