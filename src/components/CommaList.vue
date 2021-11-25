<template>
<div class="comma-list">
    <strong>{{label}}: </strong>
    <span v-for="r in VisibleListItems" :key="r[nameVal]">
		<ax v-if="r[urlVal]" :href="r[urlVal]">{{r[nameVal]}}</ax>
		<span v-else>{{r[nameVal]}}</span>
    </span>
	<span class="link dotted-underline" v-if="!expanded && list.length > displayLimit" @click="expanded = true">Show More</span>
	<span class="link dotted-underline" v-if="expanded && list.length > displayLimit" @click="expanded = false">Show Less</span>
	<span v-if="!list.length">None Yet</span>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CommaList extends Vue {
	expanded = false;
    @Prop() label!:string;
    @Prop() list!:object[];
	@Prop({ default: "name" }) nameVal!:string;
	@Prop({ default: "url" }) urlVal!:string;
	@Prop({ default: 5 }) displayLimit!:number;
	get VisibleListItems() { return this.expanded ? this.list : this.list.slice(0, this.displayLimit); }
	ShowMore() { this.expanded = true; }
}
</script>