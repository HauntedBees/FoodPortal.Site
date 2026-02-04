<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { route } from "@mateothegreat/svelte5-router";
</script>

<Card.Root>
    <Card.Header class="space-y-4">
        <p>
            Welcome to <em>Areund the World</em>, my journey cooking food and
            listening to music from around the world, with the eventual goal of
            doing so for every country*! Click
            <a href="/world/about" use:route>here</a> to learn more!
        </p>
    </Card.Header>
</Card.Root>
