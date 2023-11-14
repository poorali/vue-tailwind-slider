<template>
    <div class="items-center flex justify-between relative bg-white px-10 py-5 rounded"
         v-bind:class="thumbnailsOrientation === 'horizontal' ? 'flex-col': 'flex-row-reverse justify-center'"
         @mouseleave="initializeAutoplay" @mouseenter="pauseNavigation">
        <SliderNav v-if="nav && items.length > 1"/>
        <slot></slot>
        <slider-thumbnails v-if="thumbnails && items.length > 0 " :items="items" :orientation="thumbnailsOrientation"/>

        <SliderDots v-if="dots && items.length > 1" :items-count="items.length"/>
    </div>
</template>

<script>
export {default} from "./hooks"
</script>