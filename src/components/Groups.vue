<script setup>
import { ref, onMounted } from 'vue';
import { getGroups } from '../composable/getGroups.js'
const groups = ref([])
onMounted(async () => {
  groups.value = await getGroups()
  console.log(groups.value)})
let userInfo = [ {
        "groupName":"astronaut team",
        "numOfPlayer":"2",
        "member": [
          {
            "player1": {
              "name": "Ou1",
              "color": "red",
              "picture": "{}"
            },
              "player2": {
              "name": "Ou2",
              "color": "blue",
              "picture": "{}"
            }
          }         
        ]
      },
      {
        "groupName":"alien team",
        "numOfPlayer":"2",
        "member": [
          {
            "player1":{
              "name": "Neng",
              "color": "red",
              "picture": "{}"
            },
            "player2": {
              "name": "Neng2",
              "color": "blue",
                 "picture": "{}"
            }
          }
        ]
      },
      {
        "groupName":"KoonPorchar team",
        "numOfPlayer":"2",
        "member": [
          {
            "player1":{
              "name": "Neng",
              "color": "red",
              "picture": "{}"
            },
            "player2": {
              "name": "Neng2",
              "color": "blue",
                 "picture": "{}"
            }
          }
        ]
      }]


      
const props = defineProps({
  moreGroup: { type: Object }
})
// const groups = ref([])
const updateGroups = ref({})
// onMounted(async () => {
//   groups.value = await getGroups()
//   // console.log(groups.value)
//   if(props.moreGroup === undefined){
//     updateGroups.value = {
//         'groupName': '',
//         'member':[{
//             "player1": {
//               "name": "",
//               "color": "",
//               "picture": "{}"
//             },
//             "player2": {
//               "name": "",
//               "color": "",
//               "picture": "{}"
//             }
//           }
//           ]
//     }
//   }
// })
const deleteGroup= async (deleteId)=>{
 try{
const res = await fetch(`http://localhost:3000/groups/${deleteId}`,{
  method:'DELETE'
})
if(res.ok){
  groups.value= groups.value.filter((group)=>{
    return group.id!==deleteId
  })

}else{
  throw new Error('Error, cannot delete data!!')
}

 }
 catch (err){
console.log(err)
 }
}
defineEmits(['onShow', 'onEdit', 'onDelete','onPlay'])
</script>
 
<template>
<!-- <div> -->
    <!-- <div class="flex w-screen h-screen bg-gray-300">
      <div class="flex flex-cols m-auto bg-rose-600 ">

      </div> -->
      <!-- <div v-for="(group,index) in groups" :key="index">
        {{ group.groupName1 }} -->
         <!-- {{ index }}
        {{ group[index].groupName }}  -->
          <!-- <div v-for="member in group.member">
            <p>{{ member.player1}}</p>
          </div> -->
        <!-- </div>
        <button>+</button>
    </div> -->
<!-- </div> -->



<div class="flex flex-col">
    <div>
        <h1 class=" text-center text-5xl m-10" style="font-family: researcher;">Choose Your Group</h1>
    </div>

    <div class=" justify-center flex flex-row h-screen">

      <div v-for="(item,index) of groups" :key="index" class="flex flex-col w-1/4 h-4/5 bg-slate-400  mx-10 mt-10 rounded-xl">
            <div class="pt-16"> 
                <p class=" text-center text-4xl text-black">{{ item.groupName }}</p>
            </div>
            <div class="mt-auto">
                <p class=" text-center text-xl text-black">{{ item.numOfPlayer }}</p>
            </div>
            <div class="flex flex-col pb-10 mt-auto">
                <button class=" bg-slate-500 rounded-full py-1 mx-5 my-3" id="play" @click="$emit('onPlay',item.id,true)">PLAY</button>
                <button class=" bg-slate-500 rounded-full py-1 mx-5 my-3" id="edit" @click="$emit('onEdit','edit',item,item.id,true)">EDIT</button>
                <button class=" bg-slate-500 rounded-full py-1 mx-5 my-3" id="delete" @click="deleteGroup(item.id)" >DELETE</button> 
            </div>    
      </div>

<!-- 
        <button @click="$emit('onShow',true,$event)" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-400 flex flex-col w-1/4 h-4/5  mx-10 mt-10 rounded-xl" id="add">
            <img class="w-1/4 m-auto" src="./../assets/Pic/plus.png" alt="PLUS BUT">        
        </button> -->
        
        <button @click="$emit('onShow','add',false)" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-400 flex flex-col w-1/4 h-4/5  mx-10 mt-10 rounded-xl" id="add">
            <img class="w-1/4 m-auto" src="./../assets/Pic/plus.png" alt="PLUS BUT">        
        </button>
    </div>



</div>
</template>
 
<style scoped>

</style>