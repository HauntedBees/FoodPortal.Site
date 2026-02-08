<script lang="ts">
	import "./app.css";
	import TopNav from "./lib/TopNav.svelte";
	import {
		Router,
		type RouteConfig,
		type RouteResult,
	} from "@mateothegreat/svelte5-router";
	import CountryPicker from "$lib/components/bee/country-picker.svelte";
	import { setCountry } from "$lib/helpers.svelte";

	const nonCountryHook = () => ({
		pre: [
			(_: RouteResult): boolean => {
				setCountry("");
				return true;
			},
		],
	});

	const topRoutes: RouteConfig[] = [
		{
			path: "",
			component: async () => import("./views/HomeTop.svelte"),
			hooks: nonCountryHook(),
		},
		{
			path: "about",
			component: null,
			hooks: nonCountryHook(),
		},
		{
			path: "favorites",
			component: async () => import("./views/FavoritesTop.svelte"),
			hooks: nonCountryHook(),
		},
		{
			path: "search",
			component: async () => import("./views/SearchTop.svelte"),
			hooks: nonCountryHook(),
		},
		{
			path: "page/(?<page>[0-9]*)",
			component: async () => import("./views/ListTop.svelte"),
			hooks: nonCountryHook(),
		},
		{
			path: "recipe/(?<recipeKey>.*)",
			component: async () => import("./views/IndividualTop.svelte"),
			hooks: nonCountryHook(),
		},
		{
			path: "country/(?<countryCode>.*)",
			component: async () => import("./views/CountryTop.svelte"),
			hooks: {
				pre: [
					(result: RouteResult): boolean => {
						setCountry(
							(result?.result?.path?.params as any)
								?.countryCode ?? "",
						);
						return true;
					},
				],
			},
		},
	];
	const routes: RouteConfig[] = [
		{
			path: "",
			component: async () => import("./views/HomePage.svelte"),
		},
		{
			path: "about",
			component: async () => import("./views/AboutPage.svelte"),
		},
		{
			path: "favorites",
			component: async () => import("./views/FavoritesPage.svelte"),
		},
		{
			path: "search",
			component: async () => import("./views/SearchPage.svelte"),
		},
		{
			path: "page/(?<page>[0-9]*)",
			component: async () => import("./views/ListPage.svelte"),
		},
		{
			path: "recipe/(?<recipeKey>.*)",
			component: async () => import("./views/IndividualPage.svelte"),
		},
		{
			path: "country/(?<countryCode>.*)",
			component: async () => import("./views/CountryPage.svelte"),
		},
	];
</script>

<TopNav />
<div class="grid grid-cols-1 md:grid-cols-5 gap-2 my-2">
	<div class="col-span-1 md:hidden">
		<Router routes={topRoutes} basePath="/world/" />
	</div>
	<nav class="col-span-1">
		<CountryPicker />
	</nav>
	<main class="col-span-1 md:col-span-4">
		<div class="hidden md:block mb-4">
			<Router routes={topRoutes} basePath="/world/" />
		</div>
		<Router
			{routes}
			basePath="/world/"
			hooks={{
				post: [
					(_: RouteResult): boolean => {
						window.scrollTo(0, 0);
						return true;
					},
				],
			}}
		/>
	</main>
</div>
<footer
	class="bg-stone-900 w-full mx-auto flex items-center justify-between px-4 py-2 mt-2"
>
	<span class="text-sm text-body sm:text-center"
		>© {new Date().getFullYear()}
		<a href="https://hauntedbees.com/" class="underline"
			>Haunted Bees Productions</a
		>
	</span>
</footer>
