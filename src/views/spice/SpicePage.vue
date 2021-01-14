<template>
<v-container>
	<v-sheet rounded class="pa-5" v-if="spice">
		<SpiceCard :spice="spice" :skipRelations="true" />
		<v-row v-if="spice.relatedSpices.length">
			<h3 class="px-5 pb-2">Related Seasonings</h3>
			<SpiceCard v-for="idx in spice.relatedSpices" :key="idx" :spice="Spices[idx]" />
		</v-row>
		<v-row v-if="spice.pairsWith.length">
			<h3 class="px-5 pb-2">Pairs well with...</h3>
			<SpiceCard v-for="idx in spice.pairsWith" :key="idx" :spice="Spices[idx]" />
		</v-row>
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="!spice">
		<h1 class="mb-1">I don't know what that is.</h1>
		<p>
			I don't know what you were trying to see, but we don't have a page for that. Click one of the categories to see products
			that match, or click the title at the top of the page to go back to the home page. I don't know what "{{$route.params.id}}"
			is, so I can't give you a page for that.
		</p>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Spices, { Spice, SpiceXref } from 'src/assets/spice_data';
@Component
export default class SpicePage extends Vue {
	Spices = Spices;
	spice:Spice|null = null;
	created() {
		const id = this.$route.params.id;
		const s = SpiceXref[id];
		if(s !== undefined) {
			document.title = s.name + " - Spiceapedia";
			this.spice = s;
		} else {
			document.title = "Unknown Spice - Spiceapedia";
		}
	}
}
</script>