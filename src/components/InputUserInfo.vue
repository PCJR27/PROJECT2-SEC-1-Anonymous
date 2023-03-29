<script setup>
import { ref, onMounted, computed,watch } from 'vue'
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
            color: "",
            picture: {}
          },
          player2: {
            name: "",
            color: "",
            picture: {}
          },
          player3: {
            name: "",
            color: "",
            picture: {}
          },
          player4: {
            name: "",
            color: "",
            picture: {}
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


const groups = ref([])
const updateGroup = ref({})
// watch(props.moregroup,updateGroup.value=props.moregroup)
const props = defineProps({
  moregroup: {
    type: Object
  },
  setIdEdit: { type: Number }
})
const setId = computed(() => props.setIdEdit)

let nGroup = ref('')
let nPlayer = ref('')
let nColor = ref('')
// let edit=(()=>{
// nGroup.value.valueOf('PORHA')
// })
let playerName = ref([])
let playerColor = ref([])
let numOfPlayer
let groupName = ref('')
const allPhoto = ref([])
const selectedBinaryFiles1 = ref('');
const selectedBinaryFiles2 = ref('');
const selectedBinaryFiles3 = ref('');
const selectedBinaryFiles4 = ref('');


let index = 0
function putInfo() {
  console.log('putInfo() work!!')

  if (groups.value.length == 0) {
    if (numOfPlayer == 2) {
      updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]
      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]

      index = index + 1
    }


    if (numOfPlayer == 3) {
      updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]
      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]
      updateGroup.value.member[index].player3.name = playerName.value[2]
      updateGroup.value.member[index].player3.color = playerColor.value[2]

      index = index + 1
    }
    // updateGroup.value.numOfPlayer = numOfPlayer
    // updateGroup.value.member[1].player1.name = playerName.value[1]
    // updateGroup.value.member[1].player1.color = playerColor.value[1]

    if (numOfPlayer == 4) {
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]

      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]

      updateGroup.value.member[index].player3.name = playerName.value[2]
      updateGroup.value.member[index].player3.color = playerColor.value[2]

      updateGroup.value.member[index].player4.name = playerName.value[3]
      updateGroup.value.member[index].player4.color = playerColor.value[3]


      index = index + 1
    }
  }


  else {
    if (numOfPlayer == 2) {
      updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]
      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]
    }


    if (numOfPlayer == 3) {
      updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]
      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]
      updateGroup.value.member[index].player3.name = playerName.value[2]
      updateGroup.value.member[index].player3.color = playerColor.value[2]
    }
    // updateGroup.value.numOfPlayer = numOfPlayer
    // updateGroup.value.member[1].player1.name = playerName.value[1]
    // updateGroup.value.member[1].player1.color = playerColor.value[1]

    if (numOfPlayer == 4) {
      updateGroup.value.groupName = groupName.value
      updateGroup.value.numOfPlayer = numOfPlayer
      updateGroup.value.member[index].player1.name = playerName.value[0]
      updateGroup.value.member[index].player1.color = playerColor.value[0]

      updateGroup.value.member[index].player2.name = playerName.value[1]
      updateGroup.value.member[index].player2.color = playerColor.value[1]

      updateGroup.value.member[index].player3.name = playerName.value[2]
      updateGroup.value.member[index].player3.color = playerColor.value[2]

      updateGroup.value.member[index].player4.name = playerName.value[3]
      updateGroup.value.member[index].player4.color = playerColor.value[3]
    }
    // index=index+1
  }
  // if (numOfPlayer == 2) {
  //   updateGroup.value.groupName = groupName.value
  //   updateGroup.value.numOfPlayer = numOfPlayer
  //   updateGroup.value.member[index].player1.name = playerName.value[0]
  //   updateGroup.value.member[index].player1.color = playerColor.value[0]
  //   updateGroup.value.member[index].player2.name = playerName.value[1]
  //   updateGroup.value.member[index].player2.color = playerColor.value[1]
  // }


  // if(numOfPlayer==3){
  //   updateGroup.value.groupName = groupName.value
  //   updateGroup.value.numOfPlayer = numOfPlayer
  //   updateGroup.value.member[index].player1.name = playerName.value[0]
  //   updateGroup.value.member[index].player1.color = playerColor.value[0]
  //   updateGroup.value.member[index].player2.name = playerName.value[1]
  //   updateGroup.value.member[index].player2.color = playerColor.value[1]
  //   updateGroup.value.member[index].player3.name = playerName.value[2]
  //   updateGroup.value.member[index].player3.color = playerColor.value[2]
  // }
  // // updateGroup.value.numOfPlayer = numOfPlayer
  // // updateGroup.value.member[1].player1.name = playerName.value[1]
  // // updateGroup.value.member[1].player1.color = playerColor.value[1]

  // if (numOfPlayer == 4) {
  //   updateGroup.value.numOfPlayer = numOfPlayer
  //   updateGroup.value.member[index].player1.name = playerName.value[0]
  //   updateGroup.value.member[index].player1.color = playerColor.value[0]

  //   updateGroup.value.member[index].player2.name = playerName.value[1]
  //   updateGroup.value.member[index].player2.color = playerColor.value[1]

  //   updateGroup.value.member[index].player3.name = playerName.value[2]
  //   updateGroup.value.member[index].player3.color = playerColor.value[2]

  //   updateGroup.value.member[index].player4.name = playerName.value[3]
  //   updateGroup.value.member[index].player4.color = playerColor.value[3]
  // }
  // updateGroup.value=updateGroup.value
  console.log(updateGroup.value)
}

