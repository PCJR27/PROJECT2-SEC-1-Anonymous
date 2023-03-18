<script setup>
import {inject, provide, ref,computed} from'vue'
// import { play } from './components/TableGame.vue'
// import { Random } from '../play.js'
import TableGame from './TableGame.vue'

// let randomNumber =ref(number)
const props= defineProps({
    playNum:{
        type:Number
    },
    play:{
        type:Function
    },
    randomNum:{
        type:Function
    }
})
// defineEmits(['randomNum'])
let diceRef = ref('')
let randomNum=ref(null)
// let roll =rollDice()
// const callPlay=inject('callPlay')

// console.log(callPlay)
// provide('randomNumber',randomNum.value)
function rollDice(){
   let number = Math.floor(Math.random() * 6 + 1)
   randomNum.value=number
if(number >= 1 && number <= 6){
    animationRoll(number)
    callPlay()
} 
else{
    rollDice();
}
console.log(number)
console.log(randomNum.value)
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


    // ลองรวม
//     const props = defineProps({
//     playNum:{
//         type:Number,
//         require:true
//     },
//     randomNum:{
//         type:Number,
//         require:true
//     }
//     // play:{
//     //     type:Function,
//     //     require:true
//     // }
// }
// )
// const emits = defineEmits(['play'])
// provide('callPlay',callPlay)
// let randomNumber= computed(() => inject('randomNumber')) 
// let randomNumber= inject('randomNumber') 
let playerNum = computed(() => props.playNum)
// let randomNumber=computed(()=>props.randomNum)
// let randomNum = computed(() => props.randomNum)
let p1 = ref('')
let p2 = ref('')
let p3 = ref('')
let p4 = ref('')


// let p = {
//     players: [
//         { id: "player1", left: "0px", top: "0px" },
//         { id: "player2", left: "0px", top: "0px" },
//         { id: "player3", left: "0px", top: "0px" },
//         { id: "player4", left: "0px", top: "0px" }
//     ]
// }
let random = ref(0)
let p1sum = 0
let p2sum = 0
let p3sum = 0
let p4sum = 0
let turn = ref('')
let tog = 1
// let number = ref(props.randomNum)
let player1 = null;
let player2 = null;
let player3 = null;
let player4 = null;

function callPlay() {
    console.log(playerNum.value)
    console.log(randomNum.value)
    // number.value = Math.floor(Math.random() * 6 + 1)
    // return number.value
    if(playerNum.value==2){
    if (tog % 2 != 0) {
        turn.value.innerText = "Yellow's Turn : "
        play('player1', 'p1sum', 20, randomNum.value)

    }

    else if (tog % 2 == 0) {
        turn.value.innerText = "Red's Turn : "

        play('player2', 'p2sum', 55, randomNum.value)

    }
}
    tog = tog + 1
}



function getPlayerElement(player) {
    let playerElement = null;
    switch(player) {
        case 'player1':
            if (!player1) {
                player1 = p1.value;
            }
            playerElement = player1;
            break;
        case 'player2':
            if (!player2) {
                player2 = p2.value;
            }
            playerElement = player2;
            break;
        case 'player3':
            if (!player3) {
                player3 = p3.value
            }
            playerElement = player3;
            break;
        case 'player4':
            if (!player4) {
                player4 = p4.value
            }
            playerElement = player4;
            break;
        default:
            break;
    }
    return playerElement;
}
function play(player, psum, direction, num) {
    let sum
    if (psum == 'p1sum') {
        p1sum = p1sum + num
        sum = p1sum
    }

    if (psum == 'p2sum') {
        p2sum = p2sum + num
        sum = p2sum
    }

    if (psum == 'p3sum') {
        p3sum = p3sum + num
        sum = p3sum
    }
    if (psum == 'p4sum') {
        p4sum = p4sum + num
        sum = p4sum
    }

let playerElement=getPlayerElement(player)
if(playerElement){


    playerElement.style.transition = `linear all .5s`





    if (sum < 10) {
        playerElement.style.left = `${(sum - 1) * 66}px`
        playerElement.style.top = `${-0 * 66 - direction}px`
    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        let numarr = Array.from(String(sum))
        let n1 = numarr.shift()
        let n2 = numarr.pop()
        console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                playerElement.style.left = `${(9) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 66 - direction}px`
            }
            else {
                playerElement.style.left = `${(9 - (n2 - 1)) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                playerElement.style.left = `${(0) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
            }
            else {

                playerElement.style.left = `${(n2 - 1) * 70}px`
                playerElement.style.top = `${-n1 * 70 - direction}px`
            }

        }



    }
}
}
</script>
 
