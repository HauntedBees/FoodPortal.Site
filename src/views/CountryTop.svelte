<script lang="ts">
    import { bee } from "$lib/api";
    import type { CountryResponse } from "$lib/types";
    import * as Card from "$lib/components/ui/card/index.js";
    import Flag from "$lib/components/bee/flag.svelte";
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    let { route }: { route: { result: any } } = $props();
    let countryCode: string = $derived(
        route?.result?.path?.params?.countryCode,
    );
    let countryPromise = $derived(
        countryCode
            ? bee.getShared<CountryResponse>("country", [countryCode])
            : new Promise<CountryResponse>((_resolve, reject) =>
                  reject("no country code!"),
              ),
    );
</script>

<div
    class="bg-accent text-accent-foreground px-5 py-1 rounded-full mx-3 mt-1 md:mt-0 md:ml-0 md:mr-5"
>
    {#await countryPromise}
        <Skeleton class="w-64 h-8 rounded-full" />
    {:then country}
        {#if "empty" in country}
            <Card.Title class="flex text-2xl items-center">
                Country Not Found
            </Card.Title>
        {:else}
            <Card.Title class="flex text-2xl items-center space-x-2">
                <Flag {country} />
                <span class="ml-2">{country.name}</span>
            </Card.Title>
        {/if}
    {:catch}
        <Card.Title class="flex text-2xl items-center">
            Country Not Found
        </Card.Title>
    {/await}
</div>
