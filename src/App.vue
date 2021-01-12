<template>
	<v-app id="app">
		<v-app-bar app dense flat>
			<Emoji class="mr-5" :emoji="icon"/>
			<v-toolbar-title class="mr-12 hidden-sm-and-down">
				<router-link class="hide-link" :to="$route.matched[0].path">{{name}}</router-link>
			</v-toolbar-title>
			<v-text-field style="max-width:60%" prepend-inner-icon="mdi-card-search" dense flat hide-details rounded solo-inverted 
				v-model="searchQuery" @keyup.enter="Search()" />
		</v-app-bar>
		<v-main>
			<router-view :key="$route.fullPath" />
		</v-main>
		<v-footer>
			<div>
				&copy; {{(new Date()).getFullYear()}}
				<a href="https://www.hauntedbees.com" target="_blank">Haunted Bees Productions</a>
			</div>
		</v-footer>
	</v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import 'src/scss/style.scss';
import 'flag-icon-css/css/flag-icon.css';
export default Vue.extend({
	name: "App",
	data: () => ({ searchQuery: "" }),
	computed: {
		name() { return this.$route.matched[0].meta.title; },
		icon() {
			switch(this.$route.matched[0].path) {
				case "/world": return "1F5FA";
				default: return "1F35E";
			}
		}
	},
	methods: {
		Search() { this.$router.push("/world/search/" + this.searchQuery); }
	}
});
</script>