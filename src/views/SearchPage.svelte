<script lang="ts">
    import { bee } from "$lib/api";
    import type { SearchResponse } from "$lib/types";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import Entry from "$lib/components/bee/entry.svelte";
    import SkeletonEntry from "$lib/components/bee/skeletons/skeleton-entry.svelte";
    import { goto } from "@mateothegreat/svelte5-router";
    import Error from "$lib/components/bee/error.svelte";

    const ParamsFromURLSearchParams = (
        params: URLSearchParams,
    ): [string, number[], number[], number[]] => {
        return [
            params.get("query") ?? "",
            params
                .get("dishTypes")
                ?.split(",")
                ?.map((s) => parseInt(s)) ?? [],
            params
                .get("dietIncludes")
                ?.split(",")
                ?.map((s) => parseInt(s)) ?? [],
            params
                .get("dietExcludes")
                ?.split(",")
                ?.map((s) => parseInt(s)) ?? [],
        ];
    };

    let searchPromise = $state(
        bee.get<SearchResponse>(
            "search",
            ParamsFromURLSearchParams(new URLSearchParams(location.search)),
        ),
    );
    const locationChanged = () => {
        const params = ParamsFromURLSearchParams(
            new URLSearchParams(location.search),
        );
        if (
            params[0] === "" &&
            !params[1].length &&
            !params[2].length &&
            !params[3].length
        ) {
            goto("/world/");
        }
        searchPromise = bee.get<SearchResponse>("search", params);
    };
</script>

<svelte:head>
    <title>Areund the World - Search Results</title>
</svelte:head>
<svelte:window onpopstate={locationChanged} />
<div class="mx-3 md:mx-4 space-y-4">
    <div class="md:mx-4">
        {#await searchPromise}
            <div class="space-y-4">
                <Skeleton class="w-64 h-6 rounded-full" />
                <SkeletonEntry />
                <SkeletonEntry />
                <SkeletonEntry />
            </div>
        {:then pageData}
            <div class="space-y-4">
                <p class="text-xl font-bold mb-2">Search Results</p>
                {#each pageData as food}
                    <Entry {food} />
                {/each}
            </div>
        {:catch}
            <Error />
        {/await}
    </div>
</div>
