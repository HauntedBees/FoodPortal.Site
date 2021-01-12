<template>
<v-container>
	<v-row>
		<v-col cols="12" md="2">
			<v-sheet class="pa-1" shaped>
				<WorldMap :data="Data" :focus="mapid" :realid="$route.params.id" />
				<v-divider/>
				<h4 class="pa-2">Countries</h4>
				<v-tabs centered v-model="tab" show-arrows>
					<v-tabs-slider />
					<v-tab class="px-0 mx-0" v-for="value in CountryLetters" :key="value.letter">
						{{value.letter}}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-list dense shaped style="max-height: 400px; overflow-y: scroll">
						<v-list-item v-for="country in CountryLetters[tab].info" :key="country.code">
							<router-link class="hide-link" :to="'/world/' + country.code">
								<span :class="'mr-2 flag-icon flag-icon-' + country.code.toLowerCase()" />{{country.name}}
							</router-link>
						</v-list-item>
					</v-list>
				</v-tabs-items>
				<h4 class="pa-2">Ingredients</h4>
				<v-chip-group column multiple>
					<v-chip small v-for="(value, key) in DietaryRestrictions" :key="key">
						<Emoji :emoji="value" size="16" class="mr-1" /> {{key}}
					</v-chip>
				</v-chip-group>
				<h4 class="pa-2">Dishes</h4>
				<v-chip-group column multiple>
					<v-chip small v-for="(value, key) in DishTypes" :key="key">
						<Emoji :emoji="value" size="16" class="mr-1" /> {{key}}
					</v-chip>
				</v-chip-group>
			</v-sheet>
		</v-col>
		<v-col cols="12" md="10">
			<router-view></router-view>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import Data, { CountryLetters, DietaryRestrictions, DishTypes } from 'src/assets/data';
import { Vue, Component } from 'vue-property-decorator';
import Home from 'src/views/world/Home.vue';
import Country from 'src/views/world/Country.vue';
@Component({ components: { Home, Country } })
export default class WorldPage extends Vue {
	tab = 0;
	Data = Data;
	CountryLetters = CountryLetters;
	DietaryRestrictions = DietaryRestrictions;
	DishTypes = DishTypes;
	created() {
		const id = this.$route.params.id;
		if(id === "" || id === undefined) {
			this.tab = this.CountryLetters.length - 1;
		} else {
			const country = Data[id];
			const firstLetter = country.realFirstLetter || country.name[0];
			this.tab = firstLetter.charCodeAt(0) - 65;
		}
	}
	get mapid() {
		const id = this.$route.params.id;
		if(!id) { return ""; }
		return Data[id].focusArea || id;
	}
}
</script>