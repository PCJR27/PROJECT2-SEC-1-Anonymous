<script setup> 
import  TableGame  from './components/TableGame.vue'
import Dice from './components/Dice.vue'
import {ref} from'vue'
let number = ref(Math.floor(Math.random() * 6 + 1))
</script>



<template>
    <div class="w-full h-full flex">
        <div class="flex-cols bg-green-500 w-2/5">
            <div class="flex justify-center mt-10">
                <Dice :random-num="number" />
            </div>
        </div>
        <div class="flex-cols bg-red-500 w-3/5">
            <TableGame :random-num="number"/>
        </div>
    </div> 
</template>

<style scoped>


</style>
