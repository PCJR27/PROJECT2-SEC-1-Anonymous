<script setup>
import TableGame from './TableGame.vue'
import Group from './Groups.vue'
import InputUserInfo from './InputUserInfo.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue';

const groups = ref([])
let needInfo = ref('')
let groupShow = ref(false)
let addGroup = ref(false)
let showPlay = ref(false)
let numOfPlayer = ref()
let setIdEdit = ref()
const onShowAdd = (but, set) => {
  setIdEdit.value = set
  console.log(setIdEdit)
  if (but === 'add') {
    addGroup.value = true
    groupShow.value = set
  }
}

const editItem = ref()
const editId=ref()
const onShowEdit = ( item, id,set) => {
    addGroup.value = set
    groupShow.value = !set
    editItem.value = item
    editId.value=id
    console.log(editItem.value)

}


const playShow = (show, num) => {
  showPlay.value = show
  numOfPlayer.value = num
}

const showGroup = (show) => {
  groupShow.value = show
  router.value = !show

}

let editGroup = ref()
let addCall=ref()
let addNewGroups = (async (put, newGroup) => {
  put()
  if(newGroup.numOfPlayer==''){
  showPlay.value = false
  addGroup.value = true
  }
  else {
    addCall.value='add'
    if (showPlay === true){
    needInfo.value = 'needInfo'
  }
  try {
    const res = await fetch('http://localhost:3000/groups', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },

      body:JSON.stringify({
        groupName: newGroup.groupName,
        numOfPlayer: newGroup.numOfPlayer,
        member: newGroup.member
      })
    })

    if (res.status === 201) {
      const addNewGroups = await res.json()
      groups.value.push(addNewGroups)
      console.log(newGroup)
    }
    else {
      throw Error('cannot add!!')
    }
  }
  
  catch (err) {
    console.log(err)
  }

  showPlay.value = true
  addGroup.value = false

}
})
defineEmits(['playerControl'])

let setEdit=ref()
let modifyGroup = (async (validate, edit,setId) => {
validate()
if(edit.numOfPlayer==''){
  showPlay.value = false
  addGroup.value = true
  }
  else {
setEdit.value=setId
console.log(`+++++${setId}`)
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
      edit.value = undefined
    }
  
    else {
      throw Error('cannot add!!')
    }
  }

  catch (err) {
    console.log(err)
  }

  showPlay.value = true
  addGroup.value = false
}
})
let idToPlay=ref()
const gotoGame=(id,set)=>{
idToPlay.value=id
showPlay.value=set
groupShow.value=!set
console.log(id)
}

let router=ref(true)
</script>
 
<template>
 <div class="flex flex-col">
    <!-- PAGE 1 -->
    <div v-show="router">
    <RouterView @close="showGroup"/> 
  </div>
    <!-- PAGE 1 -->
    <!-- PAGE 1.5 -->
    <div v-show="groupShow">
      <Group @on-show="onShowAdd" @onEdit="onShowEdit" @onPlay="gotoGame" />
    </div>

    <div v-show="addGroup">
      <InputUserInfo @show-play="playShow" @add="addNewGroups" :set-id-edit="editId" :moregroup="editItem" @edit="modifyGroup" />
    </div>
    <!-- PAGE 2 -->
    <div v-show="showPlay">
      <div class="flex">
        <div class="w-full flex" id="page4">
          <div class="flex-cols bg-gray-900 w-full">
            <TableGame :need-info = 'needInfo' :g-id="idToPlay" :set-id-edit="setEdit" :set-add="addCall"/>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
 
<style scoped>
@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(../assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}
</style>