<template>
<v-container>
	<v-sheet rounded class="pa-5">
        <h1 class="mb-1"><span :class="'flag-icon flag-icon-' + countryCode.toLowerCase()" /> {{country.name}}</h1> <!-- TODO: databee icon -->
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
							<router-link v-if="LinkedCountries[n]" class="hide-link" :to="'/world/' + n">{{LinkedCountries[n].name}}</router-link>
							<span v-if="!LinkedCountries[n]">{{UnlinkedCountries[n]}}</span>
						</span>
					</span>
				</div>
			</v-col>
		</v-row>
	</v-sheet>
	<v-row class="px-3">
		<v-col cols="12" md="8">
			<h2><ax class="hide-link" :href="country.foodURL">Food</ax></h2>
			<FoodCard v-for="food in country.food" :key="food.name" :food="food" />
		</v-col>
		<v-col cols="12" md="4">
			<h2><ax class="hide-link" :href="country.musicURL">Music</ax></h2>
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
    country!:CountryDetails;
	LinkedCountries = Data;
	UnlinkedCountries = OtherCountries;
	created() {
		const id = this.$route.params.id;
		const f = Data[id];
		if(f !== undefined) {
			document.title = f.name + " - Areund the World";
			this.country = f;
			this.countryCode = id;
		}
	}

	get countryIndependence() {
		if(this.country.independence.match(/^[0-9]/) === null) {
			return this.country.independence;
		} else {
			return dayjs(this.country.independence).local().format("D MMMM, YYYY");
		}
	}
}
</script>