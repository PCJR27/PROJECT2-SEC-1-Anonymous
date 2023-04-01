<script setup>
import { ref, onMounted, computed } from 'vue'
import { getGroups } from '../composable/getGroups.js'
onMounted(async () => {
  groups.value = await getGroups()
  console.log(groups.value)
  //Add new group
  if (props.moregroup === undefined) {
    updateGroup.value = {
      groupName: "",
      numOfPlayer: "",
      member: [
        {
          player1: {
            name: "",
            color: ""
          },
          player2: {
            name: "",
            color: ""
          },
          player3: {
            name: "",
            color: ""
          },
          player4: {
            name: "",
            color: ""
          }
        }
      ]
    }

    console.log(updateGroup.value)
  }

  //Edit Mode
  else {
    updateGroup.value = props.moregroup
    console.log(updateGroup.value)
  }

})
let playerArr = ref([])
let show = ref(false)
function createPlayer() {
 if (numOfPlayer !== null){
  show.value = true 
  playerArr.value = []
    for (let index = 0; index < numOfPlayer; index++) {
        playerArr.value.push("Player" + (index + 1))

    }
 }

}

const groups = ref([])
const updateGroup = ref({})
const props = defineProps({
  moregroup: {
    type: Object
  },
  setIdEdit: { type: Number }
})
const setId = computed(() => props.setIdEdit)

let playerName = ref([])
let playerColor = ref([])
let numOfPlayer = null
let groupName = ref('')
let errorMes = ref('')

function validate() {
  console.log('putInfo() work!!')
  console.log(updateGroup.value);
console.log(updateGroup.value.member[0].player1.name)
  if (numOfPlayer !== null || numOfPlayer !== undefined) {
    if (groupName.value === '') {
    console.error("GroupName arrays are too short!")
    errorMes.value = 'Enter Your Group Name.'
    return
  }
  if (playerName.value.length < numOfPlayer) {
    console.error("Name arrays are too short!")
    errorMes.value = 'Enter Your Name'
    return
  }
  if (playerColor.value.length < numOfPlayer) {
    console.error("color arrays are too short!")
    errorMes.value = 'Enter Your Color'
    return
  }
} 


for(let name of playerName.value){
if(!name.trim()){
  errorMes.value = 'name empty'
  return
}
}

for(let color of playerColor.value){
  console.log(playerColor.value)
if(!color){
  errorMes.value = 'color empty'
  return
}
}

showData()
}

let dataWithId=ref()
const showData=()=>{  
console.log(dataWithId)
  if(numOfPlayer==2){
    updateGroup.value.numOfPlayer = numOfPlayer
    updateGroup.value.groupName=groupName.value
    updateGroup.value.member[0].player1.name = playerName.value[0]
    updateGroup.value.member[0].player1.color = playerColor.value[0]
    updateGroup.value.member[0].player2.name = playerName.value[1]
    updateGroup.value.member[0].player2.color = playerColor.value[1]
  }

  if(numOfPlayer==3){
    updateGroup.value.numOfPlayer = numOfPlayer
    updateGroup.value.groupName=groupName.value
    updateGroup.value.member[0].player1.name = playerName.value[0]
    updateGroup.value.member[0].player1.color = playerColor.value[0]
    updateGroup.value.member[0].player2.name = playerName.value[1]
    updateGroup.value.member[0].player2.color = playerColor.value[1]
    updateGroup.value.member[0].player3.name = playerName.value[2]
    updateGroup.value.member[0].player3.color = playerColor.value[2]
  }


  if(numOfPlayer==4){
    updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[0].player1.name = playerName.value[0]
      updateGroup.value.member[0].player1.color = playerColor.value[0]

      updateGroup.value.member[0].player2.name = playerName.value[1]
      updateGroup.value.member[0].player2.color = playerColor.value[1]

      updateGroup.value.member[0].player3.name = playerName.value[2]
      updateGroup.value.member[0].player3.color = playerColor.value[2]

      updateGroup.value.member[0].player4.name = playerName.value[3]
      updateGroup.value.member[0].player4.color = playerColor.value[3]
  }
}


