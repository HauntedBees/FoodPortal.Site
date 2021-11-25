<template>
<v-container>
    <Loader v-if="loading"/>
    <ErrorMessage v-if="isError"/>
	<v-row>
        <v-col cols="12">
            <h4 class="pa-2 pl-4">{{title}}</h4>
            <SpiceCard v-for="spice in results" :key="spice.id" :spice="spice" />
            <v-sheet v-if="results.length === 0" rounded class="pa-5" style="width:100%">
                Sorry, nothing matches that search query. You can search for names of things, or try typing filters like these:
                <ul>
                    <li>
                        <code>origin:South Asian</code> to find seasonings from a certain region.
                        <v-btn v-if="!showOrigins" color="primary" @click="showOrigins=true" x-small>Show Available Origins</v-btn>
                        <span v-if="showOrigins" class="comma-list">
                            <span v-for="f in Origins" :key="f">
                                <router-link :to="'/spice/q/origin:' + f">
                                    <code>{{f}}</code>
                                </router-link>
                            </span>
                        </span>
                    </li>
                    <li>
                        <code>with:potato</code> to find seasonings that go well with certain ingredients.
                        <v-btn v-if="!showFoods" color="primary" @click="showFoods=true" x-small>Show Available Ingredients</v-btn>
                        <span v-if="showFoods" class="comma-list">
                            <span v-for="f in Foods" :key="f">
                                <router-link :to="'/spice/q/with:' + f">
                                    <code>{{f}}</code>
                                </router-link>
                            </span>
                        </span>
                    </li>
                    <li>
                        <code>dish:marinade</code> to find seasonings that go well in certain dishes.
                        <v-btn v-if="!showDishes" color="primary" @click="showDishes=true" x-small>Show Available Dishes</v-btn>
                        <span v-if="showDishes" class="comma-list">
                            <span v-for="f in DishTypes" :key="f">
                                <router-link :to="'/spice/q/dish:' + f">
                                    <code>{{f}}</code>
                                </router-link>
                            </span>
                        </span>
                    </li>
                    <li>
                        <code>flavor:citrusy</code> to find seasonings with a certain flavor.
                        <v-btn v-if="!showFlavors" color="primary" @click="showFlavors=true" x-small>Show Available Flavors</v-btn>
                        <span v-if="showFlavors" class="comma-list">
                            <span v-for="f in Flavors" :key="f">
                                <router-link :to="'/spice/q/flavor:' + f">
                                    <code>{{f}}</code>
                                </router-link>
                            </span>
                        </span>
                    </li>
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
import Spices, { Foods, DishTypes, Flavors, Spice } from 'src/assets/spice_data';
@Component
export default class SpiceSearch extends Vue {
    loading = true;
	isError = false;
    query = "";
    title = "";
    showOrigins = false;
    Foods = Foods;
    showFoods = false;
    DishTypes = DishTypes;
    showDishes = false;
    Flavors = Flavors;
    showFlavors = false;
	results:Spice[] = [];
    get Origins() { return [...new Set(Spices.map(s => s.origin))].sort(); }
    created() {
		this.query = this.$route.params.query || "";
        document.title = "Search Results - Spiceapedia";
        if(this.query === "") { this.$router.push("/spice/"); return; }
        const queryParts = this.query.split(",");
        const queryFuncs:{(s:Spice):boolean}[] = [];

        const queries:string[] = [];
        const origins:string[] = [];
        const flavors:string[] = [];
        const dishes:string[] = [];
        const foodWiths:string[] = [];

        for(let i = 0; i < queryParts.length; i++) {
            const qp = queryParts[i].trim().toLowerCase();
            if(qp.indexOf(":") < 0) { // search query
                queries.push(qp);
                queryFuncs.push(s => s.name.toLowerCase().indexOf(qp) >= 0 || s.synonyms.some(syn => syn.toLowerCase().indexOf(qp) >= 0));
            } else { // filter
                const qpp = qp.split(":");
                const filterType = qpp[0].trim().toLowerCase(), filterVal = qpp[1].trim().toLowerCase();
                if(filterType === "origin") { // can't really have seasonings from multiple origins but whatever
                    origins.push(filterVal);
                    queryFuncs.push(s => s.origin.toLowerCase() === filterVal);
                } else if(filterType === "flavor") {
                    flavors.push(filterVal);
                    queryFuncs.push(s => s.flavors.some(f => Flavors[f].toLowerCase() === filterVal));
                } else if(filterType === "dish") {
                    dishes.push(filterVal);
                    queryFuncs.push(s => s.dishes.some(f => DishTypes[f].toLowerCase() === filterVal));
                } else if(filterType === "with") {
                    foodWiths.push(filterVal);
                    queryFuncs.push(s => s.foods.some(f => Foods[f].toLowerCase() === filterVal));
                }
            }
        }
        const fullFunc = (s:Spice) => queryFuncs.every(f => f(s));
        this.results = Spices.filter(fullFunc);

        this.title = "";
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