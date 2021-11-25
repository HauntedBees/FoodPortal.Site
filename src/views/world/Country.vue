<template>
<v-container>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-sheet rounded class="pa-5" v-if="!loading && !country && !isError">
        <h1 class="mb-1">I don't know what that is.</h1>
		<p>
			I don't know what you were trying to see, but we don't have a page for that. Try picking one of the regions we've made 
			food and listened to music from! Or filter on dish types or dietary restrictions! Or just search for something in the 
			search box up there! But don't do this, because I don't know what "{{$route.params.id}}" is (yet?), so I can't give you a page for it.
		</p>
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="!loading && country">
        <h1 class="mb-1"><span :class="'flag-icon flag-icon-' + countryCode.toLowerCase()" /> {{country.name}}
			<ax v-if="country.food.some(f => f.databee)" class="ml-3" :href="DataBeeURL">
				<spantt tooltip="View this country's recipes in DataBee format"><Emoji emoji="1F41D" size="16"/></spantt>
			</ax>
		</h1>
		<p class="no-big-em" v-html="country.description"></p>
		<v-row>
			<v-col cols="12" md="6">
				<div><strong>Population</strong>: <spantt :tooltip="'est. ' + country.popEstimate">{{country.population.toLocaleString()}}</spantt></div>
				<div><strong>Area</strong>: {{country.area.toLocaleString()}}km&sup2;</div>
				<div v-if="!country.indFrom"><strong>Independence</strong>: {{country.independence}}</div>
				<div v-if="country.indFrom"><strong>Independence (from {{country.indFrom}})</strong>: {{countryIndependence}}</div>
				<div><strong>Motto</strong>: {{country.motto || "N/A"}}</div>
			</v-col>
			<v-col cols="12" md="6">
				<div><strong>Demonym</strong>: {{country.demonym}}</div>
				<div><strong>Currency</strong>: {{country.currency}}</div>
				<div><strong>Languages</strong>: {{country.languages}}</div>
				<div><strong>Neighbors</strong>:
					<span class="comma-list">
						<span v-for="n in country.neighbors" :key="n.realCountryCode">
							<router-link v-if="n.realCountryCode" :to="'/world/' + n.realCountryCode">{{n.realCountryName}}</router-link>
							<span v-if="n.shellCountryName">{{n.shellCountryName}}</span>
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
			<ul><SongItem v-for="song in country.music" :key="song.name" :song="song" /></ul>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { CountryDetails } from 'src/assets/world_data';
import dayjs from 'dayjs';
import { bee } from '../../util/webmethod';
@Component
export default class WorldCountry extends Vue {
    loading = false;
	isError = false;
	countryCode!:string;
    country?:CountryDetails|null = null;
	created() {
		const id = this.$route.params.id;
		bee.get<CountryDetails>(this, "Country", [id]).then(r => {
			document.title = `${r.name} - Areund the World`;
			this.countryCode = id;
			this.country = r;
		}).catch((e:Error) => {
			if(e.message !== "Country not found.") {
				this.isError = true;
			}
		});
	}
	get countryIndependence() {
		if(!this.country) { return ""; }
		if(this.country.independence.match(/^[0-9]/) === null) {
			return this.country.independence;
		} else {
			return dayjs(this.country.independence).local().format("D MMMM, YYYY");
		}
	}
	get DataBeeURL() { return `https://www.hauntedbees.com/API/General/Recipe/["${this.countryCode.toLowerCase()}"]`; }
}
</script>