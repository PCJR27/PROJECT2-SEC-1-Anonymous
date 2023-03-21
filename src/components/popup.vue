<script setup>
import { ref,computed} from 'vue';
// let popupStatus  = ref(false)

const props = defineProps({
    popStatus : {
      tyepe:Boolean,
      default:false
    }
    // winner: {
    //     type: String,
    //     default: null
    // }

})

// const emits=defineEmits=(['isClose'])
const emits = defineEmits(['isClose','playAgain'])
let win = computed(() => props.winner)

let playAgain=()=>{
    return location.reload
}
// function popupControl() {
//       console.log(props.popStatus);
//        return props.popStatus = false}
</script>
 
<template>
    <div>
        
        <div class="popup">
              <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
              </div>
          </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-5/6 h-5/6 bg-white rounded-xl">
                <div>
                    <button @click="emits('isClose', false)" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-300 fixed right-10 top-10 text-gray-800 font-bold text-2xl border-r-4 py-2 px-4 rounded-full">x</button>
                    <p class="text-black text-center text-5xl  mt-16 ">How to Play</p>
                </div>
                <div class="fixed bottom-10 left-1/2 -translate-x-1/2 ">
                    <button class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 border-r-8 rounded-l-full hover:bg-red-400 transition duration-500 ease-in-out ">Back</button>
                    <button class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 rounded-r-full hover:bg-red-400 transition duration-500 ease-in-out ">Next</button>
                </div>

            </div>
        </div>
    </div>

    <!-- <slot name="howtoPlay">
            <div class="popup">
              <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
              </div>
          </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-5/6 h-5/6 bg-white rounded-xl">
                <div>
                    <button @click="emits('isClose', false)" class="hover:bg-red-400 transition duration-500 ease-in-out bg-gray-300 fixed right-10 top-10 text-gray-800 font-bold text-2xl border-r-4 py-2 px-4 rounded-full">x</button>
                    <p class="text-black text-center text-5xl  mt-16 ">How to Play</p>
                </div>
                <div class="fixed bottom-10 left-1/2 -translate-x-1/2 ">
                    <button class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 border-r-8 rounded-l-full hover:bg-red-400 transition duration-500 ease-in-out ">Back</button>
                    <button class="bg-gray-300 text-gray-800 font-bold text-2xl py-2 px-4 rounded-r-full hover:bg-red-400 transition duration-500 ease-in-out ">Next</button>
                </div>

            </div>
        </div>
    </slot>

    <slot name="winnerPlay">
       <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-screen h-screen bg-black opacity-60">
            </div>
        </div>
        <div class="popup">
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/3 h-5/6 bg-white rounded-xl">
                <div class="top-10">
                    <p class="text-black text-center text-4xl  mt-16 ">The winner is</p>
                    <p class="text-black text-center text-5xl  mt-16 ">{{ win }}</p>
                </div>
                <div class="fixed bottom-10 left-1/2 -translate-x-1/2 ">
                    <button
                        class="bg-gray-300 text-gray-800 font-bold text-3xl py-2 px-4 rounded-full hover:bg-red-400 transition duration-500 ease-in-out "
                        @click="$emit('playAgain',false)">Play Again</button>
                </div>

            </div>
        </div>
        </slot> -->
</template>
 
<style scoped>
.popup {
    z-index: 9999;
}
.buttonFirstPage {
    font-size: 26px;
    border-radius: 50px;
    padding: 14px 32px;
    transition: 0.5s;
    position: relative;
    background: #333;
    border: none;
}
.shadow :hover{
  color: #ff1867;
  border-radius: 50px;
  box-shadow: 0 0 45px #ff1867;
}

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
  font-family: "XSpace";
  src: local("XSpace"),
   url(./assets/Font/xspace/ttf/xspace-xspace-400.ttf) format("truetype");
}

@font-face {
  font-family: "varino";
  src: local("varino"),
   url(./assets/Font/varino/Varino.ttf) format("truetype");
}

@font-face {
  font-family: "researcher";
  src: local("researcher"),
   url(./assets/Font/researcher/ttf/researcher-researcher-bold-700.ttf) format("truetype");
}
</style>