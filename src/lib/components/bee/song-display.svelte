<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import type { Song } from "$lib/types";
    import Emoji from "./emoji.svelte";
    import Flag from "./flag.svelte";
	let { song, showFlag }: {
		song: Song,
		showFlag?: boolean
	} = $props();
</script>
<a
	href={song.url}
	target="_blank"
	class="flex space-x-2 align-middle items-center"
	>
	{#if showFlag}
		<Flag country={song} />
	{/if}
	{#if song.translation}
		<Tooltip.Root>
			<Tooltip.Trigger class="text-left flex space-x-2">
				<span class="underline decoration-dotted">{song.name}</span>
				{#if song.favorite}
				<Emoji size="sm">🌟</Emoji>
				{/if}
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{song.translation}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	{:else}
		<span>{song.name}</span>
		{#if song.favorite}
		<Emoji size="xs">🌟</Emoji>
		{/if}
	{/if}
</a>