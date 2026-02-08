<script lang="ts">
    import { type Food } from "$lib/types";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import Emoji from "./emoji.svelte";
    import Badge from "../ui/badge/badge.svelte";
    import { cn } from "$lib/utils";
    let {
        food,
        colors,
    }: {
        food: Food;
        colors?: Record<string, string>;
    } = $props();
</script>

{#each food.diet as d}
    <Popover.Root>
        <Popover.Trigger openOnHover>
            <Badge
                class={cn(d.optional && "opacity-50")}
                style="background-color: #{colors?.[d.name] ?? '#CCCCCC'}"
            >
                <Emoji size="xs" codepoint={d.emoji} />
                <span class="ml-2">{d.name}</span>
            </Badge>
        </Popover.Trigger>
        <Popover.Content>
            <p>{d.description}</p>
        </Popover.Content>
    </Popover.Root>
{/each}
