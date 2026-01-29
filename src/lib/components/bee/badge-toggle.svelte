<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
    import Badge, { type BadgeVariant } from "../ui/badge/badge.svelte";

	let {
		ref = $bindable(null),
		href,
		class: className,
		active,
		activeColor,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		active?: boolean;
		activeColor?: string;
		variant?: BadgeVariant;
	} = $props();
</script>
<Badge
	{href}
	{variant}
	class={cn("cursor-pointer", active ? "text-white" : "text-accent/50", className)}
	style={active ? `background-color: #${activeColor}` : ""}
	{...restProps}
>
	{@render children?.()}
</Badge>
