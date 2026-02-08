<script lang="ts">
    import type { Song } from "$lib/types";
    import { cn } from "$lib/utils";
    import Emoji from "./emoji.svelte";
    import Flag from "./flag.svelte";
    let {
        song,
        showFlag,
        textClass,
    }: {
        song: Song;
        showFlag?: boolean;
        textClass?: string;
    } = $props();
</script>

<div class="flex space-x-2 md:justify-start items-center justify-center">
    {#if showFlag}
        <Flag country={song} />
    {/if}
    <span>
        <a
            href={song.url}
            target="_blank"
            class={cn("text-center md:text-left", textClass)}>{song.name}</a
        >
        {#if song.translation}
            <span>ⓘ</span>
        {/if}
    </span>
    {#if song.favorite}
        <Emoji size="xs">🌟</Emoji>
    {/if}
</div>
