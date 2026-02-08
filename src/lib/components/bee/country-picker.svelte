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
	import svgPanZoom from "svg-pan-zoom";
	import { getCountry } from "$lib/helpers.svelte";
	import Hammer from "hammerjs";
	let {
		mobileOnly,
		countryCode,
	}: {
		mobileOnly?: boolean;
		countryCode?: string;
	} = $props();

	let currentCountryCode = $state(getCountry());
	$effect(() => {
		currentCountryCode = getCountry();
		document
			.querySelectorAll("path.active")
			.forEach((q) => q.classList.remove("active"));
		if (currentCountryCode) {
			document
				.querySelector(`path#${currentCountryCode}`)
				?.classList.add("active");
			if (countryFirstLetters[currentCountryCode]) {
				(
					document.querySelector(
						`#btn-${countryFirstLetters[currentCountryCode]}`,
					) as HTMLElement
				).click();
			}
		}
	});
	let countryFirstLetters: Record<string, string> = $state({});
	let mapInstance: SvgPanZoom.Instance | null = $state(null);
	let mapContainer: HTMLElement | null = $state(null);
	const metadataPromise = $state(bee.getShared<MetadataResponse>("metadata"));

	const mapClickEvent = (e: Event) => {
		const countryCode = (e.target as HTMLElement).id;
		goto(`/world/country/${countryCode}`);
	};
	onMount(() => {
		metadataPromise.then((r) => {
			r.countries.forEach((c) => {
				mapContainer
					?.querySelector(`path#${c.ckey}`)
					?.classList.add("completed");
				/*const bounds = (q as SVGSVGElement).getBBox();
					mapInstance?.pan({ x: 0, y: 0 });
					const sizes = mapInstance?.getSizes();
					const realZoom = sizes?.realZoom ?? 1;
					mapInstance?.pan({
						x: -(bounds.x * realZoom) + (sizes?.width ?? 1 / 2),
						y: -(bounds.y * realZoom) + (sizes?.height ?? 1 / 2)
					});*/
				countryFirstLetters[c.ckey] = c.firstLetter;
			});
			if (currentCountryCode) {
				(
					document.querySelector(
						`#btn-${countryFirstLetters[currentCountryCode]}`,
					) as HTMLElement
				).click();
			}
			mapContainer?.querySelectorAll("path.completed").forEach((q) => {
				q.addEventListener("click", mapClickEvent);
			});
		});
		const map = mapContainer?.querySelector("svg");
		let hammer: any;
		if (map) {
			mapInstance = svgPanZoom(map, {
				zoomEnabled: true,
				dblClickZoomEnabled: false,
				preventMouseEventsDefault: false,
				panEnabled: true,
				fit: true,
				center: true,
				customEventsHandler: {
					haltEventListeners: [
						"touchstart",
						"touchend",
						"touchmove",
						"touchleave",
						"touchcancel",
					],
					init: function (options) {
						const instance = options.instance;
						let initialScale = 1;
						let pannedX = 0,
							pannedY = 0;

						hammer = new Hammer(options.svgElement, {
							inputClass: Hammer.PointerEventInput,
						});

						// Handle pan
						hammer.on("panstart panmove", function (ev: any) {
							// On pan start reset panned variables
							if (ev.type === "panstart") {
								pannedX = 0;
								pannedY = 0;
							}

							// Pan only the difference
							instance.panBy({
								x: ev.deltaX - pannedX,
								y: ev.deltaY - pannedY,
							});
							pannedX = ev.deltaX;
							pannedY = ev.deltaY;
						});
						// Enable pinch
						hammer.get("pinch").set({ enable: true });

						// Handle pinch
						hammer.on("pinchstart pinchmove", function (ev: any) {
							// On pinch start remember initial zoom
							if (ev.type === "pinchstart") {
								initialScale = instance.getZoom();
								instance.zoomAtPoint(initialScale * ev.scale, {
									x: ev.center.x,
									y: ev.center.y,
								});
							}

							instance.zoomAtPoint(initialScale * ev.scale, {
								x: ev.center.x,
								y: ev.center.y,
							});
						});

						// Prevent moving the page on some devices when panning over SVG
						options.svgElement.addEventListener(
							"touchmove",
							function (e) {
								e.preventDefault();
							},
						);
					},

					destroy: function () {
						hammer.destroy();
					},
				},
			});
		}
	});
	onDestroy(() => {
		document.querySelectorAll("path.completed").forEach((q) => {
			q.removeEventListener("click", mapClickEvent);
		});
	});
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
					<Tabs.Trigger value={letter} id="btn-{letter}"
						>{letter}</Tabs.Trigger
					>
				{/each}
			</Tabs.List>
			{#each metadata.letters as letter}
				<Tabs.Content value={letter}>
					<Card.Root>
						<Card.Content>
							<ul
								class="mx-4 max-h-32 md:max-h-none overflow-y-auto"
							>
								{#each metadata.countries.filter((c) => c.firstLetter === letter) as country}
									<li>
										<a
											use:route={{
												active: { class: "font-bold" },
											}}
											href="/world/country/{country.ckey}"
											onclick={() => {
												countryCode = country.ckey;
											}}
											class="flex space-x-4 py-3 md:py-1"
										>
											<Flag {country} />
											<span> {country.name}</span>
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