let twoUser = ref(false)
let threeUser = ref(false)
let fourUser = ref(false)
function UserControl() {
  if (numOfPlayer == 2) {
    twoUser.value = true
    threeUser.value = false
    fourUser.value = false
  } else if (numOfPlayer == 3) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = false
  } else if (numOfPlayer == 4) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = true
  } else {
    twoUser.value = false
    threeUser.value = false
    fourUser.value = false
  }


}

// updateGroup.value.groupName = groupName.value
let onePerson = ref()
// function addPhoto() {
//   console.log(allPhoto);
//   allPhoto.value[0] = selectedBinaryFiles1.value
//   allPhoto.value[1] = selectedBinaryFiles2.value
//   allPhoto.value[2] = selectedBinaryFiles3.value
//   allPhoto.value[3] = selectedBinaryFiles4.value
// }
// const props = defineProps({
//   moregroup: { 
//     type: Object,
//     default:undefined

//   }
// })
// const updateGroup = ref({   
// "groupName": "",
// "numOfPlayer":"2",
// "member": [
//   {
//     "player1": {
//       "name": "",
//       "color": "",
//       "picture": "{}"
//     },
//     "player2": {
//       "name": "",
//       "color": "",
//       "picture": "{}"
//     }
//   }
// ]
// })
// onMounted(async () => {
//   // groups.value = await getGroups()
//   // console.log(groups.value)
//   //Add new group
//   if(props.moregroup === undefined){
//     updateGroup.value = {
//           "groupName": "",
//           "numOfPlayer":"2",
//           "member": [
//             {
//               "player1": {
//                 "name": "",
//                 "color": "",
//                 "picture": "{}"
//               },
//               "player2": {
//                 "name": "",
//                 "color": "",
//                 "picture": "{}"
//               }
//             }
//           ]
//     }
//   }
//   else{
//     updateGroup.value = props.moregroup
//   }

// })

