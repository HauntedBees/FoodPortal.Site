<script lang="ts">
	import * as Popover from "$lib/components/ui/popover/index.js";
	import type { FromCountryItem, BaseCountry } from "$lib/types";
	let { country }: { country: FromCountryItem | BaseCountry } = $props();
	let countryCode = $derived(
		("ckey" in country ? country.ckey : country.countryCode).toLowerCase(),
	);
	let countryName = $derived(
		"countryName" in country ? country.countryName : country.name,
	);
</script>

<Popover.Root>
	<Popover.Trigger openOnHover>
		<img
			src="/world/assets/flags/{countryCode}.svg"
			alt={countryName}
			class="h-6 w-6 min-w-6"
		/>
	</Popover.Trigger>
	<Popover.Content>
		<p>{countryName}</p>
	</Popover.Content>
</Popover.Root>
