<script lang="ts">
	import './app.css';
    import TooltipProvider from '$lib/components/ui/tooltip/tooltip-provider.svelte';
	import TopNav from './lib/TopNav.svelte';
	import { Router, type RouteConfig, type RouteResult } from '@mateothegreat/svelte5-router';
    import CountryPicker from '$lib/components/bee/country-picker.svelte';
    import { NavigationEvent } from '$lib/types';
	const routes: RouteConfig[] = [
		{
			path: "",
			component: async () => import("./views/HomePage.svelte"),
			hooks: {
				post: [
					(_: RouteResult): boolean => {
						document.dispatchEvent(NavigationEvent("home"));
						return true;
					}
				]
			}
		},
		{
			path: "about",
			component: async () => import("./views/AboutPage.svelte"),
			hooks: {
				post: [
					(_: RouteResult): boolean => {
						document.dispatchEvent(NavigationEvent("about"));
						return true;
					}
				]
			}
		},
		{
			path: "page/(?<page>[0-9]*)",
			component: async () => import("./views/ListPage.svelte"),
			hooks: {
				post: [
					(result: RouteResult): boolean => {
						document.dispatchEvent(NavigationEvent("page"));
						return true;
					}
				]
			}
		},
		{
			path: "country/(?<countryCode>.*)",
			component: async () => import("./views/CountryPage.svelte"),
			hooks: {
				post: [
					(result: RouteResult): boolean => {
						document.dispatchEvent(NavigationEvent("country", (result?.result?.path?.params as any)?.countryCode ?? ""))
						return true;
					}
				]
			}
		},
		{
			path: "recipe/(?<recipeKey>.*)",
			component: async () => import("./views/IndividualPage.svelte"),
			hooks: {
				post: [
					(result: RouteResult): boolean => {
						document.dispatchEvent(NavigationEvent("individual"));
						return true;
					}
				]
			}
		}
	];
</script>
<TooltipProvider delayDuration={100} disableHoverableContent={true}>
	<TopNav />
	<div class="grid grid-cols-1 md:grid-cols-5 gap-2 my-2">
		<nav class="hidden md:block col-span-1">
			<CountryPicker />
		</nav>
		<main class="col-span-1 md:col-span-4">
			<Router 
				{routes}
				basePath="/world/"
				hooks={{
					post: [
						(_: RouteResult): boolean => {
							window.scrollTo(0, 0);
							return true;
						}
					]
				}}
			/>
		</main>
	</div>
</TooltipProvider>
