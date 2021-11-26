<template>
<v-container>
	<v-sheet rounded class="pa-5">
		<h2 class="mb-2">Spiceapedia</h2>
		<p>
			Howdy hello there. This is a website where you can learn about spices, herbs, and spice blends. You can find what seasonings go best with different
			foods and what dishes they're most commonly used in. It's a hoot. Select a spice to see more information, or start typing into that search bar up
			there to find spices!
		</p>
		<p>
			You can automatically filter by some things by clicking on highlighted words in information cards, such as region names, foods, and flavors. You
			can also do some advanced searching by typing things like <router-link to="/spice/q/with:potato"><code>with:potato</code></router-link> or 
			<router-link to="/spice/q/dish:marinade"><code>dish:marinade</code></router-link> in the search bar!
		</p>
		<p>
			If you have any suggestions, corrections, additions, or comments, you can contact me at <a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a> 
			or on Twitter at <ax href="https://twitter.com/hauntedbees">@hauntedbees</ax>. And for the privacy policy and all that cool nerd stuff, 
			<router-link to="/spice/abeut">click here</router-link>!</p>
	</v-sheet>
    <Loader v-if="loading"/>
    <ErrorMessage v-if="isError"/>
	<v-row class="px-3">
		<v-col cols="12">
			<h2 class="mb-1">Random Seasonings</h2>
			<SpiceCard v-for="spice in spices" :key="spice.id" :spice="spice" />
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Seasoning } from 'src/models/spice';
import { bee } from '../../util/webmethod';
@Component
export default class SpiceHome extends Vue {
    loading = true;
	isError = false;
	spices:Seasoning[] = [];
	created() {
        bee.get<Seasoning[]>(this, "RandomSeasonings").then(r => {
			this.spices = r;
		}).catch(() => { this.isError = true; });
		document.title = "Spiceapedia";
	}
}
</script>