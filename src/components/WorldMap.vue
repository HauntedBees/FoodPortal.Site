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
import Hammer from 'hammerjs';
import { CountryLetterInfo } from 'src/assets/world_data';
interface Point { x:number; y:number }
interface HammerEvent { type: string; deltaX:number; deltaY:number; scale:number; center:Point }
interface SVGEvent extends Event { target:SVGElement }
interface SVGOptions {
    instance:typeof svgPanZoom;
    svgElement:SVGElement;
}
@Component
export default class WorldMap extends Vue {
    target = "";
    ttx = 50; tty = 0;
    showBtn = false;
    World = World;
    @Prop() data!:{[key:string]: CountryLetterInfo};
    @Prop() focus:string|undefined;
    @Prop() realid:string|undefined;
    LocationClass(a:SVGElement) {
        if(a.id === this.focus && this.focus === this.realid) { return "selected"; }
        return this.data[a.id] === undefined ? "" : "completed";
    }
    mounted() {
        let hammer:HammerManager|null = null;
        const eventsHandler = {
            haltEventListeners: ["touchstart", "touchend", "touchmove", "touchleave", "touchcancel"],
            init: function(options:SVGOptions) {
                const instance = options.instance;
                let initialScale = 1, pannedX = 0, pannedY = 0;
                hammer = new Hammer(options.svgElement, { 
                    inputClass: window.PointerEvent ? Hammer.PointerEventInput : Hammer.TouchInput
                });
                hammer.get("pinch").set({ enable: true });
                hammer.on("panstart panmove", (ev:HammerEvent) => {
                    if(ev.type === "panstart") {
                        pannedX = 0;
                        pannedY = 0;
                    }
                  instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
                  pannedX = ev.deltaX
                  pannedY = ev.deltaY;
                });
                hammer.on("pinchstart pinchmove", (ev:HammerEvent) => {
                    if(ev.type === "pinchstart") {
                        initialScale = instance.getZoom();
                        instance.zoomAtPoint(initialScale * ev.scale, { x: ev.center.x, y: ev.center.y });
                    }
                    instance.zoomAtPoint(initialScale * ev.scale, { x: ev.center.x, y: ev.center.y });
                });
                options.svgElement.addEventListener("touchmove", (e:Event) => e.preventDefault());
            },
            destroy: function() { if(hammer) { hammer.destroy(); } }
        }
        const mapCtrl = svgPanZoom(".svg-map", {
            zoomEnabled: true,
            fit: true,
            center: true,
            customEventsHandler: eventsHandler,
            zoomScaleSensitivity: 0.5
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
            const newPath = "/world/" + a.target.id;
            if(newPath !== this.$route.path) {
                this.$router.push(newPath);
            }
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
</script>