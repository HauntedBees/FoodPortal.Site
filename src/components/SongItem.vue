<template>
<li>
	<span v-if="showFlag" :class="'mr-1 flag-icon flag-icon-' + song.countryCode.toLowerCase()" />
	<spantt v-if="song.tl" :tooltip="song.tl">
		<ax class="dotted-underline" :href="song.url">{{song.name}} <Emoji v-if="song.favorite" emoji="1F31F" size="16" /></ax>
	</spantt>
	<ax v-if="!song.tl" :href="song.url">{{song.name}} <Emoji v-if="song.favorite" emoji="1F31F" size="16" /></ax>
</li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SongInfo } from 'src/assets/world_data';
@Component
export default class SongItem extends Vue {
    @Prop() song!:SongInfo;
	@Prop() showFlag?:boolean;
}
</script>