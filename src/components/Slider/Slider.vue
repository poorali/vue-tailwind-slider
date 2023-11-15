<template>
    <div class="items-center flex justify-center relative bg-white px-10 py-5 rounded select-disable"
         @touchstart="dragStart($event)"
         @touchmove="dragging($event)"
         @touchend="dragEnd"
         v-bind:class="thumbnailsOrientation === 'horizontal' ? 'flex-col': 'flex-row-reverse justify-center'"
         @mouseleave="initializeAutoplay" @mouseenter="pauseNavigation">
        <SliderNav v-if="nav && items.length > 1"/>
        <slot></slot>
        <slider-thumbnails class="hidden md:flex" v-if="thumbnails && items.length > 0 " :items="items" :orientation="thumbnailsOrientation" :active-item="activeItem"/>
        <SliderDots v-if="dots && items.length > 1" :items-count="items.length"/>
        <slider-popup :items="items" v-if="popup && showPopup" :active-item="activeItem"/>
    </div>
</template>

<script>
export {default} from "./hooks"
</script>