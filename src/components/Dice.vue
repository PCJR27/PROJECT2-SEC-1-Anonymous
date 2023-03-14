<script setup>
import {ref} from'vue'
// import { play } from './components/TableGame.vue'
// import { Random } from '../play.js'

// let randomNumber =ref(number)
const props= defineProps({
    randomNum:{
        type:Number,
        require:true
    }
})
let diceRef = ref('')
let roll =rollDice()

function rollDice(){
    let number = Math.floor(Math.random() * 6 + 1)
if(number >= 1 && number <= 6){
    animationRoll(number)
} 
else{
    rollDice();
}
console.log(number)
return number
}

function animationRoll(number){
      
      setTimeout(() => {
        switch (number) {
          case 1:
            diceRef.value.style.transform = "rotateX(0deg) rotateY(0deg)"
            break
          case 6:
            diceRef.value.style.transform = "rotateX(180deg) rotateY(0deg)"
            break
          case 2:
            diceRef.value.style.transform = "rotateX(-90deg) rotateY(0deg)"
            break
          case 5:
            diceRef.value.style.transform = "rotateX(90deg) rotateY(0deg)"
            break
          case 3:
            diceRef.value.style.transform = "rotateX(0deg) rotateY(90deg)"
            break
          case 4:
            diceRef.value.style.transform = "rotateX(0deg) rotateY(-90deg)"
            break
          default:
            break
        }
      },10)
    }
</script>
 
<template>
    <div class="flex">
        <div class="flex flex-rows container">
            <div class="dice" ref="diceRef">
               <div class="face front"></div>
               <div class="face back"></div>
               <div class="face top"></div>
               <div class="face bottom"></div>
               <div class="face right"></div>
               <div class="face left"></div>
            </div>

            <div class="flex flex-rows roll">
                <button @click="rollDice">Roll</button>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

/* General CSS Reset */
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}

.container {
    display: grid;
    place-items: center;
    width: 250px;
    padding: 60px 0 40px;
    border-radius: 30px;
    background: #eeeeee;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

/* /////////////////////////////////////// */

/* Dice style */
.dice {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transition: 1s ease;
}


.face {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    border: 5px solid #f6f3f0;
    transform-style: preserve-3d;
    background: linear-gradient(
        145deg, #dddbd8, #fff
    );
}

.face::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #f6f3f0;
    transform: translateZ(-1px);
}

.face::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #131210;
}

.front {
    transform: translateZ(50px);
}

.back {
    transform: rotateX(180deg) translateZ(50px);
}

.top {
    transform: rotateX(90deg) translateZ(50px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(50px);
}

.right {
    transform: rotateY(90deg) translateZ(50px);
}

.left {
    transform: rotateY(-90deg) translateZ(50px);
}

.dice {
    transform: rotateX(0deg) rotateY(0deg);
}
.front::after {
    width: 30px;
    height: 30px;
    background: #f63330;
    margin: -15px 0 0 -15px;
}

.back::after {
    margin: -35px 0 0 -30px;
    box-shadow: 40px 0 black,
                0 25px black,
                40px 25px black,
                0 50px black,
                40px 50px black;
}

.top::after {
    margin: -30px 0 0 -30px;
    box-shadow: 40px 40px black;
}

.bottom::after {
    margin: -36px 0 0 -36px;
    box-shadow: 26px 26px black,
                52px 52px black,
                52px 0 black,
                0 52px black;
}

.right::after {
    margin: -30px 0 0 -30px;
    box-shadow: 40px 0 black,
                0 40px black,
                40px 40px black;
}

.left::after {
    margin: -35px 0 0 -35px;
    box-shadow: 25px 25px black,
                50px 50px black;
}

/* /////////////////////////////////////// */

.roll {
    cursor: pointer;
    color: #b33951;
    margin-top: 60px;
    padding: 6px 12px;
    border-radius: 3px;
    font: 700 16px 'Montserrat';
    border: 2px solid #b33951;
    transition: .4s;
}

.roll:hover {
    color: #fff;
    background: #b33951;
}

</style>