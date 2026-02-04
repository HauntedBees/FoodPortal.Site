<script lang="ts">
    import Emoji from "./emoji.svelte";
    import { cn } from "../../utils";
    import type { NamedEmoji } from "$lib/types";
    import { DietColorMappingPromiseFunc } from "$lib/helpers.svelte";
    const dietToggleBaseClasses = "px-2 py-1 rounded-full cursor-pointer";
    const dietToggleActiveClasses = "font-bold";
    let {
        diet,
        included,
        excluded,
        ToggleDietFilter,
    }: {
        diet: NamedEmoji;
        included: boolean;
        excluded: boolean;
        ToggleDietFilter: (
            state: "off" | "include" | "exclude",
            value: number,
        ) => void;
    } = $props();
    let backgroundColor = $state("000000");
    DietColorMappingPromiseFunc().then((func) => {
        backgroundColor = func[diet.name] ?? "000000";
    });
</script>

<div
    class="text-sm rounded-full text-primary-foreground bg-primary flex items-center align-center justify-center"
    style="background-color: #{backgroundColor}"
>
    <div class="w-[100px]">
        <div class="flex items-center align-center justify-center">
            <Emoji size="xs" codepoint={diet.emoji} />
            <span class="ml-2 mr-3 font-bold">{diet.name}</span>
        </div>
    </div>
    <div class="flex items-center align-center justify-center">
        <button
            onclick={() => ToggleDietFilter("off", diet.id)}
            class={cn(
                dietToggleBaseClasses,
                !included && !excluded
                    ? dietToggleActiveClasses +
                          " bg-secondary text-secondary-foreground"
                    : "",
            )}
        >
            Off
        </button>
        <button
            onclick={() => ToggleDietFilter("include", diet.id)}
            class={cn(
                dietToggleBaseClasses,
                included
                    ? dietToggleActiveClasses +
                          " bg-[#00CC00] text-secondary-foreground"
                    : "",
            )}
        >
            Include
        </button>
        <button
            onclick={() => ToggleDietFilter("exclude", diet.id)}
            class={cn(
                dietToggleBaseClasses,
                excluded
                    ? dietToggleActiveClasses +
                          " bg-[#CC0000] text-secondary-foreground"
                    : "",
            )}
        >
            Exclude
        </button>
    </div>
</div>
