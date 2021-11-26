<template>
<v-container>
	<v-row>
		<v-col v-if="loading || isError">
			<v-sheet v-if="loading"><Loader/></v-sheet>
			<ErrorMessage v-if="isError"/>
		</v-col>
		<SideTopPanel v-if="CountryLetters.length">
			<template #top>
				<WorldMap :data="Countries" :key="mapid" :focus="mapid" :realid="$route.params.id" />
				<v-divider/>
			</template>
            <template #header>Countries</template>
			<template #content>
				<v-tabs centered v-model="tab" show-arrows>
					<v-tabs-slider/>
					<v-tab class="px-0 mx-0" v-for="value in CountryLetters" :key="value.letter">
						{{value.letter}}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-list ref="activetab" dense shaped style="max-height: 400px; overflow-y: scroll">
						<v-list-item v-for="country in CountryLetters[tab].info" :key="country.ckey" :id="'li-' + country.ckey">
							<router-link :to="'/world/' + country.ckey">
								<span :class="'mr-2 flag-icon flag-icon-' + country.ckey.toLowerCase()" />{{country.name}}
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
		<v-col cols="12" md="9" xl="10" v-if="CountryLetters.length">
			<WorldFilter v-if="dishfilters.length > 0 || dietfilters.length > 0" :dishfilters="dishfilters" :dietfilters="dietfilters" />
			<keep-alive>
				<router-view :key="$route.fullPath" v-if="dishfilters.length === 0 && dietfilters.length === 0" />
			</keep-alive>
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { FilterInfo, CountryLetterInfo } from 'src/models/world';
import { bee } from 'src/util/webmethod';
import { Vue, Component } from 'vue-property-decorator';
import WorldFilter from "src/views/world/Filter.vue";
interface EmojiSet { name:string; emoji: string }
interface CountryLetter { letter:string; info:CountryLetterInfo[] }
interface HomepageResponse {
	countries:CountryLetterInfo[];
	letters:string[];
	diets:EmojiSet[];
	dishes:EmojiSet[];
}
@Component({ components: { WorldFilter } })
export default class WorldPage extends Vue {
	tab = 0;
	loading = true;
	isError = false;
	Countries:{[key:string]: CountryLetterInfo} = {};
	CountryLetters:CountryLetter[] = [];
	DietaryRestrictions:FilterInfo[] = [];
	DishTypes:FilterInfo[] = [];
	dishfilters:FilterInfo[] = [];
	dietfilters:FilterInfo[] = [];
	$refs!:{ activetab:Vue };
	created() {
		bee.get<HomepageResponse>(this, "Metadata").then((r:HomepageResponse) => {
			r.countries.forEach(c => { this.Countries[c.ckey] = c; });
			this.CountryLetters = r.letters.map(c => ({
				letter: c,
				info: r.countries.filter(cn => cn.firstLetter === c)
			}));
			this.DietaryRestrictions = r.diets.map(d => ({
				name: d.name,
				emoji: d.emoji,
				status: 0
			}));
			this.DishTypes = r.dishes.map(d => ({
				name: d.name,
				emoji: d.emoji,
				status: 0
			}));

			const id = this.$route.params.id;
			if(id === "" || id === undefined) {
				this.tab = this.CountryLetters.length - 1;
			} else {
				const country = r.countries.filter(c => c.ckey === id)[0];
				if(country) {
					const firstLetter = country.firstLetter || country.name[0];
					this.tab = firstLetter.charCodeAt(0) - 65;
				} else {
					this.tab = this.CountryLetters.length - 1;
				}
				setTimeout(() => {
					const el = document.getElementById("li-" + id);
					if(!el) { return; }
					const top = el.offsetTop;
					if(top > this.$refs.activetab.$el.clientHeight) {
						this.$refs.activetab.$el.scrollTo(0, top);
					}
				}, 100);
			}
		}).catch(() => { this.isError = true; });
	}
	get mapid() {
		const id = this.$route.params.id;
		if(!id) { return ""; }
		if(!this.Countries[id]) { return ""; }
		return this.Countries[id].focusArea || id;
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