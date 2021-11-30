<template>
<v-container>
	<v-sheet shaped class="pa-5">
        <h2 v-if="addtlHeader">{{addtlHeader}}</h2>
        <p v-for="text in addtlText" :key="text" v-html="text"></p>
		<h2>Legal Deets and Such</h2>
        <p>
            This site is © 2018-{{(new Date()).getFullYear()}} <a href="mailto:fench@hauntedbees.com">Sean Finch</a> and <a href="https://www.hauntedbees.com/">Haunted Bees Productions</a>.
            All source code is licensed under the <axg href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPLv3 license</axg>. 
            All photographs and text are my own (unless otherwise specified) and are licensed under the <axg href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license.</axg>
            Emoji display is handled by <axg href="https://github.com/twitter/twemoji">Twemoji</axg>, which is licensed under the <axg href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 license.</axg>
            The full site source containing all code, text, and images, is available <axg href="https://github.com/HauntedBees/FoodPortal.Site">on GitHub</axg>. 
        </p>
        <p>
            All linked pages belongs to their respective owners. We are not associated with any of the sites, artists, people, companies, etc. linked to on these pages. Links 
            are only for reference purposes and we do not endorse their creators, website, website providers, or anything else. But like, if we're accidentally linking to 
            some sort of Nazi site or something like that, that's an accident, so please let us know so we can stop doing that.
        </p>
        <p v-for="text in addtlLegalText" :key="text" v-html="text"></p>
        <p>
            We use a self-hosted <axg href="https://awstats.sourceforge.io/">AWStats</axg> installation for webpage analytics. Your data will never leave Haunted Bees'
            servers or be shared with anybody else. We just want to know where people are coming from in the event this page gets popular or something, you know what
            I mean? Like, do we thank some blogger? A Facebook post? Reddit? Only one way to find out and that's analytics, baby! If you're really worried about your 
            data and such, check out <a href="https://www.hauntedbees.com/privacypolicy">our full privacy policy</a> for more information.
        </p>
        <h2>Credits</h2>
        <p>Additional code used in this project is licensed as follows:</p>
        <ul>
            <li>
                <axg href="https://github.com/zloirock/core-js#readme">core-js</axg> is licensed under the <axg href="https://github.com/zloirock/core-js/blob/master/LICENSE">MIT License.</axg>
            </li>
            <li>
                <axg href="https://day.js.org/">Day.js</axg> is licensed under the <axg href="https://github.com/iamkun/dayjs/blob/dev/LICENSE">MIT License.</axg>
            </li>
            <li>
                <axg href="https://flagicons.lipis.dev/">flag-icon-css</axg> is licensed under the <axg href="https://github.com/lipis/flag-icon-css/blob/master/LICENSE">MIT License.</axg>
            </li>
            <li>
                <axg href="https://hammerjs.github.io/">hammer.js</axg> is licensed under the <axg href="https://github.com/hammerjs/hammer.js/blob/master/LICENSE.md">MIT License.</axg>
            </li>
            <li>
                <axg href="https://github.com/ariutta/svg-pan-zoom">svg-pan-zoom</axg> is licensed under the <axg href="https://github.com/ariutta/svg-pan-zoom/blob/master/LICENSE">BSD 2-Clause License.</axg>
            </li>
            <li>
                <axg href="https://vuejs.org/">Vue.js</axg> is licensed under the <axg href="https://github.com/vuejs/vue/blob/dev/LICENSE">MIT License.</axg>
            </li>
            <li>
                <axg href="https://github.com/VictorCazanave/vue-svg-map">vue-svg-map</axg> is licensed under the <axg href="https://github.com/VictorCazanave/vue-svg-map/blob/master/LICENSE">MIT License.</axg>
            </li>
            <li>
                <axg href="https://simplemaps.com/resources/svg-world">Robinson SVG Map</axg> is licensed under the <axg href="https://simplemaps.com/resources/svg-license">MIT License.</axg>
            </li>
            <li>
                <axg href="https://vuetifyjs.com/en/">Vuetify</axg> is licensed under the <axg href="https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md">MIT License.</axg>
            </li>
        </ul>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AbeutPage extends Vue {
    addtlHeader = "";
    addtlText:string[] = [];
    addtlLegalText:string[] = [];
    created() {
        switch(this.$route.matched[0].path) {
            case "/world":
                this.addtlHeader = "Areund the World v2.3";
                this.addtlText = [
                    `I'm using <a href='https://en.wikipedia.org/wiki/List_of_sovereign_states' target='_blank' rel='external nofollow noopener noreferrer'>Wikipedia's list of sovereign states</a>
                    as my primary reference for this site, which means I'll be including places that may not universally be considered countries, so please don't think I'm making a political
                    statement by including them on here. I might be, but mostly I just want to try a bunch of food and maybe learn a little bit more about the world.
                    I am not a geopolitical expert and a country's presence or name on this site should not be interpreted as an endorsement of that country's government or an
                    attack on any other country's government. If a place says they're a country with a certain name, I'm gonna quote them on that. If another place says they aren't,
                    that's not my battle.`,
                    
                    `Secondly, I am from California and I speak English, with a wee bit of Spanish. If you are looking for 100% authenticity on regional dishes, you
                    should probably consult a resource from that region, not some dude in California with too much free time and internet access. If you see a factual issue with any
                    content on this site (i.e. inaccurate information about a country, a recipe is really inauthentic), I apologise; please let me know so I can correct these issues.
                    Alternatively, if you are more knowledgeable about a given country's cuisine or music than I am (you are) and have a recommendation or suggestion, even for a country
                    I haven't covered yet, I'd love to hear from you, too! I try to avoid mentioning current events in country descriptions, but when I do they may become outdated -
                    if that happens, let me know! I will regularly try to update those when appropriate, and I will try to ensure that all external links are still valid. If
                    you find a dead link to a recipe or song, let me know so I can replace it with an archived version or a different link.`,
                    
                    `Some of the dishes hosted here have recipes in the <a href='https://github.com/HauntedBees/DataBee' target='_blank' rel='external nofollow noopener noreferrer'>DataBee Recipe Format</a>. DataBee is an app also
                    produced by Haunted Bees. DataBee Recipes can be found by clicking on the bee icon next to recipes, and are adapted from the linked recipes technically
                    without permission. I'll worry about the ethics or legality of that once I get a Cease and Desist.`,

                    `If you'd like a copy of this site's data, a JSON export is updated regularly on <a href='https://github.com/HauntedBees/BeeAPI/blob/main/Foodportal/world_export.json' target='_blank' rel='external nofollow noopener noreferrer'>GitHub</a>.`
                ];
                break;
            case "/spice":
                this.addtlLegalText = [
                    `If you'd like a copy of this site's data, a JSON export is updated regularly on <a href='https://github.com/HauntedBees/BeeAPI/blob/main/Foodportal/spice_export.json' target='_blank' rel='external nofollow noopener noreferrer'>GitHub</a>.`
                ];
                break;
            case "/vegan":
                this.addtlLegalText = [`
                    We are not associated with any of the companies whose products are reviewed on this site. We have received no remuneration for these reviews; all 
                    products were purchased at retail price in various grocery stores and rated based on personal tastes.
                `];
                break;
        }
    }
}
</script>