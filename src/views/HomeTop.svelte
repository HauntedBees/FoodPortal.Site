<script lang="ts">
    import { bee } from "$lib/api";
    import type { HomePageResponse } from "$lib/types";
    import * as Card from "$lib/components/ui/card/index.js";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import Progress from "$lib/components/ui/progress/progress.svelte";
    import { route } from "@mateothegreat/svelte5-router";
    const homeDataPromise = $state(bee.getShared<HomePageResponse>("homepage"));
</script>

<Card.Root class="mx-0 md:ml-4 md:mr-8">
    <Card.Header class="space-y-4">
        <p>
            Welcome to <em>Areund the World</em>, my journey cooking food and
            listening to music from around the world, with the eventual goal of
            doing so for every country*! Want to know more? Click
            <a href="/world/about" class="underline" use:route>here</a>!
            Otherwise, scroll down, click on the map, or pick a country to
            explore the world!
        </p>
        {#await homeDataPromise}
            <Skeleton class="w-full h-5 rounded-full" />
            <Skeleton class="w-full h-5 rounded-full" />
        {:then homeData}
            <Progress
                value={homeData.countriesDownWithCurrentLetter}
                max={homeData.countriesWithCurrentLetter}
            >
                {homeData.countriesDownWithCurrentLetter} / {homeData.countriesWithCurrentLetter}
                regions starting with '{homeData.currentLetter}'
            </Progress>
            <Progress
                value={homeData.countriesDown}
                max={homeData.totalCountries}
            >
                {homeData.countriesDown} / {homeData.totalCountries} regions of the
                world
            </Progress>
        {/await}
    </Card.Header>
</Card.Root>