defineEmits(['showPlay', 'add', 'edit'])
</script>
 
<template>
  <div style="color: #A6ADBB;">
    <div class="h-screen flex flex-col bg-black" id="page2" >
      <div class="flex flex-row">
        <div class="w-1/2 h-full flex flex-col ">
          <div class="flex flex-col w-1/2 justify-center m-auto">
            <p class="text-center pb-4 text-2xl">Choose the number of players</p>
            <label for="underline_select" class="sr-only text-white">Underline select</label>
            <select v-model="numOfPlayer" 
              class="block appearance-none border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow">
              <option value=2> 2 Person</option>
              <option value=3> 3 Person</option>
              <option value=4> 4 Person</option>
            </select>

            <span class="flex justify-center"><button v-show="setId" @click="createPlayer"
                class=" bg-white text-black font-bold m-3 pt-2 pb-2 rounded-full w-1/3 hover:bg-red-400 transition duration-500 ease-in-out">EDIT</button></span>
            <span class="flex justify-center"><button v-show="!setId" @click="createPlayer"
                class=" bg-white text-black font-bold m-3 pt-2 pb-2 rounded-full w-1/3 hover:bg-red-400 transition duration-500 ease-in-out" >CONFIRM</button></span>
          </div>
        </div>

        <div class="w-1/2 ">
          <img class="w-screen h-screen object-cover" src="../assets/Pic/Page2BG.png">
        </div>
      </div>

      <div class=" text-white bg-black pt-12 flex-col" v-show="show" >
        <div class=" flex flex-row">
          <div class="w-1/2 text-5xl p-5">Your Info</div>
          <div class="w-1/2 text-5xl p-5">Preview</div>
        </div>
        <hr class="my-5"/>

        <div>
          <p class=" text-3xl">
          
          </p>
        </div>

        <div class="flex flex-row">
          <div class="w-1/2 p-5 text-3xl">
            <p class=" text-3xl">Group Name : <input class="rounded-full w-1/2  p-1 m-2 mr-10  border text-xl border-gray-400 hover:border-gray-500" type="text"
            placeholder="Group Name" v-model.trim="groupName"></p>
            
          </div>

          <div class="w-1/2 flex flex-row">
            <span class="flex flex-col">
              <p class=" m-6 text-3xl">{{ groupName !== '' ? `Group Name : `+ groupName : '' }}</p>
            </span>
          </div>
        </div>


        <div class="flex flex-row" v-for="(item, index) in playerArr " :key="index">
          <div class="w-1/2 p-5 text-3xl">
            <p class=" text-3xl">{{ item }}</p>
            <input class="rounded-full w-1/2 p-1 m-2 mr-10  border text-xl border-gray-400 hover:border-gray-500" type="text"
              placeholder="Player Name" v-model.trim="playerName[index]">
            <input class="" type="color" v-model.trim="playerColor[index]">
          </div>


          <div class="w-1/3 flex flex-row ">
            <span class="mt-6 w-screen mr-2">
              <div class=" py-7 mb-3 mx-2 rounded-2xl" :style="{ backgroundColor: playerColor[index] }">
                <p class="text-white text-center text-2xl">{{ playerName[index]}}</p>
              </div>
            </span>
          </div>
        </div>


        <div style="text-align: center;" v-show="show">
          <p class="text-red-600 text-bold text-xl">{{ errorMes  }}</p>
          <button v-if="setId"  ref='edit' class="font-bold bg-white mb-10 w-1/12 rounded-full text-black hover:bg-red-400 transition duration-500 ease-in-out"
            @click="$emit('edit',validate,updateGroup,setId)">EDIT</button>
          <button v-else  ref='add' class="font-bold bg-white m-10 pt-2 pb-2 w-1/12 rounded-full text-black hover:bg-red-400 transition duration-500 ease-in-out"
            @click="$emit('add', validate, updateGroup)">COMFIRM</button>
        </div>
      </div>
    </div>

  </div>
</template>
 
<style scoped>
.scroll-element {
  height: 1000px;
}</style>