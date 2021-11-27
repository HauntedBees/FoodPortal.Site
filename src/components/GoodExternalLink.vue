<template>
    <a :href="href" target="_blank" class="bee-external-link" rel="external noopener">
        <slot></slot>
    </a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class GoodExternalLink extends Vue {
    @Prop() href!:string;
}
</script>