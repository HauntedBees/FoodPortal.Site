<template>
<v-container>
	<v-sheet rounded class="pa-5" v-if="!country && UnlinkedCountries[$route.params.id]">
        <h1 class="mb-1"><span :class="'flag-icon flag-icon-' + $route.params.id.toLowerCase()" /> {{UnlinkedCountries[$route.params.id]}}</h1>
		<p>
			We haven't reached this region yet. We'll get to it eventually! Until then, check out one of the other places we HAVE reached and
			check out their excellent food and music!
		</p>
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="!country && !UnlinkedCountries[$route.params.id]">
        <h1 class="mb-1">I don't know what that is.</h1>
		<p>
			I don't know what you were trying to see, but we don't have a page for that. Try picking one of the regions we've made 
			food and listened to music from! Or filter on dish types or dietary restrictions! Or just search for something in the 
			search box up there! But don't do this, because I don't know what "{{$route.params.id}}" is, so I can't give you a page for it.
		</p>
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="country">
        <h1 class="mb-1"><span :class="'flag-icon flag-icon-' + countryCode.toLowerCase()" /> {{country.name}}</h1>
		<p class="no-big-em" v-html="country.desc"></p>
		<v-row>
			<v-col cols="12" md="6">
				<div><strong>Population</strong>: <spantt :tooltip="'est. ' + country.popEstimate">{{country.population.toLocaleString()}}</spantt></div>
				<div><strong>Area</strong>: {{country.area.toLocaleString()}}km&sup2;</div>
				<div v-if="country.indFrom==='X'"><strong>Independence</strong>: {{country.independence}}</div>
				<div v-if="country.indFrom!=='X'"><strong>Independence (from {{country.indFrom}})</strong>: {{countryIndependence}}</div>
				<div><strong>Motto</strong>: {{country.motto}}</div>
			</v-col>
			<v-col cols="12" md="6">
				<div><strong>Demonym</strong>: {{country.demonym}}</div>
				<div><strong>Currency</strong>: {{country.currency}}</div>
				<div><strong>Languages</strong>:
					<span class="comma-list">
						<span v-for="l in country.languages" :key="l">{{l}}</span>
					</span>
				</div>
				<div><strong>Neighbors</strong>:
					<span class="comma-list">
						<span v-for="n in country.neighbors" :key="n">
							<router-link v-if="LinkedCountries[n]" :to="'/world/' + n">{{LinkedCountries[n].name}}</router-link>
							<span v-if="!LinkedCountries[n]">{{UnlinkedCountries[n]}}</span>
						</span>
					</span>
				</div>
			</v-col>
		</v-row>
	</v-sheet>
	<v-row class="px-3" v-if="country">
		<v-col cols="12" md="8">
			<h2><ax :href="country.foodURL">Food</ax></h2>
			<FoodCard v-for="food in country.food" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="12" md="4">
			<h2><ax :href="country.musicURL">Music</ax></h2>
			<ul>
				<SongItem v-for="song in country.music" :key="song.name" :song="song" />
			</ul>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Data, { CountryDetails, OtherCountries } from 'src/assets/world_data';
import dayjs from 'dayjs';
@Component
export default class WorldCountry extends Vue {
    countryCode!:string;
    country?:CountryDetails|null = null;
	LinkedCountries = Data;
	UnlinkedCountries = OtherCountries;
	created() {
		const id = this.$route.params.id;
		const f = Data[id];
		if(f !== undefined) {
			document.title = f.name + " - Areund the World";
			this.country = f;
			this.countryCode = id;
		} else {
			document.title = "Unavailable Region - Areund the World";
		}
	}

	get countryIndependence() {
		if(!this.country) { return ""; }
		if(this.country.independence.match(/^[0-9]/) === null) {
			return this.country.independence;
		} else {
			return dayjs(this.country.independence).local().format("D MMMM, YYYY");
		}
	}
}
</script>