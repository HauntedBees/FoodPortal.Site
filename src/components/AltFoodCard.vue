<template>
<v-card :class="'mb-2 food-card type-' + food.type.id">
	<v-row class="d-flex flex-no-wrap justify-space-between">
		<v-col cols="12" class="food-card--content">
			<v-card-title class="headline pt-1 pb-6">
				<spantt :tooltip="food.type.name"><Emoji :emoji="food.type.emoji" size="24" class="mr-2" /></spantt>
				<ax :href="food.url"><em>{{food.brand}}</em> {{food.item}}</ax>
				<v-spacer/>
				<span class="card--date">{{$formatdate(food.date)}}</span>
			</v-card-title>
			<v-card-subtitle>
				<p v-html="food.desc"></p>
                <v-row>
                    <v-col cols="12" md="6"><strong>Pros: </strong> {{food.pros}}</v-col>
                    <v-col cols="12" md="6"><strong>Cons: </strong> {{food.cons}}</v-col>
                </v-row>
                <v-row>
                    <v-col cols="6"><strong>Rating: {{food.rating}}</strong>/10</v-col>
                    <v-col cols="6"><strong>Unit Price: </strong> ${{food.unitPrice}}/{{food.type.unit}}</v-col>
                </v-row>
                <div>
                    Dietary Restrictions:
                    <span v-if="food.restrictions.length === 0">No common dietary restrictions.</span>
                    <spantt v-for="r in food.restrictions" :key="r" :tooltip="'Contains ' + r">
                        <Emoji :emoji="DietaryRestrictions[r]" size="16" class="mr-2" />
                    </spantt>
                </div>
			</v-card-subtitle>
		</v-col>
	</v-row>
</v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Product, DietaryRestrictions } from 'src/assets/vegan_data';
@Component
export default class AltFoodCard extends Vue {
    DietaryRestrictions = DietaryRestrictions;
    @Prop() food!:Product;
}
</script>