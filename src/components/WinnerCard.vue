<script setup>
import { defineProps, computed } from 'vue'


const props = defineProps({
    winner: {
        type: String,
        default: null
    },

    // playagain: {
    //     type: Function
    // }
})

defineEmits(['playAgain'])
let win = computed(() => props.winner)

let playAgain=()=>{
    return location.reload
}
</script>

<template>
    <div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
            </div>
        </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/3 h-5/6 bg-white rounded-xl">
                <div class="top-10">
                    <p class="text-black text-center text-4xl  mt-16 ">The winner is</p>
                    <p class="text-black text-center text-5xl  mt-16 ">{{ win }}</p>
                </div>
                <div class="fixed bottom-10 left-1/2 -translate-x-1/2 ">
                    <button
                        class="bg-gray-300 text-gray-800 font-bold text-3xl py-2 px-4 rounded-full hover:bg-red-400 transition duration-500 ease-in-out "
                        @click="$emit('playAgain',false)">Play Again</button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.popup {
    z-index: 9999;
}
</style>
    