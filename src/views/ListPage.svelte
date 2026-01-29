<script lang="ts">
    import { bee } from "$lib/api";
    import type { PageResponse } from "$lib/types";
    import * as Card from "$lib/components/ui/card/index.js";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import Entry from "$lib/components/bee/entry.svelte";
    import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
    import CountryPicker from "$lib/components/bee/country-picker.svelte";
    import { route } from "@mateothegreat/svelte5-router";
    import { buttonVariants } from "$lib/components/ui/button";
	const buttonStyles = buttonVariants({ variant: "outline" });
	let { route: root }: { route: { result: any } } = $props();
	let page = $derived(parseInt(root?.result?.path?.params?.page) || 1);
	let pagePromise = $derived(bee.get<PageResponse>("Page", [page]));
</script>
<svelte:head>
	<title>Areund the World - Page {page}</title>
</svelte:head>
<div class="mx-3 md:mx-4 space-y-4">
	<CountryPicker mobileOnly />
	<Card.Root>
		<Card.Header class="space-y-4">
			<p>
				Welcome to <em>Areund the World</em>, my journey cooking food and listening to music from around the world, with the eventual
				goal of doing so for every country*! Click <a href="/world/about" use:route>here</a> to learn more!
			</p>
		</Card.Header>
	</Card.Root>
	<div class="md:mx-4">
	{#await pagePromise}
		<div class="space-y-4">
			<Skeleton class="w-64 h-6 rounded-full" />
			<SkeletonEntry />
			<SkeletonEntry />
			<SkeletonEntry />
		</div>
	{:then pageData}
		<div class="space-y-4">
			<p class="text-xl font-bold mb-2">Page {page}</p>
			{#each pageData as food}
				<Entry {food} />
			{/each}
			<div class="flex justify-center items-center gap-2">
				{#if page > 1}
					<a use:route href="/world/page/{page-1}" class={buttonStyles}>Previous Page</a>
				{/if}
				{#if !pageData.some(f => f.name === "Mantu")}
					<a use:route href="/world/page/{page+1}" class={buttonStyles}>Next Page</a>
				{/if}
			</div>
		</div>
	{:catch error}
		<p>oh no: {error}</p>
	{/await}
	</div>
</div>