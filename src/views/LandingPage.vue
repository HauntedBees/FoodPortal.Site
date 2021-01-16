<template>
<v-container>
	<v-sheet class="rounded-xl pa-5">
		<h2>The Haunted Bees Food Portal</h2>
        <p class="px-6">
            Hey there! Welcome to the Food Portal! For some reason I do a lot of food things now, I guess. Three food things, to be precise,
            so click below to check one of them out! This page on its own isn't very interesting.
        </p>
        <v-row>
            <v-col cols="12" md="4">
                <router-link to="/world" class="no-line">
                    <v-card class="pa-5" elevation="3" color="secondary">
                        <h3>Areund the World</h3>
                        <p>
                            Take a trip with me around the world! Not actually, but through the magic of me cooking food and listening to music 
                            from around the world, and the magic of you reading about it, looking at pictures of it, and listening to some of 
                            that music, too!
                        </p>
                    </v-card>
                </router-link>
            </v-col>
            <v-col cols="12" md="4">
                <router-link to="/vegan" class="no-line">
                    <v-card class="pa-5" elevation="3" color="secondary">
                        <h3>Alt. Food Reviews</h3>
                        <p>
                            Like the taste of meat or milk or what-have-you? Want to eat less of it for whatever reason? Not sure what imitation 
                            products are worth trying out? Then look no further, because I'm drinking all the gross nut milks so you don't have to!
                        </p>
                    </v-card>
                </router-link>
            </v-col>
            <v-col cols="12" md="4">
                <router-link to="/spice" class="no-line">
                    <v-card class="pa-5" elevation="3" color="secondary">
                        <h3>Spiceapedia</h3>
                        <p>
                            Am I qualified to tell you about how to use spices and herbs to their fullest potentials? Of course not! Does the fact
                            that I spent a good amount of time doing research on this subject? Still probably not, but I'm sharing the results of that research anyway!
                        </p>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
        <p class="px-6 pt-6">
            Also if you want to see like, privacy policy stuff or whatever, <router-link to="/abeut">we've got that, too</router-link>.
        </p>
	</v-sheet>
</v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class LandingPage extends Vue { }
</script>