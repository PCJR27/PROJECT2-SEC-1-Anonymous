<script setup> 
import  TableGame  from './components/TableGame.vue'
import Dice from './components/Dice.vue'
</script>



<template>
    <div class="w-full h-full flex">
        <div class="flex-cols bg-green-500 w-2/5">
            <div class="flex justify-center mt-10">
                <Dice/>
            </div>
        </div>
        <div class="flex-cols bg-red-500 w-3/5">
            <TableGame/>
        </div>
    </div> 
</template>

<style scoped>


</style>
