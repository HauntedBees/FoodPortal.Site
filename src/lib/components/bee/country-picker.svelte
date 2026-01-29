<script lang="ts">
    import { bee } from "$lib/api";
    import type { MetadataResponse } from "$lib/types";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
    import Skeleton from "../ui/skeleton/skeleton.svelte";
    import Flag from "./flag.svelte";
    import { goto, route } from "@mateothegreat/svelte5-router";
	import worldmap from "../../../assets/robinson.svg?raw";
    import { onDestroy, onMount } from "svelte";
    import { cn } from "$lib/utils";
	import svgPanZoom from "svg-pan-zoom";
	let { mobileOnly, countryCode }: { mobileOnly?: boolean, countryCode?: string } = $props();
	let currentCountryCode = $state("");
	let countryFirstLetters: Record<string, string> = $state({});
	const getCountryCodeFromURL = () => {
		const url = location.href;
		if(url.indexOf("/country/") < 0) {
			return "";
		}
		return url.split("/country/")[1];
	};
	let countryCodeFromURL = $state(getCountryCodeFromURL());
	let mapInstance: SvgPanZoom.Instance | null = $state(null);
	let mapContainer: HTMLElement | null = $state(null);
	const metadataPromise = $state(bee.getShared<MetadataResponse>("Metadata"));
	const refreshCountry = (code?: string) => {
		document.querySelectorAll("path.active").forEach(q => q.classList.remove("active"));
		countryCodeFromURL = getCountryCodeFromURL();
		if(code) {
			document.querySelectorAll(`path#${code}`).forEach(q => q.classList.add("active"));
			if(countryFirstLetters[code]) {
				document.querySelectorAll(`.btn-${countryFirstLetters[code]}`).forEach(b => (b as HTMLElement).click());
			}
		};
	}
	const navigationEvent = (e: CustomEvent) => {
		countryCodeFromURL = getCountryCodeFromURL();
		currentCountryCode = e.detail.route;
		refreshCountry(e.detail.route);
	};
	const mapClickEvent = (e: Event) => {
		const countryCode = (e.target as HTMLElement).id;
		goto(`/world/country/${countryCode}`);
	}
	onMount(() => {
		document.addEventListener("pagenav", navigationEvent as any);
		if(countryCode) {
			currentCountryCode = countryCode;
			refreshCountry(countryCode);
		}
		metadataPromise.then(r => {
			r.countries.forEach(c => {
				mapContainer?.querySelectorAll(`path#${c.ckey}`).forEach(q => {
					q.classList.add("completed");
					/*const bounds = (q as SVGSVGElement).getBBox();
					mapInstance?.pan({ x: 0, y: 0 });
					const sizes = mapInstance?.getSizes();
					const realZoom = sizes?.realZoom ?? 1;
					mapInstance?.pan({
						x: -(bounds.x * realZoom) + (sizes?.width ?? 1 / 2),
						y: -(bounds.y * realZoom) + (sizes?.height ?? 1 / 2)
					});*/
				});
				countryFirstLetters[c.ckey] = c.firstLetter;
			});
			if(currentCountryCode) {
				document.querySelectorAll(`.btn-${countryFirstLetters[currentCountryCode]}`).forEach(b => (b as HTMLElement).click());
			}
			mapContainer?.querySelectorAll("path.completed").forEach(q => {
				q.addEventListener("click", mapClickEvent);
			});
		});
		const map = mapContainer?.querySelector("svg");
		if(map) {
			mapInstance = svgPanZoom(map, {
				zoomEnabled: true,
				panEnabled: true,
				preventMouseEventsDefault: false,
				fit: true,
				center: true
			});
		}
	});
	onDestroy(() => {
		document.removeEventListener("pagenav", navigationEvent as any);
		document.querySelectorAll("path.completed").forEach(q => {
			q.removeEventListener("click", mapClickEvent);
		});
	})
</script>
<div class={mobileOnly ? "block md:hidden" : ""}>
	<div class="map" bind:this={mapContainer}>
		{@html worldmap}
	</div>
	{#await metadataPromise}
		<Skeleton class="w-full h-16 rounded-lg" />
	{:then metadata} 
		<Tabs.Root value={metadata.letters[metadata.letters.length - 1]}>
			<Tabs.List class="w-full">
				{#each metadata.letters as letter}
   					<Tabs.Trigger value={letter} class="btn-{letter}">{letter}</Tabs.Trigger>
				{/each}
			</Tabs.List>
			{#each metadata.letters as letter}
				<Tabs.Content value={letter}>
					<Card.Root>
						<Card.Content>
							<ul class="mx-4 max-h-32 md:max-h-none overflow-y-auto">
								{#each metadata.countries.filter(c => c.firstLetter === letter) as country}
									<li>
										<a
											use:route
											href="/world/country/{country.ckey}"
											onclick={() => { countryCodeFromURL = country.ckey; }}
											class={cn("flex space-x-4", countryCodeFromURL == country.ckey && "font-bold")}>
											<Flag {country} />
											<span>{country.name}</span>
										</a>
									</li>
								{/each}
							</ul>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
			{/each}
		</Tabs.Root>
	{/await}
</div>