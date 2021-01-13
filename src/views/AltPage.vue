<template>
<v-container>
	<v-row>
		<v-col cols="12" md="2">
			<v-sheet class="pa-1 pb-3" shaped>
				<h4 class="pa-2">Categories</h4>
                <div :class="'px-5 pb-1' + (activeRoute === cat.id ? ' food-active' : '')" v-for="cat in FoodCategories" :key="cat.name">
                    <router-link class="hide-link" :to="'/vegan/' + cat.id">
                        <Emoji :emoji="cat.emoji" size="16" class="mr-1" />  {{cat.name}}
                    </router-link>
                </div>
			</v-sheet>
		</v-col>
		<v-col cols="12" md="10">
			<router-view />
		</v-col>
	</v-row>
</v-container>
</template>
<script lang="ts">
import { FoodCategories } from 'src/assets/vegan_data';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AltPage extends Vue {
    FoodCategories = FoodCategories;
    get activeRoute() {
        const params = this.$router.currentRoute.params;
        if(!params) { return ""; }
        return params.id;
    }
}
</script>