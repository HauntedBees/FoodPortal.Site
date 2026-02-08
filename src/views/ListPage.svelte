<script lang="ts">
	import { bee } from "$lib/api";
	import type { PageResponse } from "$lib/types";
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import Entry from "$lib/components/bee/entry.svelte";
	import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
	import { route } from "@mateothegreat/svelte5-router";
	import { buttonVariants } from "$lib/components/ui/button";
	import Error from "$lib/components/bee/error.svelte";
	const buttonStyles = buttonVariants({ variant: "outline" });
	let { route: root }: { route: { result: any } } = $props();
	let page = $derived(parseInt(root?.result?.path?.params?.page) || 1);
	let pagePromise = $derived(bee.getShared<PageResponse>("page", [page]));
</script>

<svelte:head>
	<title>Areund the World - Page {page}</title>
</svelte:head>
<div class="mx-3 md:mx-4 space-y-4">
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
						<a
							use:route
							href="/world/page/{page - 1}"
							class={buttonStyles}>Previous Page</a
						>
					{/if}
					{#if !pageData.some((f) => f.name === "Mantu")}
						<a
							use:route
							href="/world/page/{page + 1}"
							class={buttonStyles}>Next Page</a
						>
					{/if}
				</div>
			</div>
		{:catch}
			<Error />
		{/await}
	</div>
</div>
