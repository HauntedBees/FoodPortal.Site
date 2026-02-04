<script lang="ts">
	import type { MetadataResponse, Food } from "$lib/types";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
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
	}: { food: Food; hidePlaylistOnDesktop?: boolean } = $props();
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
		<Card.Title class="flex justify-between items-center">
			<div class="flex items-center space-x-2">
				<Flag country={food} />
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Emoji size="sm" codepoint={food.dishEmoji} />
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>{food.dish}</p>
					</Tooltip.Content>
				</Tooltip.Root>
				<a class="text-2xl" href={food.url} target="_blank">
					{food.name}
				</a>
			</div>
			<div class="text-nowrap">
				{dayjs(food.date).format("MMM D, YYYY")}
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
		<div
			class={hidePlaylistOnDesktop
				? "md:hidden clear-both"
				: "clear-both"}
		>
			<span class="font-bold ml-2 mb-2">Cooking Playlist</span>
			<ul class="ml-8 mt-1 list-disc">
				{#each food.songs as song}
					<li>
						<SongDisplay {song} />
					</li>
				{/each}
			</ul>
		</div>
	</Card.Content>
</Card.Root>
