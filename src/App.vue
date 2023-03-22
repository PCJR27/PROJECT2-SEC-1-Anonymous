<script setup>
import TableGame from './components/TableGame.vue'
import Dice from './components/Dice.vue'
import BinaryPreview from './components/BinaryPreview.vue'
import popup from './components/popup.vue'


//  Test By FILM Do Not Edit Or Move
import { ref} from 'vue';

let howToPlayPopup = ref(false)
let numOfPlayer
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
console.log('-------');
console.log(numOfPlayer);

let playerName = ref([])
let playerColor = ref([])


// function popControl (){howToPlayPopup.value = !howToPlayPopup.value
// console.log(howToPlayPopup)
// }

const allPhoto = ref([])
const selectedBinaryFiles1 = ref('');
const selectedBinaryFiles2 = ref('');
const selectedBinaryFiles3 = ref('');
const selectedBinaryFiles4 = ref('');

// let defaultColor = "#aeaeae"
// let color1 = ref('')
// let color2 = ref('')
// let color3 = ref('')
// let color4 = ref('')
// color1.value =  playerColor.value[0]
// color2.value =  playerColor.value[1]
// color3.value =  playerColor.value[2]
// color4.value =  playerColor.value[3]

const chooseBinaryFile = (e, index) => {
  console.log(numOfPlayer);
  console.log(selectedBinaryFiles1);
  if (index === 0) {
    selectedBinaryFiles1.value = e.target.files[0];
  } else if (index === 1) {
    selectedBinaryFiles2.value = e.target.files[0];
  } else if (index === 2) {
    selectedBinaryFiles3.value = e.target.files[0];
  } else if (index === 3) {
    selectedBinaryFiles4.value = e.target.files[0];
  };

}

