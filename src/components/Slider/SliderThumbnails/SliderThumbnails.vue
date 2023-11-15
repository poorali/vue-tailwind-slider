<template>
    <div class="flex justify-center overflow-hidden" v-bind:class="{'flex-col': orientation === 'vertical','flex-row': orientation === 'horizontal'}">
        <div @click="navigate(item.id)"
             class="w-10 h-10 md:h-14 md:w-14 m-1 cursor-pointer justify-center flex rounded border-2 border-gray-400 hover:border-red-400"
             v-bind:class="{'border-red-500': activeItem === item.id}" v-for="(item,index) in items" :key="index">
            <img class="object-cover" :src="item.thumbnail || item.src"
                 v-if="item.type === 'image' || (item.type === 'video' && item.thumbnail)">
            <video :src="item.src" v-if="item.type === 'video' && !item.thumbnail"></video>
        </div>
    </div>
</template>

<script>
export {default} from './Hooks'
</script>