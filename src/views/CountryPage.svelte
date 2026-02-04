<script lang="ts">
	import { bee } from "$lib/api";
	import type { CountryResponse } from "$lib/types";
	import Entry from "$lib/components/bee/entry.svelte";
	import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import SongDisplay from "$lib/components/bee/song-display.svelte";
	let { route }: { route: { result: any } } = $props();
	let countryCode: string = $derived(
		route?.result?.path?.params?.countryCode,
	);
	let countryPromise = $derived(
		countryCode
			? bee.getShared<CountryResponse>("country", [countryCode])
			: new Promise<CountryResponse>((resolve, _reject) =>
					resolve({ empty: true }),
				),
	);
</script>

<svelte:head>
	{#await countryPromise}
		<title>Areund the World</title>
	{:then country}
		{#if "empty" in country}
			<title>Areund the World</title>
		{:else}
			<title>{country.name} - Areund the World</title>
		{/if}
	{:catch}
		<title>Error - Areund the World</title>
	{/await}
</svelte:head>
<div class="space-y-4">
	<div class="mx-3 md:mx-4 grid grid-cols-1 md:grid-cols-5 gap-8">
		{#await countryPromise}
			<div class="col-span-1 md:col-span-3 space-y-4">
				<Skeleton class="w-64 h-6 rounded-full" />
				<SkeletonEntry />
				<SkeletonEntry />
				<SkeletonEntry />
			</div>
			<div class="hidden md:block col-span-2 space-y-4">
				<Skeleton class="w-64 h-6 rounded-full" />
				<Skeleton class="w-48 h-4" />
				<Skeleton class="w-49 h-4" />
				<Skeleton class="w-47 h-4" />
				<Skeleton class="w-48 h-4" />
				<Skeleton class="w-50 h-4" />
			</div>
		{:then country}
			{#if "empty" in country}
				<div class="col-span-1 md:col-span-3 space-y-4">
					<Skeleton class="w-64 h-6 rounded-full" />
					<SkeletonEntry />
					<SkeletonEntry />
					<SkeletonEntry />
				</div>
				<div class="hidden md:block col-span-2 space-y-4">
					<Skeleton class="w-64 h-6 rounded-full" />
					<Skeleton class="w-48 h-4" />
					<Skeleton class="w-49 h-4" />
					<Skeleton class="w-47 h-4" />
					<Skeleton class="w-48 h-4" />
					<Skeleton class="w-50 h-4" />
				</div>
			{:else}
				<div class="col-span-1 md:col-span-3 space-y-4">
					<p class="text-xl font-bold mb-2">
						{country.demonym} Cuisine
					</p>
					{#each country.food as food}
						<Entry {food} hidePlaylistOnDesktop />
					{/each}
				</div>
				<div class="hidden md:block col-span-2 space-y-4">
					<p class="text-xl font-bold mb-2">
						{country.demonym} Music
					</p>
					<ul class="list-disc ml-4 text-start">
						{#each country.music as song}
							<li>
								<SongDisplay {song} />
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		{:catch}
			<p>
				Either I haven't gotten to this country yet, you found your way
				to something that isn't real, or something broke. Sorry about
				that! You should go back to the home page and try again.
			</p>
		{/await}
	</div>
</div>
