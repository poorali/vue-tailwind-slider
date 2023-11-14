<template>
        <ul class="flex flex-row absolute -bottom-7 w-full items-center justify-center left-0">
            <li class="p-1 m-1 rounded-full bg-gray-400" v-bind:class="{'bg-red-500': index-1 === $parent.activeItem}" v-for="index in itemsCount" :key="index">
            </li>
        </ul>
</template>

<script>
export {default} from './Hooks'
</script>