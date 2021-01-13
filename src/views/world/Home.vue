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
	<v-container class="px-5">
		<v-progress-linear class="mx-2 mb-2" height="25" striped :value="letterCountriesPercent">
			<strong>{{letterCountriesDown}} / {{countriesWithCurrentLetter}} regions starting with '{{currentLetter}}'</strong>
		</v-progress-linear>
		<v-progress-linear class="mx-2" height="25" striped :value="countryPercent">
			<strong>{{countriesDown}} / 206 regions of the world</strong>
		</v-progress-linear>
	</v-container>
	<v-row class="px-3">
		<v-col cols="7">
			<h2 class="mb-1">Recent Foods</h2>
			<FoodCard v-for="food in recentFoods" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="5" class="pl-10">
			<h2 class="mb-1">Spotify Playlists</h2>
			<v-row>
				<Emoji size="24" emoji="1F5FA" class="mr-2" />
				<ax href="https://open.spotify.com/user/1221454990/playlist/2ci7E0F6B3ryQzWoya5eGJ?si=dQfOVY8QQ2S0_vf9Pn30mA">Areund the World</ax>	
			</v-row>
			<v-row>
				<Emoji size="24" emoji="1F3C6" class="mr-2" />
				<ax href="https://open.spotify.com/user/1221454990/playlist/0UNMZqyV5PEsH323LI2IfY?si=fB-Lyv6DRRqfyXtw4DSpmg">Favorites of the World</ax>	
			</v-row>
			<h2 class="my-1">Random Songs</h2>
			<v-row>
				<ul class="show-flag">
					<SongItem v-for="song in randomSongs" :key="song.name" :song="song" :showFlag="true" />
				</ul>
			</v-row>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Data, { CountryLetters, FoodList, SongList } from 'src/assets/world_data';
@Component
export default class WorldHome extends Vue {
	countriesWithCurrentLetter = 10;
	get currentLetter() { return CountryLetters[CountryLetters.length - 1].letter; }
	get letterCountriesDown() { return CountryLetters[CountryLetters.length - 1].info.length; }
	get letterCountriesPercent() { return 100 * CountryLetters[CountryLetters.length - 1].info.length / this.countriesWithCurrentLetter; }
	
	get countriesDown() { return Object.keys(Data).length; }
	get countryPercent() { return 100 * this.countriesDown / 206; }

	get recentFoods() { 
		const res = [];
		for(let i = FoodList.length - 1; i >= (FoodList.length - 3); i--) {
			res.push(FoodList[i]);
		}
		return res;
	}
	get randomSongs() {
		const res = [], songs = [...SongList];
		for(let i = 0; i < 19; i++) {
			res.push(...songs.splice(Math.floor(Math.random()*songs.length), 1));
		}
		return res;
	}
}
</script>