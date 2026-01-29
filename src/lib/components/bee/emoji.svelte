<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import twemoji from '@twemoji/api';
	let { size, codepoint, children }: {
		size?: "xs" | "sm" | "md" | "lg", 
		codepoint?: string,
		children?: Snippet<[]>
	} = $props();
	let elem: HTMLSpanElement | undefined;
	onMount(() => {
		if(elem) {
			twemoji.parse(elem, {
				className: `emoji ${size || "md"}`
			});
		}
	});
</script>
<span bind:this={elem} class="flex items-center">
	{#if codepoint}
	{String.fromCodePoint(`0x${codepoint}` as any)}
	{:else}
	{@render children?.()}
	{/if}
</span>