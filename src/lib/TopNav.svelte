<script lang="ts">
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
    import Emoji from "./components/bee/emoji.svelte";
    import { route } from "@mateothegreat/svelte5-router";
    import { onMount } from "svelte";
    import { bee } from "./api";
    import type { MetadataResponse } from "./types";
    import Skeleton from "./components/ui/skeleton/skeleton.svelte";
    import BadgeToggle from "./components/bee/badge-toggle.svelte";
    import { cn } from "./utils";
    import Button from "./components/ui/button/button.svelte";
	const dietToggleBaseClasses = "p-2 rounded-full cursor-pointer";
	const dietToggleActiveClasses = "font-bold";

	let isSearchPanelOpen = $state(false);
	let dishFilters: number[] = $state([]);
	let dietIncludeFilters: number[] = $state([]);
	let dietExcludeFilters: number[] = $state([]);
	let searchBox = $state<HTMLInputElement | null>(null);
	let topNav = $state<HTMLElement | null>(null);
	const metadataPromise = $state(bee.getShared<MetadataResponse>("Metadata"));
	onMount(() => {
		if(!searchBox) { return; }
		searchBox.addEventListener("focus", () => {
			isSearchPanelOpen = true;
		});
		document.addEventListener("click", (e: PointerEvent) => {
			const target = (e.target as Element | null);
			if(target != searchBox && !target?.matches("#top-nav") && !topNav?.contains(target)) {
				isSearchPanelOpen = false;
			}
		});
	});
	const Search = () => {
		isSearchPanelOpen = false;
	};
	const ToggleDishFilter = (filter: number) => {
		const dishIdx = dishFilters.indexOf(filter);
		if(dishIdx < 0) {
			dishFilters.push(filter);
		} else {
			dishFilters.splice(dishIdx, 1);
		}
	}
	const ToggleDietFilter = (type: "off" | "include" | "exclude", filter: number) => {
		const includeIdx = dietIncludeFilters.indexOf(filter);
		if(type === "include") {
			if(includeIdx < 0) {
				dietIncludeFilters.push(filter);
			}
		} else if(includeIdx >= 0) {
			dietIncludeFilters.splice(includeIdx, 1);
		}

		const excludeIdx = dietExcludeFilters.indexOf(filter);
		if(type === "exclude") {
			if(excludeIdx < 0) {
				dietExcludeFilters.push(filter);
			}
		} else if(excludeIdx >= 0) {
			dietExcludeFilters.splice(excludeIdx, 1);
		}
	};
</script>
 
<nav id="top-nav" class="w-full bg-stone-900 px-4 py-2 md:flex items-center space-x-4 z-50">
	<a href="/world/" use:route class="mb-2 md:w-auto text-center md:mb-0 text-2xl font-bold flex items-center space-x-4 justify-center">
		<Emoji>🗺️</Emoji>
		<span>Areund the World</span>
	</a>
	<div class="grid gap-6 grow">
		<InputGroup.Root>
			<InputGroup.Input bind:ref={searchBox} placeholder="Search Recipes..." />
			<InputGroup.Addon>
				<SearchIcon />
			</InputGroup.Addon>
		</InputGroup.Root>
	</div>
</nav>
<nav
	id="search-box"
	bind:this={topNav}
	class="
		bg-accent rounded-b-xl w-full absolute z-40
		transition-transform duration-300 ease-in-out
		{isSearchPanelOpen ? "" : "translate-y-[-2000px]"}
	">
	<div class="mx-3 my-2">
		<h3 class="font-bold">
			Dish Types
			{#if dishFilters.length}
				({dishFilters.length})
			{/if}
		</h3>
		<div class="my-3 flex flex-wrap gap-2">
			{#await metadataPromise}
				<Skeleton class="w-full h-4" />
			{:then metadata}
				{#each metadata.dishes as d}
					<BadgeToggle
						onclick={() => ToggleDishFilter(d.id)}
						active={dishFilters.indexOf(d.id) >= 0}
						activeColor={d.color}
					>
						<Emoji size="xs" codepoint={d.emoji} />
						<span class="ml-2">{d.name}</span>
					</BadgeToggle>
				{/each}
			{/await}
		</div>
		<h3 class="font-bold">Dietary Restrictions</h3>
		<div class="my-3 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			{#await metadataPromise}
				<Skeleton class="w-full h-4" />
			{:then metadata}
				{#each metadata.diets as d}
					<div class="text-sm rounded-full text-primary-foreground bg-primary flex items-center align-center justify-center">
						<Emoji size="xs" codepoint={d.emoji} />
						<span class="ml-2 mr-3 font-bold">{d.name}</span>
						<button
							onclick={() => ToggleDietFilter("off", d.id)}
							class={
								cn(
									dietToggleBaseClasses,
									dietIncludeFilters.indexOf(d.id) < 0 && dietExcludeFilters.indexOf(d.id) < 0
									? (dietToggleActiveClasses + " bg-secondary text-secondary-foreground") : ""
								)
							}
							>
							Off
						</button>
						<button
							onclick={() => ToggleDietFilter("include", d.id)}
							class={
								cn(
									dietToggleBaseClasses,
									dietIncludeFilters.indexOf(d.id) >= 0
									? (dietToggleActiveClasses + " bg-[#00CC00] text-secondary-foreground") : ""
								)
							}
							>
							Include
						</button>
						<button
							onclick={() => ToggleDietFilter("exclude", d.id)}
							class={
								cn(
									dietToggleBaseClasses,
									dietExcludeFilters.indexOf(d.id) >= 0
									? (dietToggleActiveClasses + " bg-[#CC0000] text-secondary-foreground") : ""
								)
							}
							>
							Exclude
						</button>
					</div>
				{/each}
			{/await}
		</div>
		<div class="flex w-full justify-between">
			<Button variant="link" onclick={() => { dishFilters = []; dietExcludeFilters = []; dietIncludeFilters = []; }}>Clear Filters</Button>
			<Button variant="default" onclick={Search}>Search</Button>
		</div>
	</div>
</nav>