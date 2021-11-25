<template>
<v-container>
	<v-row>
        <Loader v-if="loading"/>
        <ErrorMessage v-if="isError"/>
        <SideTopPanel v-if="!loading">
            <template #header>Herbs</template>
            <template #content>
                <div class="px-5 pb-1" v-for="s in herbs" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
            </template>
            <template #headerb>Spices</template>
            <template #contentb>
                <div class="px-5 pb-1" v-for="s in spices" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
                </div>
            </template>
            <template #headerc>Blends</template>
            <template #contentc>
                <div class="px-5 pb-1" v-for="s in blends" :key="s.id">
                    <router-link :to="'/spice/' + s.id">{{s.name}}</router-link>
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
import { Vue, Component } from 'vue-property-decorator';
import { bee } from '../util/webmethod';
interface ListSeasoning { name:string; type:number; id?:string }
@Component
export default class SpicePage extends Vue {
    loading = true;
	isError = false;
	herbs:ListSeasoning[] = [];
	spices:ListSeasoning[] = [];
	blends:ListSeasoning[] = [];
    created() {
        bee.get<ListSeasoning[]>(this, "FullSeasoningList").then(r => {
            r.forEach(ls => {
                ls.id = encodeURIComponent(ls.name);
                switch(ls.type) {
                    case 0: this.herbs.push(ls); break;
                    case 1: this.spices.push(ls); break;
                    case 2: this.blends.push(ls); break;
                }
            });
		}).catch(() => { this.isError = true; });
    }
}
</script>