<script lang="ts">
	import type { Food } from "$lib/types";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import Emoji from "./emoji.svelte";
	import Flag from "./flag.svelte";
	import dayjs from "dayjs";
	import SongDisplay from "./song-display.svelte";
	import DietListing from "./diet-listing.svelte";
	import {
		DietColorMappingPromiseFunc,
		DishColorMappingPromiseFunc,
	} from "$lib/helpers.svelte";
	let {
		food,
		hidePlaylistOnDesktop,
		alwaysHidePlaylist,
	}: {
		food: Food;
		hidePlaylistOnDesktop?: boolean;
		alwaysHidePlaylist?: boolean;
	} = $props();
	const FormatURL = (url: string) => new URL(url).hostname;
	const emojiMappingPromise = $state(DietColorMappingPromiseFunc());
	let cardBackgroundColor = $state("#999999");
	DishColorMappingPromiseFunc().then((res) => {
		if (res[food.dish]) {
			cardBackgroundColor = res[food.dish];
		}
	});
</script>

<Card.Root
	class="w-full bg-linear-to-b from-[#FF0000] to-bg-primary to-30% border-b-background"
	style="--tw-gradient-from: #{cardBackgroundColor}"
>
	<Card.Header>
		<Card.Title>
			<div class="flex justify-between items-center">
				<div class="flex items-center space-x-2">
					<Flag country={food} />
					<Popover.Root>
						<Popover.Trigger openOnHover>
							<Emoji size="sm" codepoint={food.dishEmoji} />
						</Popover.Trigger>
						<Popover.Content>
							<p>{food.dish}</p>
						</Popover.Content>
					</Popover.Root>
					<a
						class="hidden md:block text-2xl"
						href={food.url}
						target="_blank"
					>
						{food.name}
					</a>
				</div>
				<div class="flex gap-2">
					<span class="text-nowrap">
						{dayjs(food.date).format("MMM D, YYYY")}
					</span>
					<a
						target="_blank"
						title="Link directly to this entry."
						href="https://www.hauntedbees.com/world/recipe/{food.urlkey}"
						><Emoji size="xs">🔗</Emoji></a
					>
				</div>
			</div>
			<div class="md:hidden w-full text-center">
				<a class="text-3xl" href={food.url} target="_blank">
					{food.name}
				</a>
			</div>
		</Card.Title>
		<Card.Description>
			<a href={food.url} target="_blank"
				>See the full recipe at {FormatURL(food.url)}.</a
			>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<img
			src="https://www.hauntedbees.com/food//img_world/{food.img}"
			alt={food.name}
			class="float-start max-w-[50%] max-h-[256px] aspect-square mr-4 my-2 rounded-lg"
		/>
		<p class="food-description">
			{@html food.description}
		</p>
		<div class="flex space-x-2 my-4 flex-wrap">
			{#await emojiMappingPromise}
				<DietListing {food} />
			{:then emojiMapping}
				<DietListing {food} colors={emojiMapping} />
			{:catch}
				<DietListing {food} />
			{/await}
		</div>
		{#if !alwaysHidePlaylist}
			<div
				class={hidePlaylistOnDesktop
					? "md:hidden clear-both"
					: "clear-both"}
			>
				<div
					class="font-bold ml-2 mb-2 w-full text-center md:text-left"
				>
					Cooking Playlist
				</div>
				<ul class="md:ml-8 mt-1 w-full">
					{#each food.songs as song}
						<SongDisplay {song} />
					{/each}
				</ul>
			</div>
		{/if}
	</Card.Content>
</Card.Root>
