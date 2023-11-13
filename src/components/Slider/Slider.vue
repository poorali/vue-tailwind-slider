<template>
    <div class="items-center flex-col flex justify-center relative bg-white px-10 py-5 rounded" @mouseleave="initializeAutoplay" @mouseenter="pauseNavigation">
        <SliderNav v-if="nav && items.length > 1"/>
        <slot></slot>
        <SliderDots v-if="nav && items.length > 1" :items-count="items.length"/>
    </div>
</template>

<script>
export {default} from "./hooks"
</script>