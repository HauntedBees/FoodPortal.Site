<template>
<v-container>
	<v-row>
        <SideTopPanel>
            <template #header>Categories</template>
            <template #content>
                <div v-class.active="activeRoute===cat.id" class="px-5 pb-1" v-for="cat in FoodCategories" :key="cat.name">
                    <router-link :to="'/vegan/' + cat.id">
                        <Emoji :emoji="cat.emoji" size="16" class="mr-1" />  {{cat.name}}
                    </router-link>
                </div>
            </template>
        </SideTopPanel>
		<v-col cols="12" md="9" xl="10">
			<router-view :key="$route.fullPath" />
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