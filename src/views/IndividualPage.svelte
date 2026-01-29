<script lang="ts">
    import { bee } from "$lib/api";
    import type { IndividualResponse } from "$lib/types";
    import * as Card from "$lib/components/ui/card/index.js";
    import Entry from "$lib/components/bee/entry.svelte";
    import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
    import CountryPicker from "$lib/components/bee/country-picker.svelte";
    import { route } from "@mateothegreat/svelte5-router";
	let { route: routeProps }: { route: { result: any } } = $props();
	let recipeKey: string = $derived(routeProps?.result?.path?.params?.recipeKey);
	let recipePromise = $derived(recipeKey
		? bee.get<IndividualResponse>("FoodByKey", [recipeKey])
		: new Promise<IndividualResponse>((_resolve, reject) => reject("no recipe!"))
	);
</script>
<svelte:head>
	{#await recipePromise}
	<title>Areund the World</title>
	{:then recipeResponse}
	<title>{recipeResponse.food?.name ?? "Unknown Recipe"} - Areund the World</title>
	{:catch}
	<title>Error - Areund the World</title>
	{/await}
</svelte:head>
<div class="mx-3 md:mx-4 space-y-4">
	<Card.Root>
		<Card.Header class="space-y-4">
			<p>
				Welcome to <em>Areund the World</em>, my journey cooking food and listening to music from around the world, with the eventual
				goal of doing so for every country*! Want to know more? Click <a href="/world/about" class="underline" use:route>here</a>!
			</p>
		</Card.Header>
	</Card.Root>
	<CountryPicker mobileOnly />
	<div class="md:mx-4">
	{#await recipePromise}
		<div class="space-y-4">
			<SkeletonEntry />
		</div>
	{:then recipeData}
		<div class="space-y-4">
			{#if recipeData.food}
				<Entry food={recipeData.food} />
			{/if}
			{#if recipeData.similarDishes}
				<p class="text-xl font-bold mb-2">Similar Dishes</p>
				{#each recipeData.similarDishes as food}
					<Entry {food} />
				{/each}
			{/if}
		</div>
	{:catch error}
		<p>oh no: {error}</p>
	{/await}
	</div>
</div>