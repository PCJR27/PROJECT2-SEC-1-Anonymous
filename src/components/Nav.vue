<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
let x =ref('')
// function test(){
//   x.value = 'test'
//   console.log(x);
// }

defineEmits(['close'])
</script>

<template>
  <div class="p-2">
    <RouterLink :to="{name:'About'}"><button class=" bg-black text-white rounded-full" @click="$emit('close',false)"> Aboutus </button></RouterLink>
  </div>
</template>

<style scoped>
.active {
  color: purple;
}
.exact-active {
  color: blue;
}
</style>
