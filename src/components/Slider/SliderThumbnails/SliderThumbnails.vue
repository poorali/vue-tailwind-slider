<template>
    <div class="flex justify-center overflow-x-auto" v-bind:class="{'flex-col': orientation === 'vertical','flex-row': orientation === 'horizontal'}">
        <div @click="navigate(index)"
             class="w-14 h-14 m-1 cursor-pointer justify-center flex rounded border-2 border-gray-400 hover:border-red-400"
             v-bind:class="{'border-red-500': $parent.activeItem === index}" v-for="(item,index) in items" :key="index">
            <img class="object-cover" :src="item.thumbnail || item.src"
                 v-if="item.type === 'image' || (item.type === 'video' && item.thumbnail)">
            <video :src="item.src" v-if="item.type === 'video' && !item.thumbnail"></video>
        </div>
    </div>
</template>

<script>
export {default} from './Hooks'
</script>