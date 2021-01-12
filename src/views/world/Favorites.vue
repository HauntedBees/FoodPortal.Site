<template>
<v-container>
	<v-row class="px-3">
		<v-col cols="7">
			<h2 class="mb-1">Favorite Foods</h2>
			<FoodCard v-for="food in favoriteFoods" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="5" class="pl-10">
			<h2 class="mb-1">Favorite Songs</h2>
			<v-row>
				<ul class="show-flag">
					<SongItem v-for="song in favoriteSongs" :key="song.name" :song="song" :showFlag="true" />
				</ul>
			</v-row>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FoodList, SongList } from 'src/assets/data';
@Component
export default class WorldFavorites extends Vue {
	get favoriteFoods() { return FoodList.filter(f => f.favorite).sort((a, b) => a.name.localeCompare(b.name)); }
	get favoriteSongs() { return SongList.filter(f => f.favorite); }
}
</script>