<template>
    <div class="w-full ml-48">
        <div class="flex w-full container">
            <div class="dice" ref="diceRef">
               <div class="face front"></div>
               <div class="face back"></div>
               <div class="face top"></div>
               <div class="face bottom"></div>
               <div class="face right"></div>
               <div class="face left"></div>
            </div>

            <div class="flex roll">
                <button @click="rollDice">Roll</button>
            </div>
        </div>
    </div>
    <!-- <div class="mr-36">
    <TableGame :play-num="props.playNum" :random-num="randomNum"/>
</div> -->


<!-- ลองรวม -->
<div>
        <div>
            <div class=" boxs grid-cols-10 mt-2">

                <div class="box" id="b100">100</div>

                <div class="box" id="b99">99</div>

                <div class="box" id="b98">98</div>

                <div class="box" id="b97">97</div>

                <div class="box" id="b96">96</div>

                <div class="box" id="b95">95</div>

                <div class="box" id="b94">94</div>

                <div class="box" id="b93">93</div>

                <div class="box" id="b92">92</div>

                <div class="box" id="b91">91</div>

                <div class="box" id="b81">81</div>

                <div class="box" id="b82">82</div>

                <div class="box" id="b83">83</div>

                <div class="box" id="b84">84</div>

                <div class="box" id="b85">85</div>

                <div class="box" id="b86">86</div>

                <div class="box" id="b87">87</div>

                <div class="box" id="b88">88</div>

                <div class="box" id="b89">89</div>

                <div class="box" id="b90">90</div>

                <div class="box" id="b80">80</div>

                <div class="box" id="b79">79</div>

                <div class="box" id="b78">78</div>

                <div class="box" id="b77">77</div>

                <div class="box" id="b76">76</div>

                <div class="box" id="b75">75</div>

                <div class="box" id="b74">74</div>

                <div class="box" id="b73">73</div>

                <div class="box" id="b72">72</div>

                <div class="box" id="b71">71</div>

                <div class="box" id="b61">61</div>

                <div class="box" id="b62">62</div>

                <div class="box" id="b63">63</div>

                <div class="box" id="b64">64</div>

                <div class="box" id="b65">65</div>

                <div class="box" id="b66">66</div>

                <div class="box" id="b67">67</div>

                <div class="box" id="b68">68</div>

                <div class="box" id="b69">69</div>

                <div class="box" id="b70">70</div>

                <div class="box" id="b60">60</div>

                <div class="box" id="b59">59</div>

                <div class="box" id="b58">58</div>

                <div class="box" id="b57">57</div>

                <div class="box" id="b56">56</div>

                <div class="box" id="b55">55</div>

                <div class="box" id="b54">54</div>

                <div class="box" id="b53">53</div>

                <div class="box" id="b52">52</div>

                <div class="box" id="b51">51</div>

                <div class="box" id="b41">41</div>

                <div class="box" id="b42">42</div>

                <div class="box" id="b43">43</div>

                <div class="box" id="b44">44</div>

                <div class="box" id="b45">45</div>

                <div class="box" id="b46">46</div>

                <div class="box" id="b47">47</div>

                <div class="box" id="b48">48</div>

                <div class="box" id="b49">49</div>

                <div class="box" id="b50">50</div>

                <div class="box" id="b40">40</div>

                <div class="box" id="b39">39</div>

                <div class="box" id="b38">38</div>

                <div class="box" id="b37">37</div>

                <div class="box" id="b36">36</div>

                <div class="box" id="b35">35</div>

                <div class="box" id="b34">34</div>

                <div class="box" id="b33">33</div>

                <div class="box" id="b32">32</div>

                <div class="box" id="b31">31</div>

                <div class="box" id="b21">21</div>

                <div class="box" id="b22">22</div>

                <div class="box" id="b23">23</div>

                <div class="box" id="b24">24</div>

                <div class="box" id="b25">25</div>

                <div class="box" id="b26">26</div>

                <div class="box" id="b27">27</div>

                <div class="box" id="b28">28</div>

                <div class="box" id="b29">29</div>

                <div class="box" id="b30">30</div>

                <div class="box" id="b20">20</div>

                <div class="box" id="b19">19</div>

                <div class="box" id="b18">18</div>

                <div class="box" id="b17">17</div>

                <div class="box" id="b16">16</div>

                <div class="box" id="b15">15</div>

                <div class="box" id="b14">14</div>

                <div class="box" id="b13">13</div>

                <div class="box" id="b12">12</div>

                <div class="box" id="b11">11</div>

                <div class="box" id="b01">Start
                    <p id="player1" ref="p1"></p>
                    <p id="player2" ref="p2"></p>
                    <!-- <p id="player3" ref="p3"></p>
                    <p id="player4" ref="p4"></p> -->
                </div>

                <div class="box" id="b02">2</div>

                <div class="box" id="b03">3</div>

                <div class="box" id="b04">4</div>

                <div class="box" id="b05">5</div>

                <div class="box" id="b06">6</div>

                <div class="box" id="b07">7</div>

                <div class="box" id="b08">8</div>

                <div class="box" id="b09">9</div>

                <div class="box" id="b10">10</div>

            </div>
        </div>
        <button @click="callPlay">Play</button>
        <p class="rand" ref="rands">{{ randomNum }}</p>
        <p class="turn" ref="turn"></p>
    </div>
    <!-- ลองรวม -->
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

