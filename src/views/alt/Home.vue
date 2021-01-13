<template>
<v-container>
	<v-sheet rounded class="pa-5">
		<h2 class="mb-2">Alt. Food Reviews</h2>
		<p>
			Hey hi do you enjoy things like meat and dairy, but do not want to consume actual meat or dairy for whatever reason? Cool! Unfortunately, a lot of
			meat and dairy substitutes kind of suck. Or at least, that's the common perception. So many fake meats, so few that actually taste or feel like meats!
		</p>
		<p>
			That's where this site comes in! I'm trying 'em as I find 'em, so you don't have to, then I rate them based on how accurate they are in terms of flavor
			and texture, as well as if they taste good in general (sometimes they taste good even if they aren't super accurate to the thing they're imitating)! I'm
			not a vegan or vegetarian, nor am I being paid by the vegan mafia, so I have no stakes in the game. I just calls's 'em like I sees's 'em.
		</p>
		<p>
			If you have any comments, suggestions, criticisms, complaints, or recommendations, hit me up at <a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a> 
			or on Twitter at <ax href="https://twitter.com/hauntedbees">@hauntedbees</ax>. For the privacy policy and all that cool nerd stuff, 
			<router-link to="/vegan/abeut">click here</router-link>!</p>
	</v-sheet>
	<v-row class="px-3">
		<v-col cols="12">
			<h2 class="mb-1">Latest Reviews</h2>
			<AltFoodCard v-for="food in recentFoods" :key="food.name" :food="food" />
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Food, { Product } from 'src/assets/vegan_data';
@Component
export default class AltHome extends Vue {
	created() { document.title = "Alt. Food Reviews"; }
	get recentFoods() { 
		const fullfoods:Product[] = [];
		for(const key in Food) {
			fullfoods.push(...Food[key]);
		}
		fullfoods.sort((a, b) => (+new Date(b.date) - (+new Date(a.date))));
		return fullfoods.splice(0, 3);
	}
}
</script>