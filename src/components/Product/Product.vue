<template>
    <div class=" w-11/12 md:w-5/12 m-10 flex flex-col">
        <div class="flex flex-col border-b-4 border-gray-300 pb-4">
            <div class="flex justify-between font-medium text-lg">
                <h4 class="text-gray-400">Samsung</h4>
                <h4 class="text-green-800">Hurry Limited Stock</h4>
            </div>
            <h1 class="text-2xl font-medium mt-4">Samsung Galaxy S23 Plus 5G</h1>
            <h1 class="text-2xl font-medium mt-4">£880.00</h1>
        </div>
        <div class="flex flex-col border-b-2 border-gray-300 pt-4">
            <h4 class="mb-4"><span class="font-medium">Sim:</span> DUAL SIM</h4>
            <h4 class="mb-4"><span class="font-medium">Condition:</span> LIKE NEW</h4>
            <h4 class="mb-4"><span class="font-medium">Colour:</span> Silver, Red, Blue</h4>
            <h4 class="mb-4"><span class="font-medium">Network:</span> UNLOCKED</h4>
            <h4 class="mb-4"><span class="font-medium">Storage:</span> 512GB</h4>
        </div>
        <h4 class="mt-4">Select a colour:</h4>
        <div class="d-flex pt-2">
            <button v-bind:class="{'border-red-500': activeColour === 'silver'}" @click="activeColour = 'silver'"
                    class="bg-gray-400 w-5 h-5 rounded-full border-2 border-transparent hover:border-red-400">
            </button>
            <button v-bind:class="{'border-red-500': activeColour === 'red'}" @click="activeColour = 'red'"
                    class="bg-red-300 ml-1 w-5 h-5 rounded-full border-2 border-transparent hover:border-red-400">
            </button>
            <button v-bind:class="{'border-red-500': activeColour === 'blue'}" @click="activeColour = 'blue'"
                    class="bg-blue-300 ml-1 w-5 h-5 rounded-full border-2 border-transparent hover:border-red-400">
            </button>
        </div>
        <button class="w-full bg-yellow-300 font-medium rounded py-3 mt-4">Add To Basket</button>
    </div>
</template>

<script>
export {default} from './Hooks'
</script>