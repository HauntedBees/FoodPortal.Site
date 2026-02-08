<script lang="ts">
	import { bee } from "$lib/api";
	import type { IndividualResponse } from "$lib/types";
	import Entry from "$lib/components/bee/entry.svelte";
	import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
	import NotFound from "$lib/components/bee/not-found.svelte";
	import Error from "$lib/components/bee/error.svelte";
	let { route }: { route: { result: any } } = $props();
	let recipeKey: string = $derived(route?.result?.path?.params?.recipeKey);
	let recipePromise = $derived(
		recipeKey
			? bee.getShared<IndividualResponse>("foodkey", [recipeKey])
			: new Promise<IndividualResponse>((_resolve, reject) =>
					reject("no recipe!"),
				),
	);
</script>

<svelte:head>
	{#await recipePromise}
		<title>Areund the World</title>
	{:then recipeResponse}
		<title
			>{recipeResponse.food?.name ?? "Unknown Recipe"} - Areund the World</title
		>
	{:catch}
		<title>Error - Areund the World</title>
	{/await}
</svelte:head>
<div class="mx-3 md:mx-4 space-y-4">
	<div class="md:mx-4">
		{#await recipePromise}
			<div class="space-y-4">
				<SkeletonEntry />
			</div>
		{:then recipeData}
			{#if recipeData.food}
				<div class="space-y-4">
					<Entry food={recipeData.food} />
					{#if recipeData.similarDishes.length}
						<p class="text-xl font-bold mb-2">Similar Dishes</p>
						{#each recipeData.similarDishes as food}
							<Entry {food} />
						{/each}
					{/if}
				</div>
			{:else}
				<NotFound />
			{/if}
		{:catch}
			<Error />
		{/await}
	</div>
</div>