function addPhoto() {
  console.log(allPhoto);
  allPhoto.value[0] = selectedBinaryFiles1.value
  allPhoto.value[1] = selectedBinaryFiles2.value
  allPhoto.value[2] = selectedBinaryFiles3.value
  allPhoto.value[3] = selectedBinaryFiles4.value
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


const onClose = (value) => {
  console.log(value)
  howToPlayPopup.value = value

  console.log(playerName);
}

defineEmits(['playerControl'])

</script>



<template>
  <!-- Test By FILM PAGE 1 - 2  -->
  <div class="flex flex-col">
    <!-- PAGE 1 -->
    <div class="h-screen flex flex-row" id="page1">
      <div class="w-1/2 h-screen flex justify-center">
        <div class="flex flex-col my-auto">
          <div style="font-family: researcher;">
            <span style="display: block;letter-spacing:  6px; text-align: center"
              class="text-6xl lg:text-8xl">GALACTIC</span>
            <span style="display: block;letter-spacing: 26px; text-align: center;"
              class="text-xl pl-7 lg:text-2xl ">SERPENT CLIMB</span>
          </div>
          <div style="text-align: center;" class="text-xl  flex pt-10"> A snake and ladder game that will take everyone to
            the distant space.</div>

          <div class="flex flex-col lg:flex-row items-center">
            <button class="buttonFirstPage shadow hover:text-pink-500  m-4" style="margin-top: 30px"
              @click="showPlay">START<i></i></button>
            <button class="buttonFirstPage shadow hover:text-pink-500 m-4" style="margin-top: 30px;"
              @click="howToPlayPopup = !howToPlayPopup"><span>HOW TO PLAY</span><i></i></button>
            <div v-show="howToPlayPopup">
              <!-- <popup :pop-status="howToPlayPopup" @is-close="onClose">
                            <template v-slot:howtoPlay>

                            </template><popup/> -->
              <popup :pop-status="howToPlayPopup" @is-close="onClose">
                <template v-slot:howtoPlay>
                </template>
              </popup>
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-1/2 ">
        <img class="w-screen h-screen object-cover" src="./assets/Pic/Page1BG.png" alt="">
      </div>
    </div>
    <!-- PAGE 1 -->
    <!-- PAGE 2 -->
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
            <span class="flex justify-center"><button @click="UserControl"
                class=" bg-white m-3 pt-2 pb-2 rounded-full w-1/3">Confirm</button></span>
          </div>
        </div>

        <div class="w-1/2 ">
          <img class="w-screen h-screen object-cover" src="./assets/Pic/Page2BG.png" alt="">
        </div>
      </div>

      <div class=" text-white bg-gray-800 pt-28 flex-col">

        <div class=" flex flex-row" v-show="twoUser">
          <div class="w-1/2 text-5xl p-5" >Your Info</div>
          <div class="w-1/2 text-5xl p-5">Preview</div>
        </div>

        <div class="flex flex-row" v-show="twoUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text" placeholder="Player Name" v-model="playerName[0]">
            <input @change="e => chooseBinaryFile(e, 0)" class=" rounded-full" style="display:none;" type="file" accept="image/*" id="img1">
            <label class="rounded-full w-1/4 p-1 px-16 m-2 text-xl bg-slate-500 border border-gray-400 hover:border-gray-500" for="img1">Select Your Pic</label>
            <input class="" type="color" v-model="playerColor[0]">                          
          </div>
          
          <div class="w-1/2 flex flex-row ">
            <BinaryPreview class="mt-6 ml-6" :select-binary-object="selectedBinaryFiles1" />
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[0] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[0] }}</p>
            </span>
          </div>
        </div>
        

        <div class="flex flex-row" v-show="twoUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text" placeholder="Player Name" v-model="playerName[1]">
            <input @change="e => chooseBinaryFile(e, 1)" class=" rounded-full" style="display:none;" type="file" accept="image/*" id="img2">
            <label class="rounded-full w-1/4 p-1 px-16 m-2 text-xl bg-slate-500 border border-gray-400 hover:border-gray-500" for="img2">Select Your Pic</label>
            <input class="" type="color" v-model="playerColor[1]">
          </div>

          <div class="w-1/2 flex flex-row ">
            <BinaryPreview class="mt-6 ml-6"  :select-binary-object="selectedBinaryFiles2" />
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[1] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[1] }}</p>
            </span>
          </div>
        </div>

        <div class="flex flex-row" v-show="threeUser">
          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text" placeholder="Player Name" v-model="playerName[2]">
            <input @change="e => chooseBinaryFile(e, 2)" class=" rounded-full" style="display:none;" type="file" accept="image/*" id="img3">
            <label class="rounded-full w-1/4 p-1 px-16 m-2 text-xl bg-slate-500 border border-gray-400 hover:border-gray-500" for="img3">Select Your Pic</label>
            <input class="" type="color" v-model="playerColor[2]">
          </div>

          <div class="w-1/2 flex flex-row ">
            <BinaryPreview class="mt-6 ml-6"  :select-binary-object="selectedBinaryFiles3" />
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[2] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[2] }}</p>
            </span>
          </div>
        </div>

        <div class="flex flex-row" v-show="fourUser">

          <div class="w-1/2 p-5 text-3xl">
            <input class="rounded-full w-1/4 p-1 m-2  border text-xl border-gray-400 hover:border-gray-500" type="text" placeholder="Player Name" v-model="playerName[3]">
            <input @change="e => chooseBinaryFile(e, 3)" class=" rounded-full" style="display:none;" type="file" accept="image/*" id="img4">
            <label class="rounded-full w-1/4 p-1 px-16 m-2 text-xl bg-slate-500 border border-gray-400 hover:border-gray-500" for="img4">Select Your Pic</label>
            <input class="" type="color" v-model="playerColor[3]">
          </div>

          <div class="w-1/2  flex flex-row ">
            <BinaryPreview class="mt-6 ml-6"  :select-binary-object="selectedBinaryFiles4" />
            <span class="flex flex-col mt-6">
              <p class=" m-4 text-4xl" style="font-family: researcher;">{{ playerName[3] }}</p>
              <p class=" m-4 text-2xl">{{ playerColor[3] }}</p>
            </span>
          </div>
        </div>

        <div style="text-align: center;" v-show="twoUser">
          <button class="rounded-full bg-white w-1/12 text-black" @click="con" >Confirm</button>

        </div>
        <!-- Game -->
        <div class="flex">
          <div class="w-full flex" id="page4">
            <div class="flex-cols bg-gray-900 w-full">
              <TableGame :playNum="numOfPlayer" :color-info="playerColor" :name-info="playerName" :all-photo="selectedBinaryFiles1"/>
            </div>
          </div>
        </div>
        <!-- Game -->

      </div>
    </div>
    <!-- PAGE 2 -->

  </div>

  <!-- Test By FILM PAGE 1 - 2  -->
</template>

<style scoped>
.buttonFirstPage {
  font-size: 26px;
  border-radius: 50px;
  padding: 14px 32px;
  transition: 0.5s;
  position: relative;
  background: #333;
  border: none;
}

.shadow :hover {
  color: #ff1867;
  border-radius: 50px;
  box-shadow: 0 0 45px #ff1867;
}

/* button::before {
  content: '';
  position: absolute;
  inset: 2px;
} */
button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  border-radius: 50px;
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  top: -3.5px;
  left: 80%;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::before {
  border-radius: 50px;
  width: 20px;
  left: 20%;
}

button i::after {
  border-radius: 30px;
  content: '';
  position: absolute;
  border: 2px solid #ff1867;
  width: 7px;
  height: 4px;
  bottom: -3.5px;
  left: 20%;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::after {
  border-radius: 30px;
  width: 20px;
  left: 80%;
}

@font-face {
  font-family: "researcher";
  src: local("researcher"),
    url(./assets/Font/researcher/researcher-researcher-bold-700.otf) format("truetype");
}

</style>
