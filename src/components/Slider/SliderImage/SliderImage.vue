<template>
        <div class="h-64 md:h-70 lg:h-86 hidden"
             ref="sliderItem"
             v-bind:class="{'show':$parent.activeItem === this.id && !$parent.hasActiveAnimation}">
            <img class="h-full w-full object-cover" :src="this.src" :alt="this.alt"/>
        </div>
</template>
<script>
export {default} from "./Hooks"
</script>
<style>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.show {
    display: flex !important;
    animation: fadeIn 1s ease-out forwards;
}
</style>