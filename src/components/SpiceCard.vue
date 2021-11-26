<template>
<v-card :class="'mb-5 mt-3 food-card type-' + spice.type">
	<v-row class="d-flex flex-no-wrap justify-space-between">
		<v-col cols="12" md="2">
            <img class="px-2 mx-0 my-0 px-md-0 mx-md-4 my-md-2 rounded-tl-lg rounded-br-lg" :src="`${$rootpath}/img_spice/${spicelink}.jpg`" :alt="spice.imagedesc" :title="spice.imagedesc">
		</v-col>
		<v-col cols="12" md="10" class="food-card--content pl-0 pb-1">
			<v-card-title class="headline pt-1">
				<Emoji :emoji="spice.emoji" size="16" class="mr-1" />
				{{spice.name}}
				<v-spacer/>
				<span class="card--date">{{spice.species}}</span>
			</v-card-title>
			<v-card-subtitle>
                <div v-if="spice.synonyms.length" class="comma-list"><strong>AKA: </strong> <span v-for="s in spice.synonyms" :key="s">{{s}}</span></div>
				<p class="my-1" v-html="spice.description"></p>
                <v-row>
                    <v-col>
                        <CommaList label="Recipes" :list="spice.recipes" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" class="pb-0">
                        <div>
                            <strong>Origin: </strong> <router-link :to="'/spice/q/origin:' + spice.origin">{{spice.origin}}</router-link>
                        </div>
                        <div class="comma-list">
                            <strong>Flavors: </strong>
                            <span v-for="i in spice.flavors" :key="i">
                                <router-link :to="'/spice/q/flavor:' + i">{{i}}</router-link>
                            </span>
                        </div>
                        <div v-if="!skipRelations && spice.relatedSpices.length" class="comma-list">
                            <strong>Related: </strong> 
                            <span v-for="i in spice.relatedSpices" :key="i">
                                <router-link :to="'/spice/' + i.name">{{i.name}}</router-link>
                            </span>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="pb-0">
                        <div v-if="spice.foods.length" class="comma-list">
                            <strong>Serve On: </strong> 
                            <span v-for="i in spice.foods" :key="i">
                                <router-link :to="'/spice/q/with:' + i">{{Upper(i)}}</router-link>
                            </span>
                        </div>
                        <div v-if="spice.dishes.length" class="comma-list">
                            <strong>Use In: </strong> 
                            <span v-for="i in spice.dishes" :key="i">
                                <router-link :to="'/spice/q/dish:' + i">{{i}}</router-link>
                            </span>
                        </div>
                        <div v-if="!skipRelations && spice.pairsWith.length" class="comma-list">
                            <strong>Pairs With: </strong> 
                            <span v-for="i in spice.pairsWith" :key="i">
                                <router-link :to="'/spice/' + i.name">{{i.name}}</router-link>
                            </span>
                        </div>
                    </v-col>
                </v-row>
			</v-card-subtitle>
            <v-card-subtitle class="float-right mb-2 py-0 text-caption">
                "<ax :href="spice.imageurl">{{spice.imagename}}</ax>"
                 by 
                <ax :href="spice.authorurl">{{spice.imageauthor}}</ax>
                  is licensed under the 
                <ax :href="spice.licenseurl">{{spice.license}}</ax>
                 License.
            </v-card-subtitle>
		</v-col>
	</v-row>
</v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Seasoning } from 'src/assets/spice_data';
@Component
export default class FoodCard extends Vue {
    @Prop() spice!:Seasoning;
    @Prop() skipRelations!:boolean;
    get spicelink():string { return this.spice.name.toLowerCase().replace(/\s|'/g, ""); }
    Upper(s:string):string { return s.split(" ").map(i => i[0].toUpperCase() + i.substring(1)).join(" "); }
}
</script>