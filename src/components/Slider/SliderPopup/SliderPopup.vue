<template>
    <div class="fixed inset-0 flex items-center justify-center w-full z-50 p-0 md:p-5 h-screen">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="z-10 w-full bg-white rounded-none md:rounded-lg h-full shadow-lg p-4">
            <div class="text-lg font-semibold mb-4 flex justify-between items-center">
                <button class="rounded text-gray-800 shadow bg-white p-1 px-2 text-sm font-medium block md:hidden" @click="$parent.$emit('toggle-popup')">Back</button>
                <svg data-testid="close-modal-button" class="cursor-pointer ml-auto hidden md:block" @click="$parent.$emit('toggle-popup')"
                     xmlns="http://www.w3.org/2000/svg"
                     height="1em" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div class="flex flex-col h-full">
                <div class="hidden md:flex">
                    <button @click="toggleTab('video')"
                            v-bind:class="{'border-red-500 text-gray-800': activeTab === 'video'}"
                            class="font-medium text-gray-400 hover:text-gray-800 border-b-2 pb-1 px-3 hover:border-red-500 border-gray-300">
                        VIDEOS
                    </button>
                    <button @click="toggleTab('image')"
                            v-bind:class="{'border-red-500 text-gray-800': activeTab === 'image'}"
                            class="font-medium text-gray-400 hover:text-gray-800 border-b-2 pb-1 px-3 hover:border-red-500 border-gray-300">
                        IMAGES
                    </button>
                    <div class="border-b-2 border-gray-300 w-full"></div>
                </div>
                <div class="flex flex-col md:flex-row h-full mt-10">
                    <Slider class="w-full overflow-hidden md:w-4/6 h-96 md:h-4/5"  :popup="false" :nav="false" :zoom="false"  :dots="false" :thumbnails="false">
                        <template v-for="(item) in activeTabItems">
                            <SliderImage class="h-72 md:h-96 m-auto" zoom="tap" :src="item.src" :active-item="activeItem" :custom-id="item.id" :key="item.id" v-if="item.type === 'image'"/>
                            <SliderVideo :play="true" class="h-full m-auto" :src="item.src" :active-item="activeItem" :custom-id="item.id" :key="item.id" v-if="item.type === 'video'"/>
                        </template>
                    </Slider>
                    <div class="flex flex-col w-full md:w-2/6">
                        <slot></slot>
                        <slider-thumbnails class="flex-wrap justify-content-begin" :active-item="activeItem" :items="activeTabItems" key="inline-slider-thumbnails"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export {default} from './Hooks.js'
</script>