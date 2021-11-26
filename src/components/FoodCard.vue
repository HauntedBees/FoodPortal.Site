<template>
<v-card :class="'mb-5 mt-3 food-card type-' + food.dish.toLowerCase()">
	<v-row class="d-flex flex-no-wrap justify-space-between">
		<v-col cols="12" md="2">
			<img class="px-2 mx-0 my-0 px-md-0 mx-md-4 my-md-2 rounded-tl-xl rounded-br-xl rounded-tr rounded-bl" :src="`${$rootpath}/img_world/${food.img}`" :alt="food.name">
		</v-col>
		<v-col cols="12" md="10" class="food-card--content">
			<v-card-title class="headline pt-1">
				<spantt :tooltip="food.countryName"><span :class="'mr-1 flag-icon flag-icon-' + food.countryCode.toLowerCase()" /></spantt>
				<spantt v-if="food.favorite" tooltip="Personal Favorite"><Emoji emoji="1F31F" size="24" class="mr-1" /></spantt>
				<spantt :tooltip="food.dish"><Emoji :emoji="food.dishEmoji" size="24" class="mr-2" /></spantt>
				<ax :href="food.url">
					{{food.name}}
					<Emoji emoji="1F517" size="16" />
				</ax>
				<ax v-if="food.databee" class="ml-3" :href="DataBeeURL">
					<spantt tooltip="View the recipe in DataBee format"><Emoji emoji="1F41D" size="16"/></spantt>
				</ax> 
				<v-spacer/>
				<span class="card--date">{{$formatdate(food.date)}}</span>
			</v-card-title>
			<v-card-subtitle>
				<p v-html="food.description"></p>
				<ul class="card--detail-list">
					<li v-for="r in food.diet" :key="r.name">
						<spantt :tooltip="r.name">
							<Emoji :emoji="r.emoji" size="16" v-class.transparent="r.optional" />
						</spantt>
						{{r.description}}
					</li>
				</ul>
			</v-card-subtitle>
		</v-col>
	</v-row>
</v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { FoodInfo } from 'src/models/world';
@Component
export default class FoodCard extends Vue {
    @Prop() food!:FoodInfo;
	get DataBeeURL() { return `https://www.hauntedbees.com/API/General/Recipe/["${this.food.countryCode?.toLowerCase()}|${this.food.databee}"]`; }
}
</script>