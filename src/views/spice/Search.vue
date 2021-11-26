<template>
<v-container>
    <Loader v-if="loading"/>
    <ErrorMessage v-if="isError"/>
	<v-row v-if="!loading">
        <v-col cols="12">
            <h4 class="pa-2 pl-4">{{title}}</h4>
            <SpiceCard v-for="spice in results" :key="spice.id" :spice="spice" />
            <v-sheet v-if="results.length === 0" rounded class="pa-5" style="width:100%">
                Sorry, nothing matches that search query. You can search for names of things, or try typing filters like these:
                <ul>
                    <li><code>origin:South Asian</code> to find seasonings from a certain region.</li>
                    <li><code>with:potato</code> to find seasonings that go well with certain ingredients.</li>
                    <li><code>dish:marinade</code> to find seasonings that go well in certain dishes.</li>
                    <li><code>flavor:citrusy</code> to find seasonings with a certain flavor.</li>
                </ul>
                You can even combine queries and filters by separating them with commas! If you want to find cold spices that go well with melon,
                try <router-link to="/spice/q/with:beef,flavor:cold"><code>with:melon,flavor:cold</code></router-link>!
            </v-sheet>
        </v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Seasoning } from 'src/assets/spice_data';
import { bee } from '../../util/webmethod';
@Component
export default class SpiceSearch extends Vue {
    loading = true;
	isError = false;
    query = "";
    title = "";
	results:Seasoning[] = [];
    created() {
		this.query = this.$route.params.query || "";
        document.title = "Search Results - Spiceapedia";
        if(this.query === "") { this.$router.push("/spice/"); return; }
        const parts = this.query.split(",");
        bee.get<Seasoning[]>(this, "SeasoningSearchResults", [parts]).then(ss => {
            this.results = ss;
        });
        this.title = "";
        const origins:string[] = [], foodWiths:string[] = [], dishes:string[] = [], flavors:string[] = [], queries:string[] = [];
        parts.forEach(qp => {
            if(qp.indexOf(":") < 0) { // search query
                queries.push(qp);
            } else { // filter
                const qpp = qp.split(":");
                const filterType = qpp[0].trim().toLowerCase(), filterVal = qpp[1].trim().toLowerCase();
                if(filterType === "origin") { // can't really have seasonings from multiple origins but whatever
                    origins.push(filterVal);
                } else if(filterType === "flavor") {
                    flavors.push(filterVal);
                } else if(filterType === "dish") {
                    dishes.push(filterVal);
                } else if(filterType === "with") {
                    foodWiths.push(filterVal);
                }
            }
        });
        if(origins.length) { this.title += this.ArrayToEnglishList(origins) + " "; }
        this.title += "Seasonings ";
        if(foodWiths.length) { this.title += " that go well with " + this.ArrayToEnglishList(foodWiths); }
        if(dishes.length) { this.title += " to use in " + this.ArrayToEnglishList(dishes); }
        if(flavors.length) { this.title += " that taste " + this.ArrayToEnglishList(flavors); }
        if(queries.length) { this.title += " that match \"" + this.ArrayToEnglishList(queries) + "\""; }
	}
    ArrayToEnglishList(arr:string[]) {
        if(arr.length >= 3) {
            const last:string = arr.splice(-1, 1)[0];
            return arr.map(s => this.Capitalize(s)).join(", ") + ", and " + this.Capitalize(last);
        } else if(arr.length === 2) {
            return this.Capitalize(arr[0]) + " and " + this.Capitalize(arr[1]);
        } else if(arr.length === 1) {
            return this.Capitalize(arr[0]);
        }
        return "";
    }
    Capitalize(str:string) { return str.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" "); }
}
</script>