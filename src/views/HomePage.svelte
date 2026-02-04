<script lang="ts">
	import { bee } from "$lib/api";
	import type { HomePageResponse } from "$lib/types";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import Entry from "$lib/components/bee/entry.svelte";
	import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
	import SongDisplay from "$lib/components/bee/song-display.svelte";
	import { route } from "@mateothegreat/svelte5-router";
	import { buttonVariants } from "$lib/components/ui/button";
	const buttonStyles = buttonVariants({ variant: "outline" });
	const homeDataPromise = $state(bee.getShared<HomePageResponse>("homepage"));
</script>

<svelte:head>
	<title>Areund the World</title>
</svelte:head>
<div class="space-y-4">
	<div class="mx-3 md:mx-4 grid grid-cols-1 md:grid-cols-5 gap-2">
		{#await homeDataPromise}
			<div class="col-span-1 md:col-span-3 space-y-4">
				<Skeleton class="w-64 h-6 rounded-full" />
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
		{:then homeData}
			<div
				class="block md:hidden col-span-1 w-full items-center justify-center mb-3"
			>
				<p class="text-xl font-bold mb-2">Random Song</p>
				<SongDisplay song={homeData.randomSongs[0]} showFlag />
			</div>
			<div class="col-span-1 md:col-span-3 space-y-4">
				<p class="text-xl font-bold mb-2">Latest Entries</p>
				{#each homeData.latestFoods as food}
					<Entry {food} />
				{/each}
			</div>
			<div class="hidden md:block col-span-2 space-y-4">
				<p class="text-xl font-bold mb-2">Random Songs</p>
				<ul class="ml-2">
					{#each homeData.randomSongs as song}
						<SongDisplay {song} showFlag />
					{/each}
				</ul>
			</div>
		{:catch error}
			<p>oh no: {error}</p>
		{/await}
	</div>
	<div class="w-full flex justify-center items-center gap-2">
		<a use:route href="/world/page/1" class={buttonStyles}>See More</a>
	</div>
</div>
