<template>
<v-row class="px-3 mt-2">
	<v-col>
		<v-sheet shaped class="py-2 px-5">
			<h3>Ah dang there was an error.</h3>
			<p style="text-indent:4em" class="pt-3">
				Sorry abeut that but something broke while trying to load all the information for this page. Try refreshing and hopefully that will fix it. If it doesn't,
				then something might be broken big-time, for real, so please if you'd be so kind do let me know by reaching out to me at
				<a href="mailto:fench@hauntedbees.com">fench@hauntedbees.com</a> by email or <ax href="https://www.twitter.com/hauntedbees">@hauntedbees</ax> on Twitter.
			</p>
		</v-sheet>
	</v-col>
</v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class ErrorMessage extends Vue { }
</script>