let dataWithId=ref()
let selectGroup=ref()
const showData=()=>{
  // let index=0
  // console.log(id)
  // UserControl()
// updateGroup.value=props.moregroup
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


// const s=()=>{

//   UserControl()
//  dataWithId.value=groups.value.filter((real) => real.id===id)
//  console.log(dataWithId.value[0].numOfPlayer)
// //  console.log(dataWithId.value[0].numOfPlayer)
//   if(numOfPlayer==2){
//     dataWithId.value[0].numOfPlayer = numOfPlayer
//     dataWithId.value[0].groupName=groupName.value
//   }
// }
defineEmits(['showPlay', 'add', 'edit'])
</script>
 
<template>
  <div>
    <div class="h-screen flex flex-col bg-black" id="page2">
      <div class="flex flex-row">
        <div class="w-1/2 h-full flex flex-col ">
          <div class="flex flex-col w-1/2 justify-center m-auto">
            <label for="underline_select" class="sr-only text-white">Underline select</label>
            <select v-model="numOfPlayer" 
              class="block appearance-none   border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow">
              <option value=2> 2 Person</option>
              <option value=3> 3 Person</option>
              <option value=4> 4 Person</option>
            </select>

            <span class="flex justify-center"><button v-show="setId" @click="UserControl"
                class=" bg-white m-3 pt-2 pb-2 rounded-full w-1/3">Edit</button></span>
            <span class="flex justify-center"><button v-show="!setId" @click="UserControl"
                class=" bg-white m-3 pt-2 pb-2 rounded-full w-1/3">Confirm</button></span>
          </div>
        </div>

        <div class="w-1/2 ">
          <img class="w-screen h-screen object-cover" src="../assets/Pic/Page2BG.png">
        </div>
      </div>

      <div class=" text-white bg-gray-800 pt-28 flex-col">

        <div class=" flex flex-row" v-show="twoUser">
          <div class="w-1/2 text-5xl p-5">Your Info</div>
          <div class="w-1/2 text-5xl p-5">Preview</div>
        </div>


        <div v-show="twoUser">
          <p>Type Your Group Name : </p> 
          <input class="rounded-full p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text"
            placeholder="Player Name" v-model="groupName">
        </div>

        <div class="flex flex-row" v-show="twoUser">
          <div class="w-1/2 p-5 text-3xl">
            <p class=" text-3xl">Player 1</p>
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text"
              placeholder="Player Name" v-model="playerName[0]">
            <input class="" type="color" v-model="playerColor[0]">
          </div>

          <div class="w-1/2 flex flex-row ">
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[0] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[0] }}</p>
            </span>
          </div>
        </div>


        <div class="flex flex-row" v-show="twoUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text"
              placeholder="Player Name" v-model="playerName[1]">
            <input class="" type="color" v-model="playerColor[1]">
          </div>

          <div class="w-1/2 flex flex-row ">
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[1] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[1] }}</p>
            </span>
          </div>
        </div>

        <div class="flex flex-row" v-show="threeUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text"
              placeholder="Player Name" v-model="playerName[2]">
            <input class="" type="color" v-model="playerColor[2]">
          </div>

          <div class="w-1/2 flex flex-row ">
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[2] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[2] }}</p>
            </span>
          </div>
        </div>

        <div class="flex flex-row" v-show="fourUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text"
              placeholder="Player Name" v-model="playerName[3]">
            <input class="" type="color" v-model="playerColor[3]">
          </div>

          <div class="w-1/2  flex flex-row ">
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[3] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[3] }}</p>
            </span>
          </div>
        </div>

        <div style="text-align: center;" v-show="twoUser">
          <!-- <button class="rounded-full bg-white w-1/12 text-black"
                  @click="$emit('showPlay', true, numOfPlayer,putInfo)">Confirm</button> -->
          <button v-if="setId" class="rounded-full bg-white w-1/12 text-black"
            @click="$emit('edit',showData,updateGroup,setId,numOfPlayer, true)">Edit</button>
          <button v-else class="rounded-full bg-white w-1/12 text-black"
            @click="$emit('add', putInfo, updateGroup, numOfPlayer, true)">Confirm</button>
          <!-- <button class="rounded-full bg-white w-1/12 text-black" @click="$emit('edit',putInfo,updateGroup,numOfPlayer)">Edit</button> -->

        </div>
      </div>
    </div>

  </div>
</template>
 
<style scoped></style>