<template>
    <div  class="h-64 md:h-70 lg:h-86 hidden mx-auto relative flex-col items-center justify-center"
         ref="sliderItem"
         v-bind:class="{'show':activeItemStatus && !$parent.hasActiveAnimation}">
        <video ref="video" :autoplay="play && activeItemStatus" :src="this.src" v-bind:controls="play"></video>
        <svg v-bind:class="{'hidden': play}" @click="$parent.$emit('toggle-popup')" class="absolute text-6xl cursor-pointer text-white fill-current opacity-75 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
        </svg>
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