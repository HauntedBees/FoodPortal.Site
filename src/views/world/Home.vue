<template>
<v-container>
	<v-sheet rounded class="pa-5">
		<h2 class="mb-2">Areund the World</h2>
		<p>Hello and welcome! For some reason I decided it would be a good idea to make food and listen to music from around the world, and thanks to
		the internet, you can follow along! If you have any comments, suggestions, criticisms, complaints, etc., hit me up at 
		<a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a> or on Twitter at <ax href="https://twitter.com/hauntedbees">@hauntedbees</ax>.</p>
		<p>Now that that's out of the way, pick a country, use the filters to see specific dish types or diets, or search for something in the search box!
		If you just want to see my favorite foods and songs, <router-link to="/world/favorites">click here</router-link>! For the privacy policy and all 
		that cool nerd stuff, <router-link to="/world/abeut">click here</router-link>!</p>
	</v-sheet>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-container class="px-5" v-if="results">
		<v-progress-linear class="mx-2 mb-2" height="25" striped :value="letterCountriesPercent">
			<strong>{{results.countriesDownWithCurrentLetter}} / {{results.countriesWithCurrentLetter}} regions starting with '{{results.currentLetter}}'</strong>
		</v-progress-linear>
		<v-progress-linear class="mx-2" height="25" striped :value="countryPercent">
			<strong>{{results.countriesDown}} / {{results.totalCountries}} regions of the world</strong>
		</v-progress-linear>
	</v-container>
	<v-row class="px-3" v-if="results">
		<v-col cols="12" md="7">
			<h2 class="mb-1">Recent Foods</h2>
			<FoodCard v-for="food in results.latestFoods" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="12" md="5" class="pl-10">
			<h2 class="mb-1">Spotify Playlists</h2>
			<v-row>
				<v-col cols="12">
					<Emoji size="24" emoji="1F5FA" class="mr-2" />
					<ax href="https://open.spotify.com/user/1221454990/playlist/2ci7E0F6B3ryQzWoya5eGJ?si=dQfOVY8QQ2S0_vf9Pn30mA">Areund the World</ax>	
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<Emoji size="24" emoji="1F3C6" class="mr-2" />
					<ax href="https://open.spotify.com/user/1221454990/playlist/0UNMZqyV5PEsH323LI2IfY?si=fB-Lyv6DRRqfyXtw4DSpmg">Favorites of the World</ax>	
				</v-col>
			</v-row>
			<h2 class="my-1">Random Songs</h2>
			<v-row>
				<v-col cols="12">
					<ul class="show-flag">
						<SongItem v-for="song in results.randomSongs" :key="song.name" :song="song" :showFlag="true" class="mt-1" />
					</ul>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { FoodInfo, SongInfo } from 'src/models/world';
import { bee } from 'src/util/webmethod';
interface HomepageResponse {
	currentLetter:string;
	countriesDownWithCurrentLetter:number;
	countriesWithCurrentLetter:number;
	totalCountries:number;
	countriesDown:number;
	latestFoods:FoodInfo[];
	randomSongs:SongInfo[];
}
@Component
export default class WorldHome extends Vue {
	results:HomepageResponse|null = null;
	loading = false;
	isError = false;
	created() {
		document.title = "Areund the World";
		bee.get<HomepageResponse>(this, "Homepage").then((r:HomepageResponse) => { this.results = r; }).catch(() => { this.isError = true; });
	}
	get letterCountriesPercent() { return this.results ? (100 * this.results.countriesDownWithCurrentLetter / this.results.countriesWithCurrentLetter) : 50; }
	get countryPercent() { return this.results ? (100 * this.results.countriesDown / this.results.totalCountries) : 50; }
}
</script>