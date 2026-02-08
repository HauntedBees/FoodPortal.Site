<script>
    import { route } from "@mateothegreat/svelte5-router";
</script>

<div>
    Oops, you must have clicked a bad link or something, because this isn't a
    page that exists! <a class="underline" href="/world/" use:route
        >Click here</a
    > to go back to the home page!
</div>