/* ลองรวม */
.boxs {
    display: grid;
    width: 700px;
    height: 700px;
    margin: auto;
}

.boxs div {
    width: 70px;
    height: 70px;
    border: 0.2px solid black;
    padding: 20px;
    text-align: center;
}

#b01 {
    background-color: black;
    width: 70px;
    height: 70px;
    text-align: center;
}

#player1,
#player2,
#player3,
#player4 {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    /* background-color: rgb(236, 82, 82); */
    position: relative;
    border: 3px solid black;
}

#player1 {
    background-color: rgb(143, 82, 236);
    /* position: relative;
    top: -40px;
    transition: all linear 0.5s; */
    /* top: 0; */
    /* right: 15px; */
    /* z-index: 2; */

    /*new*/
    position: relative;
  top: -20px;
  transition: all linear 0.5s;
  /* top: 0; */
  left: -65px;
  z-index: 2;
}

#player2 {
    /* z-index: 2; */
    /* position: relative;
    top: -70px;
    left: 15px;
    transition: all linear 0.5s;
    background-color: rgb(243, 181, 46); */

    /*new*/
    z-index: 2;
  position: relative;
  top: -55px;
  left: -65px;
  transition: all linear 0.5s;
  background-color: rgb(243, 181, 46);
}

/* #player3 { */
    /* z-index: 2; */
    /* position: relative;
    top: -70px;
    right: 15px;
    transition: all linear 0.5s;
    background-color: rgb(116, 246, 29); */
/* } */

/* #player4 { */
    /* z-index: 2; */
    /* position: relative;
    top: -100px;
    left: 15px;
    transition: all linear 0.5s;
    background-color: rgb(239, 16, 16); */
/* } */

</style>