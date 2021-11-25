<template>
<v-container>
	<Loader v-if="loading"/>
	<ErrorMessage v-if="isError"/>
	<v-sheet rounded class="pa-5" v-if="spice && !loading">
		<SpiceCard :spice="spice" :skipRelations="true" />
		<v-row v-if="spice.relatedSpices.length">
			<h3 class="px-5 pb-2">Related Seasonings</h3>
			<SpiceCard v-for="s in spice.relatedSpices" :key="s.name" :spice="s" />
		</v-row>
		<v-row v-if="spice.pairsWith.length">
			<h3 class="px-5 pb-2">Pairs well with...</h3>
			<SpiceCard v-for="s in spice.pairsWith" :key="s.name" :spice="s" />
		</v-row>
	</v-sheet>
	<v-sheet rounded class="pa-5" v-if="!spice && !loading">
		<h1 class="mb-1">I don't know what that is.</h1>
		<p>
			Sorry, we don't know anything about "{{$route.params.id}}." Try looking up one of the seasonings we do know about, or searching for something
			in that search box up there!
		</p>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Seasoning } from 'src/assets/spice_data';
import { bee } from '../../util/webmethod';
@Component
export default class SpicePage extends Vue {
    loading = true;
	isError = false;
	spice:Seasoning|null = null;
	created() {
		const id = this.$route.params.id;
		bee.get<Seasoning>(this, "Seasoning", [id]).then(s => {
			document.title = s.name + " - Spiceapedia";
			this.spice = s;
		}).catch((e:Error) => {
			document.title = "Unknown Seasoning - Spiceapedia";
			if(e.message !== "Seasoning not found.") {
				this.isError = true;
			}
		});
	}
}
</script>