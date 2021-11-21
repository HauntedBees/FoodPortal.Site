<template>
<v-sheet rounded class="pa-5 text-center">
    <v-progress-circular size="96" width="10" color="purple" indeterminate />
</v-sheet>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Loader extends Vue { }
</script>