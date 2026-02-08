<script lang="ts">
	import * as InputGroup from "$lib/components/ui/input-group/index.js";
	import SearchIcon from "@lucide/svelte/icons/search";
	import Emoji from "./components/bee/emoji.svelte";
	import { goto, route } from "@mateothegreat/svelte5-router";
	import { onMount } from "svelte";
	import { bee } from "./api";
	import {
		type MetadataResponse,
		SearchRequestToSiteQueryString,
	} from "./types";
	import Skeleton from "./components/ui/skeleton/skeleton.svelte";
	import BadgeToggle from "./components/bee/badge-toggle.svelte";
	import Button from "./components/ui/button/button.svelte";
	import DietSwitch from "./components/bee/diet-switch.svelte";

	let isSearchPanelOpen = $state(false);
	let dishFilters: number[] = $state([]);
	let dietIncludeFilters: number[] = $state([]);
	let dietExcludeFilters: number[] = $state([]);
	let searchBox = $state<HTMLInputElement | null>(null);
	let topNav = $state<HTMLElement | null>(null);
	const metadataPromise = $state(bee.getShared<MetadataResponse>("metadata"));
	onMount(() => {
		if (!searchBox) {
			return;
		}
		locationChanged();
		searchBox.addEventListener("focus", () => {
			isSearchPanelOpen = true;
			window.scrollTo(0, 0);
		});
	});
	const onClick = (e: PointerEvent) => {
		const target = e.target as Element | null;
		if (
			target != searchBox &&
			!target?.matches("#top-nav") &&
			!topNav?.contains(target)
		) {
			isSearchPanelOpen = false;
		}
	};
	const onKeyPress = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			Search();
		}
	};
	const Search = () => {
		isSearchPanelOpen = false;
		goto(
			"/world/search?" +
				SearchRequestToSiteQueryString({
					query: searchBox?.value ?? "",
					dishTypes: dishFilters,
					dietIncludes: dietIncludeFilters,
					dietExcludes: dietExcludeFilters,
				}),
		);
		window.dispatchEvent(new PopStateEvent("popstate"));
	};
	const ToggleDishFilter = (filter: number) => {
		const dishIdx = dishFilters.indexOf(filter);
		if (dishIdx < 0) {
			dishFilters.push(filter);
		} else {
			dishFilters.splice(dishIdx, 1);
		}
	};
	const ToggleDietFilter = (
		type: "off" | "include" | "exclude",
		filter: number,
	) => {
		const includeIdx = dietIncludeFilters.indexOf(filter);
		if (type === "include") {
			if (includeIdx < 0) {
				dietIncludeFilters.push(filter);
			}
		} else if (includeIdx >= 0) {
			dietIncludeFilters.splice(includeIdx, 1);
		}

		const excludeIdx = dietExcludeFilters.indexOf(filter);
		if (type === "exclude") {
			if (excludeIdx < 0) {
				dietExcludeFilters.push(filter);
			}
		} else if (excludeIdx >= 0) {
			dietExcludeFilters.splice(excludeIdx, 1);
		}
	};
	const paramsToArray = (params: URLSearchParams, key: string) => {
		return (
			params
				.get(key)
				?.split(",")
				?.map((s) => parseInt(s)) ?? []
		);
	};
	const locationChanged = () => {
		const params = new URLSearchParams(location.search);
		const searchQuery = params.get("query");
		if (searchBox) {
			if (searchQuery) {
				searchBox.value = decodeURIComponent(searchQuery);
			} else {
				searchBox.value = "";
			}
		}
		dishFilters = paramsToArray(params, "dishTypes");
		dietIncludeFilters = paramsToArray(params, "dietIncludes");
		dietExcludeFilters = paramsToArray(params, "dietExcludes");
	};
</script>

<svelte:window onpopstate={locationChanged} />
<svelte:document onclick={(e) => onClick(e as any)} />
<nav
	id="top-nav"
	class="w-full bg-stone-900 px-4 py-2 md:flex items-center space-x-4 z-50 sticky top-0"
>
	<a
		href="/world/"
		use:route
		class="mb-2 md:w-auto text-center md:mb-0 text-2xl font-bold flex items-center space-x-4 justify-center"
	>
		<Emoji>🗺️</Emoji>
		<span>Areund the World</span>
	</a>
	<div class="grid gap-6 grow">
		<InputGroup.Root>
			<InputGroup.Input
				bind:ref={searchBox}
				onkeypress={onKeyPress}
				placeholder="Search Recipes..."
			/>
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
		{isSearchPanelOpen ? '' : 'translate-y-[-2000px]'}
	"
>
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
		<div
			class="my-3 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
		>
			{#await metadataPromise}
				<Skeleton class="w-full h-4" />
			{:then metadata}
				{#each metadata.diets as diet}
					<DietSwitch
						{diet}
						{ToggleDietFilter}
						included={dietIncludeFilters.indexOf(diet.id) >= 0}
						excluded={dietExcludeFilters.indexOf(diet.id) >= 0}
					/>
				{/each}
			{/await}
		</div>
		<div class="flex w-full justify-between">
			<Button
				variant="link"
				onclick={() => {
					dishFilters = [];
					dietExcludeFilters = [];
					dietIncludeFilters = [];
				}}>Clear Filters</Button
			>
			<Button variant="default" onclick={Search}>Search</Button>
		</div>
	</div>
</nav>
