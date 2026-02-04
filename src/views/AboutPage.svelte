<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { route } from "@mateothegreat/svelte5-router";
	import { buttonVariants } from "$lib/components/ui/button";
	const buttonStyles = buttonVariants({ variant: "outline" });
</script>

<svelte:head>
	<title>Abeut the World</title>
</svelte:head>
<div class="space-y-4">
	<Card.Root>
		<Card.Header class="space-y-4">
			<Card.Title>Hello! This is a website!</Card.Title>
			<p>
				Welcome to my humble webbed site where I, as you have likely
				figured out already, am trying to cook food and listen to music
				from every country in the world in alphabetical order. I started
				in 2018, and I'll finish eventually. Hopefully.
			</p>
			<p>
				I'm using <a
					href="https://en.wikipedia.org/wiki/List_of_sovereign_states"
					target="_blank"
					class="underline">Wikipedia's list of sovereign states</a
				>
				as my primary reference for this site, which means I'll be including
				places that may not universally be considered countries; any given
				country's place on this site is not a personal endorsement of the
				legitimacy of their government, a refutation of the claims of another
				government that argues otherwise, or anything like that. I just want
				to try a bunch of food, listen to a bit of music, and maybe learn
				a little bit more about the world. Any complaints about the inclusion
				of any region on this site should be directed to the talk page of
				that Wikipedia article; that's not my battle.
			</p>
			<p>
				Secondly, I am from California and I speak English, with a wee
				bit of Spanish. If you are looking for 100% authenticity on
				regional dishes, you should probably consult a resource from
				that region, not some U.S.American with too much free time and
				internet access. If you see a factual issue with any content on
				this site (i.e. inaccurate information about a country not
				including the aforementioned topic of whether or not it <em
					>is</em
				> a country, a recipe is really inauthentic), I apologise; please
				let me know so I can correct these issues. Alternatively, if you
				are more knowledgeable about a given country's cuisine or music than
				I am, and have a recommendation or suggestion (even for a country
				I haven't covered yet), I'd love to hear from you, too! If you find
				a dead link to a recipe or song, let me know so I can replace it
				with an archived version or a different link.
			</p>
		</Card.Header>
	</Card.Root>
	<Card.Root>
		<Card.Header class="space-y-4">
			<Card.Title>Legal Stuff</Card.Title>
			<p>
				This site is © 2018-2026 <a
					href="mailto:fench@hauntedbees.com"
					target="_blank"
					class="underline">Sean Finch</a
				>
				and
				<a
					href="https://www.hauntedbees.com/"
					target="_blank"
					class="underline">Haunted Bees Productions</a
				>. All source code is licensed under the
				<a
					href="https://www.gnu.org/licenses/agpl-3.0.en.html"
					target="_blank"
					class="underline">GNU AGPLv3 license</a
				>. All photographs and text are my own (unless otherwise
				specified) and are licensed under the
				<a
					href="https://creativecommons.org/licenses/by-sa/4.0/"
					target="_blank"
					class="underline">CC BY-SA 4.0 license</a
				>. Emoji display is handled by
				<a
					href="https://github.com/jdecked/twemoji"
					target="_blank"
					class="underline">Twemoji</a
				>, which is licensed under the
				<a
					href="https://creativecommons.org/licenses/by/4.0/"
					target="_blank"
					class="underline">CC BY 4.0 license</a
				>. The full site source containing all code, text, and images,
				is available on
				<a
					href="https://github.com/HauntedBees/FoodPortal.Site"
					target="_blank"
					class="underline">GitHub</a
				>.
			</p>
			<p>
				All linked pages belong to their respective owners. We are not
				associated with any of the sites, artists, people, companies,
				etc. linked to on this site. Links are only for reference
				purposes and we do not endorse their creators, website, website
				providers, or anything else. But, like, if we're accidentally
				linking to some sort of Nazi site or something, that's not
				intentional, so please let us know so we can stop doing that.
			</p>
			<p>
				We use a self-hosted AWStats installation for webpage analytics.
				Your data will never leave Haunted Bees' servers or be shared
				with anybody else. We just want to know where people are coming
				from in the event this page gets popular or something, you know
				what I mean? Like, do we thank some blogger? A Facebook post?
				Reddit? Only one way to find out and that's analytics, baby! If
				you're really worried about your data and such, check out our <a
					href="https://www.hauntedbees.com/privacypolicy"
					target="_blank"
					class="underline">full privacy policy</a
				>
				for more information.
			</p>
			<p>
				Additional code used on this site includes <a
					class="underline"
					href="https://github.com/mateothegreat/svelte5-router"
					>@mateothegreat/svelte5-router</a
				>,
				<a
					class="underline"
					href="https://github.com/hampusborgos/country-flags"
					>Accurate country flags by hampusborgos</a
				>,
				<a class="underline" href="https://day.js.org/">dayjs</a>, and
				<a class="underline" href="https://svelte.dev/">Svelte</a>.
			</p>
		</Card.Header>
	</Card.Root>
	<div class="w-full flex justify-center items-center gap-2">
		<a use:route href="/world/" class={buttonStyles}>Back to Home</a>
	</div>
</div>
