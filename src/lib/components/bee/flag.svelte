<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import type { FromCountryItem, BaseCountry } from '$lib/types';
	let { country }: { country: FromCountryItem | BaseCountry } = $props();
	let countryCode = $derived(("ckey" in country ? country.ckey : country.countryCode).toLowerCase());
	let countryName = $derived("countryName" in country ? country.countryName : country.name);
</script>
<Tooltip.Root>
	<Tooltip.Trigger>
		<img
			src="/world/assets/flags/{countryCode}.svg"
			alt={countryName}
			class="h-6 w-6"
		>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>{countryName}</p>
	</Tooltip.Content>
</Tooltip.Root>