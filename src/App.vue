<script setup>
import TableGame from './components/TableGame.vue'
import Group from './components/Groups.vue'
import Home from './components/Home.vue'
import InputUserInfo from './components/InputUserInfo.vue'
import Nav from './components/Nav.vue'
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';

const groups = ref([])
let needInfo = ref('')

// onMounted(async () => {
//   groups.value = await getGroups()
// })


let groupShow = ref(false)
let addGroup = ref(false)
let showPlay = ref(false)
let numOfPlayer = ref()
let homeClose = ref(true)
// let home=ref(false)

// numOfPlayer=playNum
// function showPlay(value){
// console.log(value)
// }
// let randomNumber=ref()
// function randomNum(){
//   let  number = Math.floor(Math.random() * 6 + 1)
// randomNumber.value=number
// return number

// }




// function popControl (){howToPlayPopup.value = !howToPlayPopup.value
// console.log(howToPlayPopup)
// }



// let defaultColor = "#aeaeae"
// let color1 = ref('')
// let color2 = ref('')
// let color3 = ref('')
// let color4 = ref('')
// color1.value =  playerColor.value[0]
// color2.value =  playerColor.value[1]
// color3.value =  playerColor.value[2]
// color4.value =  playerColor.value[3]


// const onShow=(show,event)=>{
// if(event.target.id==='play'){
//   showPlay.value=show
// }

// if(event.target.id==='edit'){
//   showPlay.value=show
// }

// if(event.target.id==='delete'){
//   showPlay.value=show
// }

// if(event.target.id ==='add'){
//   console.log(event.target.id)
//   addGroup.value=show
//   // groupShow.value=!groupShow.value
// }

// }

let setIdEdit = ref()
const onShowAdd = (but, set) => {
  setIdEdit.value = set
  console.log(setIdEdit)
  if (but === 'add') {
    addGroup.value = true
    groupShow.value = set
  }
  // }else if (but === 'edit'){
  //   editGroup.value = true
  // }else if (but === 'close'){
  //   allClose.value == false 
  // }

}

const editItem = ref()
const editId=ref()
const onShowEdit = (but, item, id,set) => {
  if (but === 'edit') {
    addGroup.value = set
    groupShow.value = !set
    editItem.value = item
    editId.value=id
    console.log(editItem.value)
  }
}


const playShow = (show, num) => {
  showPlay.value = show
  numOfPlayer.value = num
}

const showGroup = (show) => {
  groupShow.value = show
  homeClose.value = !show
}

let editGroup = ref()
let editIDNew=ref()
let nPlayer = ref()
let nColor = ref()
let addNewGroups = (async (put, newGroup, numPlayer, show) => {
  put()
  editGroup.value = newGroup
  console.log(editIDNew)
  numOfPlayer.value = numPlayer

  showPlay.value = show
  addGroup.value = !show
  if (showPlay === true){
    needInfo.value = 'needInfo'
  }
  try {
    const res = await fetch('http://localhost:3000/groups', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      //แปลงให้เป็นjsonเพื่อส่งข้อมูลไปที่backend
      body: JSON.stringify({
        // text:newQuestion.text,
        // options:newQuestion.options
        groupName: newGroup.groupName,
        numOfPlayer: newGroup.numOfPlayer,
        member: newGroup.member
        // member: newGroup.member[0].player2.name,
      })
    })

    if (res.status === 201) {
      const addNewGroups = await res.json()
      newGroup.push(addNewGroups)
      console.log(newGroup)
      // setCurrentComponent('QuestionManagement')
    }
    // else if(res.status===404){

    // }
    else {
      throw Error('cannot add!!')
    }
  }
  catch (err) {
    console.log(err)
  }
})

defineEmits(['playerControl'])
let showNav = ref(true)
const show = (sh) => {
  showNav.value = sh

}

const editGroups = ref(undefined)
let setEditMode = ((groups) => {
  console.log(groups)
  editGroups.value = groups
  // setCurrentComponent('AddEditQuestion')
})

let modifyGroup = (async (showData, edit,setId, num, set) => {
  // console.log(editQuestion)
showData()
showPlay.value=set
  console.log(edit)
  try {
    const res = await fetch(`http://localhost:3000/groups/${setId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        groupName: edit.groupName,
        numOfPlayer: edit.numOfPlayer,
        member: edit.member
      })
    })

    if (res.status === 200) {
      const modify = await res.json()
      groups.value = groups.value.map((group) => {
        if (group.id === modify.id) {
          group.groupName = modify.groupName
          group.numOfPlayer = modify.numOfPlayer
        }
        return group
      })
      // setCurrentComponent('QuestionManagement')
      edit.value = undefined
      // console.log('edit successful')
    }
    // else if(res.status===404){

    // }
    else {
      throw Error('cannot add!!')
    }
  }
  catch (err) {
    console.log(err)
  }

  
})
let idToPlay=ref()
const gotoGame=(id,set)=>{
idToPlay.value=id
showPlay.value=set

console.log(id)
}
</script>



<template>
  <div class="flex flex-col">
    <!-- PAGE 1 -->
    <div v-show="homeClose">
      <Home @close="showGroup" />
    </div>
    <!-- ถ้าจะเอา router ให้เอาcommentอันนี้ออก -->
    <!-- <div v-show="showNav">
      <Nav @close="show"/>
    </div> -->
    <!-- เปิดบรรทัด RouterView -->
    <!-- <RouterView @close="showGroup"/>  -->
    <!-- PAGE 1 -->
    <!-- PAGE 1.5 -->
    <div v-show="groupShow">
      <Group @on-show="onShowAdd" @onEdit="onShowEdit" @onPlay="gotoGame" />
    </div>
    <!-- <div class="flex w-screen h-screen bg-gray-300">
          <div class="flex flex-cols m-auto bg-rose-600 ">

          </div>
          <div v-for="group in groups" :key="groups.groupID">
              <div v-for="member in group.member">
                <p>{{ member }}</p>
              </div>
            </div>
            <button>+</button>
        </div> -->
    <!-- PAGE 1.5 -->
    <!-- PAGE 2 -->
    <div v-show="addGroup">
      <InputUserInfo @show-play="playShow" @add="addNewGroups" :set-id-edit="editId" :moregroup="editItem" @edit="modifyGroup" />
    </div>
    <!-- PAGE 2 -->
    <div v-show="showPlay">
      <div class="flex">
        <div class="w-full flex" id="page4">
          <div class="flex-cols bg-gray-900 w-full">
            <TableGame :need-info = 'needInfo' :g-id="idToPlay" :user-info="editGroup"/>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Test By FILM PAGE 1 - 2  -->
</template>

<style scoped>
@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(./assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}
</style>
