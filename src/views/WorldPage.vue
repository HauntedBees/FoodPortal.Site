<template>
<v-container>
	<v-row>
		<SideTopPanel>
			<template #top>
				<WorldMap :data="Data" :focus="mapid" :realid="$route.params.id" />
				<v-divider/>
			</template>
            <template #header>Countries</template>
			<template #content>
				<v-tabs centered v-model="tab" show-arrows>
					<v-tabs-slider />
					<v-tab class="px-0 mx-0" v-for="value in CountryLetters" :key="value.letter">
						{{value.letter}}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-list ref="activetab" dense shaped style="max-height: 400px; overflow-y: scroll">
						<v-list-item v-for="country in CountryLetters[tab].info" :key="country.code" :id="'li-' + country.code">
							<router-link :to="'/world/' + country.code">
								<span :class="'mr-2 flag-icon flag-icon-' + country.code.toLowerCase()" />{{country.name}}
							</router-link>
						</v-list-item>
					</v-list>
				</v-tabs-items>
			</template>
            <template #headerb>
				Ingredients 
				<v-chip class="ml-1" x-small v-if="dietfilters.length" @click="ResetDietFilter()">
					{{dietfilters.length}}
					<v-icon class="ml-2" x-small>mdi-close</v-icon>
				</v-chip>
			</template>
			<template #contentb>
				<v-row class="px-2 pr-3 mb-0">
					<v-col cols="12" md="6" class="pa-2" v-for="diet in DietaryRestrictions" :key="diet.name">
						<v-chip style="width:100%" @click="ToggleFilter(diet)">
							<v-icon small left>mdi-{{GetIcon(diet)}}</v-icon>
							<Emoji :emoji="diet.emoji" size="16" class="mr-1" /> {{diet.name}}
						</v-chip>
					</v-col>
				</v-row>
			</template>
            <template #headerc>
				Dishes 
				<v-chip class="ml-1" x-small v-if="dishfilters.length" @click="ResetDishFilter()">
					{{dishfilters.length}}
					<v-icon class="ml-2" x-small>mdi-close</v-icon>
				</v-chip>
			</template>
			<template #contentc>
				<v-row class="px-2 pr-3 mb-0">
					<v-col cols="12" md="6" class="pa-2" v-for="dish in DishTypes" :key="dish.name">
						<v-chip style="width:100%" @click="ToggleFilter(dish)">
							<v-icon small left>mdi-{{GetIcon(dish)}}</v-icon>
							<Emoji :emoji="dish.emoji" size="16" class="mr-1" /> {{dish.name}}
						</v-chip>
					</v-col>
				</v-row>
			</template>
		</SideTopPanel>
		<v-col cols="12" md="10">
			<WorldFilter v-if="dishfilters.length > 0 || dietfilters.length > 0" :dishfilters="dishfilters" :dietfilters="dietfilters" />
			<router-view v-if="dishfilters.length === 0 && dietfilters.length === 0" />
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import Data, { CountryLetters, DietaryRestrictions, DishTypes, FilterInfo } from 'src/assets/world_data';
import { Vue, Component } from 'vue-property-decorator';
import WorldFilter from "src/views/world/Filter.vue";
@Component({ components: { WorldFilter } })
export default class WorldPage extends Vue {
	tab = 0;
	Data = Data;
	CountryLetters = CountryLetters;
	DietaryRestrictions:FilterInfo[] = [];
	DishTypes:FilterInfo[] = [];
	dishfilters:FilterInfo[] = [];
	dietfilters:FilterInfo[] = [];
	$refs!:{ activetab:Vue };
	created() {
		const id = this.$route.params.id;
		if(id === "" || id === undefined) {
			this.tab = this.CountryLetters.length - 1;
		} else {
			const country = Data[id];
			if(country) {
				const firstLetter = country.realFirstLetter || country.name[0];
				this.tab = firstLetter.charCodeAt(0) - 65;
			} else {
				this.tab = this.CountryLetters.length - 1;
			}
		}
		for(const key in DietaryRestrictions) {
			this.DietaryRestrictions.push({ 
				name: key,
				emoji: DietaryRestrictions[key],
				status: 0
			});
		}
		for(const key in DishTypes) {
			this.DishTypes.push({ 
				name: key,
				emoji: DishTypes[key],
				status: 0
			});
		}
	}
	mounted() {
		const id = this.$route.params.id;
		if(id !== undefined && id !== "") {
			const el = document.getElementById("li-" + id);
			if(!el) { return; }
			const top = el.offsetTop;
			if(top > this.$refs.activetab.$el.clientHeight) {
				this.$refs.activetab.$el.scrollTo(0, top);
			}
		}
	}
	get mapid() {
		const id = this.$route.params.id;
		if(!id) { return ""; }
		if(!Data[id]) { return ""; }
		return Data[id].focusArea || id;
	}
	GetIcon(filter:FilterInfo) {
		switch(filter.status) {
			case 1: return "checkbox-marked-circle";
			case -1: return "close-circle";
			default: return "circle-off-outline";
		}
	}
	ToggleFilter(filter:FilterInfo) {
		switch(filter.status) {
			case 1: filter.status = -1; break;
			case -1: filter.status = 0; break;
			default: filter.status = 1; break;
		}
		this.dietfilters = this.DietaryRestrictions.filter(f => f.status !== 0);
		this.dishfilters = this.DishTypes.filter(f => f.status !== 0);
	}
	ResetDietFilter() {
		this.DietaryRestrictions.forEach(d => { d.status = 0; });
		this.dietfilters = [];
	}
	ResetDishFilter() {
		this.DishTypes.forEach(d => { d.status = 0; });
		this.dishfilters = [];
	}
}
</script>