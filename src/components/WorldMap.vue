<template>
<div @mouseleave="MouseOut">
    <v-tooltip top v-model="showBtn" :position-x="ttx" :position-y="tty">
        <span>{{target}}</span>
    </v-tooltip>
    <SvgMap
        :map="World"
        @click="Click"
        @mouseover="MouseOver"
        :location-class="LocationClass" />
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import svgPanZoom from 'svg-pan-zoom';
import World from 'src/assets/robinson';
import { CountryInfo } from 'src/assets/data';
@Component
export default class WorldMap extends Vue {
    target = "";
    ttx = 50; tty = 0;
    showBtn = false;
    World = World;
    @Prop() data!:CountryInfo;
    @Prop() focus:string|undefined;
    @Prop() realid:string|undefined;
    LocationClass(a:SVGElement) {
        if(a.id === this.focus && this.focus === this.realid) { return "selected"; }
        return this.data[a.id] === undefined ? "" : "completed";
    }
    mounted() {
        const mapCtrl = svgPanZoom(".svg-map", {
            zoomEnabled: true,
            fit: true,
            center: true
        });
        if(this.focus) {    
            const targ:unknown = document.getElementById(this.focus);
            if(targ === null) { return; }

            const sizes = mapCtrl.getSizes();
            const relbounds = (targ as HTMLElement).getBoundingClientRect();
            const bounds = (targ as SVGGraphicsElement).getBBox();

            const widthRatio = sizes.width / relbounds.width;
            const heightRatio = sizes.height / relbounds.height;
            const zoomAmount = Math.min(widthRatio, heightRatio);

            const x = (bounds.x + bounds.width / 2) * sizes.realZoom;
            const y = (bounds.y + bounds.height / 2) * sizes.realZoom;
            mapCtrl.zoomAtPointBy(zoomAmount / 2, { x: x, y: y });
        }
    }
    Click(a:SVGEvent) {
        if(this.data[a.target.id]) {
            this.$router.push("/world/" + a.target.id);
        }
    }
    MouseOver(a:SVGEvent) {
        if(!a.target) { return; }
        const targ:SVGElement = a.target;
        this.target = targ.getAttribute("name") || "";
        const bbox = targ.getBoundingClientRect();
        this.ttx = bbox.x + bbox.width / 2;
        this.tty = bbox.y + bbox.height / 2;
        this.showBtn = true;
    }
    MouseOut() { this.showBtn = false; }
}
interface SVGEvent extends Event { target:SVGElement }
</script>