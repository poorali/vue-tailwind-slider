<template>
    <div class="h-64 md:h-70 lg:h-86 hidden relative"
         ref="sliderItem"
         @mouseover="zoomStarted($event)"
         @mousemove="zooming($event)"
         @mouseout="zoomEnded"
         @click="$parent.$emit('toggle-popup')"
         v-bind:class="{'show':( activeItem === this.id || $parent.activeItem === this.id) && !$parent.hasActiveAnimation}">
        <img ref="sliderImage"
             class="h-full w-full object-cover select-disable" :src="this.src" :alt="this.alt"/>
        <div ref="zoomBox" class="bg-transparent cursor-zoom border-2 border-red-500 w-20 h-20 absolute"
             v-bind:class="{'hidden': !isZooming}">

        </div>
        <div v-if="isZooming" class="absolute border-red-500 rounded border-4 bg-red-50 zoom-container">
            <img class="select-disable" ref="zoomImage" :src="largeImage || src"/>
        </div>
    </div>
</template>
<script>
export {default} from "./Hooks"
</script>
<style scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.cursor-zoom {
    cursor: crosshair;
}

.show {
    display: flex !important;
    animation: fadeIn 1s ease-out forwards;
}

.zoom-container {
    width: 420px;
    height: 420px;
    left: 120%;
    top: -50%;
    overflow: hidden;
}

img{
    max-width: unset !important;
}
</style>