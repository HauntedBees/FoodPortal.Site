<script lang="ts">
    import { bee } from "$lib/api";
    import type { CountryResponse } from "$lib/types";
    import * as Card from "$lib/components/ui/card/index.js";
    import Entry from "$lib/components/bee/entry.svelte";
    import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
    import Flag from "$lib/components/bee/flag.svelte";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import CountryPicker from "$lib/components/bee/country-picker.svelte";
    import SongDisplay from "$lib/components/bee/song-display.svelte";
	let { route }: { route: { result: any } } = $props();
	let countryCode: string = $derived(route?.result?.path?.params?.countryCode);
	let countryPromise = $derived(countryCode
		? bee.get<CountryResponse>("Country", [countryCode])
		: new Promise<CountryResponse>((_resolve, reject) => reject("no country code!"))
	);
</script>
<svelte:head>
	{#await countryPromise}
	<title>Areund the World</title>
	{:then country}
	<title>{country.name} - Areund the World</title>
	{:catch}
	<title>Error - Areund the World</title>
	{/await}
</svelte:head>
<div class="space-y-4">
	<div class="bg-accent text-accent-foreground px-5 py-1 rounded-full mx-3 mt-1 md:mt-0 md:ml-0 md:mr-5">
			{#await countryPromise}
			<Skeleton class="w-64 h-8 rounded-full" />
			{:then country}
			<Card.Title class="flex text-2xl items-center space-x-2">
				<Flag country={country} />
				<span class="ml-2">{country.name}</span>
			</Card.Title>
			{:catch}
			<Card.Title class="flex text-2xl items-center">
				Country Not Found
			</Card.Title>
			{/await}
	</div>
	<CountryPicker mobileOnly countryCode={countryCode} />
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
		<div class="col-span-1 md:col-span-3 space-y-4">
			<p class="text-xl font-bold mb-2">{country.demonym} Cuisine</p>
			{#each country.food as food}
				<Entry {food} hidePlaylistOnDesktop />
			{/each}
		</div>
		<div class="hidden md:block col-span-2 space-y-4">
			<p class="text-xl font-bold mb-2">{country.demonym} Music</p>
			<ul class="list-disc ml-4 text-start">
			{#each country.music as song}
				<SongDisplay {song} />
			{/each}
			</ul>
		</div>
	{:catch}
		<p>
			Either I haven't gotten to this country yet, or you found your way to something that isn't real.
			Sorry about that! You should go back to the home page and try again.
		</p>
	{/await}
	</div>
</div>