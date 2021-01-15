<template>
<v-container>
	<v-sheet shaped class="pa-5">
		<h2>Legal Deets and Such</h2>
        <p>
            This site is © 2018-{{(new Date()).getFullYear()}} <a href="mailto:fench@hauntedbees.com">Sean Finch</a> and <a href="https://www.hauntedbees.com/">Haunted Bees Productions</a>.
            All source code is licensed under the <ax href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPLv3 license</ax>. 
            All photographs and text are my own (unless otherwise specified) and are licensed under the <ax href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license.</ax>
            Emoji display is handled by <ax href="https://github.com/twitter/twemoji">Twemoji</ax>, which is licensed under the <ax href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 license.</ax>
            The full site source containing all code, text, and images, is available <ax href="https://github.com/HauntedBees/FoodPortal.Site">on GitHub</ax>. 
        </p>
        <p>
            All linked pages belongs to their respective owners. We are not associated with any of the sites, artists, people, companies, etc. linked to on these pages. Links 
            are only for reference purposes and we do not endorse their creators, website, website providers, or anything else. But like, if we're accidentally linking to 
            some sort of Nazi site or something like that, that's an accident, so please let us know so we can stop doing that.
        </p>
        <p v-for="text in addtltext" :key="text" v-html="text"></p>
        <p>
            We use a self-hosted <ax href="https://awstats.sourceforge.io/">AWStats</ax> installation for webpage analytics. Your data will never leave Haunted Bees'
            servers or be shared with anybody else. We just want to know where people are coming from in the event this page gets popular or something, you know what
            I mean? Like, do we thank some blogger? A Facebook post? Reddit? Only one way to find out and that's analytics, baby! If you're really worried about your 
            data and such, check out <a href="https://www.hauntedbees.com/privacypolicy">our full privacy policy</a> for more information.
        </p>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AbeutPage extends Vue {
    addtltext:string[] = [];
    created() {
        switch(this.$route.matched[0].path) {
            case "/world":
                this.addtltext = [`
                    I'm using <a href='https://en.wikipedia.org/wiki/List_of_sovereign_states' target='_blank' rel='external nofollow noopener noreferrer'>Wikipedia's list of sovereign states</a>
                    as my reference for this, which means I'll be including places that may not officially be considered countries by most of the world, so please don't think
                    I'm making a political statement by including them on here. I probably am, but mostly I just want to try a bunch of food and maybe learn a little bit more
                    about the world. I am not a geopolitical expert and a country's presence or name on this site should not be interpreted as an endorsement of that country's
                    government or an attack on any other country's government. If a place says they're a country named X, I'm gonna quote them on that. If another country says
                    they aren't, that's not my battle. Secondly, I am from California and I speak English. If you are looking for 100% authenticity on regional dishes, you
                    should probably consult a resource from that region, not some dude in California with too much free time and internet access.`,
                    `Some of the dishes hosted here have recipes in the <a href='https://www.hauntedbees.com/databee.html'>DataBee Recipe Format</a>. DataBee is an app also
                    produced by Haunted Bees. DataBee Recipes can be found by clicking on the bee icon next to recipes, and are adapted from the linked recipes technically
                    without permission. I'll worry about the ethics or legality of that once I get a Cease and Desist.`    
                ];
                break;
            case "/vegan":
                this.addtltext = [`
                    We are not associated with any of the companies whose products are reviewed on this site. We have received no remuneration for these reviews; all 
                    products were purchased at retail price in various grocery stores and rated based on personal tastes.
                `];
                break;
        }
    }
}
</script>