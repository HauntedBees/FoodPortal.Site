<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import type { Song } from "$lib/types";
	import SongDisplayInner from "./song-display-inner.svelte";
	let {
		song,
		showFlag,
	}: {
		song: Song;
		showFlag?: boolean;
	} = $props();
</script>

<li>
	{#if song.translation}
		<Popover.Root>
			<Popover.Trigger class="w-full md:w-auto" openOnHover>
				<SongDisplayInner
					textClass="underline decoration-dotted"
					{song}
					{showFlag}
				/>
			</Popover.Trigger>
			<Popover.Content>
				<p>{song.translation}</p>
			</Popover.Content>
		</Popover.Root>
	{:else}
		<SongDisplayInner {song} {showFlag} />
	{/if}
</li>
