<script lang="ts">
    import { bee } from "$lib/api";
    import type { Food, Song } from "$lib/types";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import Entry from "$lib/components/bee/entry.svelte";
    import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
    import SongDisplay from "$lib/components/bee/song-display.svelte";
    import Error from "$lib/components/bee/error.svelte";
    const favoritesPromise = $state(
        bee.getShared<{ food: Food[]; music: Song[] }>("favorites"),
    );
</script>

<svelte:head>
    <title>Areund the World - Favorites</title>
</svelte:head>
<div class="mx-3 md:mx-4 space-y-4">
    <div class="mx-3 md:mx-4 grid grid-cols-1 md:grid-cols-5 gap-2">
        {#await favoritesPromise}
            <div class="col-span-1 md:col-span-3 space-y-4">
                <Skeleton class="w-64 h-6 rounded-full" />
                <Skeleton class="w-64 h-6 rounded-full" />
                <SkeletonEntry />
                <SkeletonEntry />
                <SkeletonEntry />
            </div>
            <div class="col-span-1 md:col-span-2 space-y-4">
                <Skeleton class="w-64 h-6 rounded-full" />
                <Skeleton class="w-48 h-4" />
                <Skeleton class="w-49 h-4" />
                <Skeleton class="w-47 h-4" />
                <Skeleton class="w-48 h-4" />
                <Skeleton class="w-50 h-4" />
            </div>
        {:then favoritesData}
            <div class="order-2 md:order-1 col-span-1 md:col-span-3 space-y-4">
                <p class="text-xl font-bold mb-2">Favorite Foods</p>
                {#each favoritesData.food as food}
                    <Entry {food} alwaysHidePlaylist />
                {/each}
            </div>
            <div class="order-1 md:order-2 col-span-1 md:col-span-2 space-y-4">
                <p class="text-xl font-bold mb-2">Favorite Songs</p>
                <ul class="ml-2">
                    {#each favoritesData.music as song}
                        <SongDisplay {song} showFlag />
                    {/each}
                </ul>
            </div>
        {:catch}
            <div class="col-span-1 md:col-span-4">
                <Error />
            </div>
        {/await}
    </div>
</div>
