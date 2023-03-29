<script setup>
import { RouterLink } from 'vue-router'
let teamInfo = [
  {
  nickName : "NENG",
  name : 'Techatham Kajanasuttakun',
  id : '64130500025',
  pic: './Team/Neng.jpeg'
},
{
  nickName : "TAN",
  name : 'Thanawat Chen',
  id : '64130500033',
  pic: './Team/Tan.jpeg'
},
{
  nickName : "OU",
  name : 'Nitis Visayatasin',
  id : '64130500045',
  pic: './Team/Ou.png'
},
{
  nickName : "FILM",
  name : 'Pratipran Sritangtrong',
  id : '64130500046',
  pic: './Team/Film.jpeg'
},
{
  nickName : "POR",
  name : 'Porcha Meecharoen',
  id : '64130500049',
  pic: './Team/Por.jpg'
},

]


defineEmits(['close'])
</script>
 
<template>
<div class=" flex flex-col">



<div class=" m-auto bg-slate-500 ">
  <p class=" text-5xl text-black">About My Team</p>
</div>

  <div class=" flex flex-row bg-slate-400  w-screen h-screen" >
    <div class=" w-1/5 h-2/3 rounded-xl bg-blue-300 my-auto m-5" v-for="item in teamInfo">
      <img class="object-cover w-screen h-1/2 rounded-xl" :src="item.pic">
      <div class="flex flex-col mt-auto">
      <p class="text-7xl">{{ item.nickName }}</p>
      <p class="text-xl">{{ item.name }}</p>
      <p class="text-xl ">{{ item.id }}</p>
      </div>
    </div>
  </div>
  <div class="m-auto">
  <RouterLink :to="{name:'Home'}">
    <button class="bg-black text-white rounded-full text-2xl" @click="$emit('close',true)">Home</button>
  </RouterLink>
  </div>
</div>
</template>
 
<style scoped>

</style>
