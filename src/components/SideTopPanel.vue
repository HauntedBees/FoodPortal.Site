<template>
<v-col cols="12" md="3" xl="2" class="pt-6">
    <slot name="top" />
    <v-expansion-panels :disabled="!mobile && !$slots.headerb" v-model="open">
        <v-expansion-panel :class="'rounded-tl-xl ' + ($slots.headerb ? 'rounded-b-0' : 'rounded-br-xl')">
            <v-expansion-panel-header class="side-header">
                <h4 class="pa-2"><slot name="header" /></h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <slot name="content" />
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="$slots.headerb" :class="'mt-0 rounded-t-0 ' + ($slots.headerc ? 'rounded-b-0' : 'rounded-br-xl')">
            <v-expansion-panel-header class="side-header">
                <h4 class="pa-2"><slot name="headerb" /></h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <slot name="contentb" />
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="$slots.headerc" class="mt-0 rounded-t-0 rounded-br-xl">
            <v-expansion-panel-header class="side-header">
                <h4 class="pa-2"><slot name="headerc" /></h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <slot name="contentc" />
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</v-col>
</template>
<style lang="scss">
.side-header { color: #FFFFFF }
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class SideTopPanel extends Vue {
    open = 0;
    get mobile() {
        switch(this.$vuetify.breakpoint.name) {
            case "xs":
            case "sm": return true;
            default: return false;
        }
    }
    get desktopOpen() {
        const res = [0];
        if(this.$slots.headerb) { res.push(1); }
        if(this.$slots.headerc) { res.push(2); }
        return res;
    }
    created() { this.open = this.mobile ? -1 : 0; }
    mounted() { window.addEventListener("resize", this.onResize); }
    beforeDestroy() { if(window) { window.removeEventListener("resize", this.onResize); } }
    onResize() {
        setTimeout(() => {
            if(!this.mobile && this.open !== 0) { this.open = 0; }
        }, 1000);
    }
}
</script>