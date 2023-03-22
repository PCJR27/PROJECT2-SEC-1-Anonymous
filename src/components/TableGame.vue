<script setup>
import { ref,computed,provide, onMounted,watch } from 'vue'
import Dice from './Dice.vue'
import WinnerCard from'./WinnerCard.vue'
import popup from'./popup.vue'
import BinaryPreview from './BinaryPreview.vue'





// import {randomNum} from '../randomNumber'
// import { walkNumber } from './Dice.vue'
// import { number } from '../play.js'

const props = defineProps({
playNum:{
        type:Number,
        require:true
    },
    randomNum:{
        type:Number,
        require:true
    },
    // FILM Test Scope
    colorInfo:{
        type:Array,
        required: true
    },
    nameInfo:{
        type:Array,
        required: true
    },
    allPhoto:{
        type:Array,
        required:true
    }
    // FILM Test Scope
}
)

// FILM Test Scope
let x = ref(0)
x= props.playNum

let defaultColor = "#aeaeae"
let colorUserOBJ 
let colorUser 
let color1 = ref('')
let color2 = ref('')
let color3 = ref('')
let color4 = ref('')

let picOBJ 
let pic
let pic1 = ref('')
let pic2 = ref('')
let pic3 = ref('')
let pic4 = ref('')

function setInfo(){
    colorUserOBJ = computed(()=>props.colorInfo)
    colorUser = colorUserOBJ.value
console.log(props.allPhoto);

console.log("Pic 1 " + pic1);
    picOBJ = computed(() => props.allPhoto)
    pic = picOBJ.value
// pic1.value = props.allPhoto[0].toString();
// pic2.value = props.allPhoto[1]
// pic3.value = props.allPhoto[2]
// pic4.value = props.allPhoto[3]


pic1.value = pic[0]
pic2.value = pic[1]
pic3.value = pic[2]
pic4.value = pic[3]

console.log("Pic 1 " + pic1);


    color1.value = colorUser[0]
    color2.value = colorUser[1]
    color3.value = colorUser[2]
    color4.value = colorUser[3]
}
// FILM Test Scope


let winStatus = ref(false)
function showWinner(){
    winStatus.value = true
}

let whoTurn = ref('')

let winnerIs = ref('')
const showPlay=(rollDice,randomNum,animationRoll,e)=>{
    random.value=randomNum
    rollDice()
    setInfo()
    console.log(playerNum.value);
    if(e.target.id=='but'){
        animationRoll(randomNum)
    }
    callPlay()
    
}

let playerNum = computed(() => props.playNum)
let randomNumber = computed(() => random.value)
let random =ref(0)

// Film Test Scope


let twoUser = ref(false)
let threeUser = ref(false)
let fourUser = ref(false)


function userControl() {
  if (playerNum.value == 2) {
    twoUser.value = true
    threeUser.value = false
    fourUser.value = false
  } else if (playerNum.value == 3) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = false
  } else if (playerNum.value == 4) {
    twoUser.value = true
    threeUser.value = true
    fourUser.value = true
  } else {
    twoUser.value = false
    threeUser.value = false
    fourUser.value = false
  }
}

watch(playerNum, userControl)
// Film Test Scope
let p1 = ref('')
let p2 = ref('')
let p3 = ref('')
let p4 = ref('')

let position1 = 0
let position2 = 0
let position3 = 0
let position4 = 0
let turnMessage = ref('')
let turn = 1

let player1 = null;
let player2 = null;
let player3 = null;
let player4 = null;

function callPlay() {
    if (playerNum.value == 2) {
        if (turn % 2 != 0) {
            turnMessage.value.innerText = "Purple's Turn : "
            console.log('Purple walk =' + random.value)
            console.log('Purple walk =' + randomNumber.value)
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)
            // move('player1',position1,20)
            whoTurn.value = 1
        }
        else if (turn % 2 == 0) {
            turnMessage.value.innerText = "Yellow's Turn : "
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            whoTurn.value = 2
        }
    }
    if (playerNum.value == 3) {
        if ((turn - 1) % playerNum.value + 1 == 1) {
            turnMessage.value.innerText = "Purple's Turn : "
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)
            // move('player1',position1,20)

            whoTurn.value = 1
        }
        else if ((turn - 1) % playerNum.value + 1 == 2) {
            turnMessage.value.innerText = "Yellow's Turn : "
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            // move('player2',position2,55)
            whoTurn.value = 2
        }
        else if ((turn - 1) % playerNum.value + 1 == 3) {
            turnMessage.value.innerText = "Green's Turn : "
            walk('player3', 'position3', 90, randomNumber.value)
            setTimeout(() => {
                move('player3', position3, 90)
            }, 1000)
            // move('player3',position3,90)
            whoTurn.value = 3
        }
    }
    if (playerNum.value == 4) {
        if ((turn - 1) % playerNum.value + 1 == 1) {
            turnMessage.value.innerText = "Purple's Turn : "
            walk('player1', 'position1', 20, randomNumber.value)
            setTimeout(() => {
                move('player1', position1, 20)
            }, 1000)
            // move('player1',position1,20)
            whoTurn.value = 1
        }
        else if ((turn - 1) % playerNum.value + 1 == 2) {
            turnMessage.value.innerText = "Yellow's Turn : "
            walk('player2', 'position2', 55, randomNumber.value)
            setTimeout(() => {
                move('player2', position2, 55)
            }, 1000)
            // move('player2',position2,55)
            whoTurn.value = 2
        }
        else if ((turn - 1) % playerNum.value + 1 == 3) {
            turnMessage.value.innerText = "Green's Turn : "
            walk('player3', 'position3', 90, randomNumber.value)
            setTimeout(() => {
                move('player3', position3, 90)
            }, 1000)
            // move('player3',position3,90)
            whoTurn.value = 3
        }
        else if ((turn - 1) % playerNum.value + 1 == 4) {
            turnMessage.value.innerText = "Red's Turn : "
            walk('player4', 'position4', 125, randomNumber.value)
            setTimeout(() => {
                move('player4', position4, 125)
            }, 1000)
            // move('player4',position4,125)
            whoTurn.value = 4
        }
    }
    turn = turn + 1
}


// it is get element by id.
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
function walk(player, position, direction, numberOfWalk) {
    let sum
    if (position == 'position1') {
        position1 = position1 + numberOfWalk
        if (position1 > 100) {
            position1 = position1 - numberOfWalk
            // sum = p1sum
        }
        if (position1 == 1) {
            position1 = 1
            setTimeout(() => {
                position1 = 38
            }, 500)
        }
        if (position1 == 4) {
            // await delay(5000)
            position1 = 4
            setTimeout(() => {
                position1 = 14
            }, 500)
        }
        if (position1 == 8) {
            position1 = 8
            setTimeout(() => {
                position1 = 30
            }, 500)

        }
        if (position1 == 21) {
            position1 = 21
            setTimeout(() => {
                position1 = 42
            }, 500)
        }
        if (position1 == 28) {
            position1 = 28
            setTimeout(() => {
                position1 = 76
            }, 500)

        }
        if (position1 == 32) {
            position1 = 32
            setTimeout(() => {
                position1 = 10
            }, 500)
        }
        if (position1 == 36) {
            position1 = 36
            setTimeout(() => {
                position1 = 6
            }, 500)

        }
        if (position1 == 48) {
            position1 = 48
            setTimeout(() => {
                position1 = 26
            }, 500)
        }
        if (position1 == 50) {
            position1 = 50
            setTimeout(() => {
                position1 = 67
            }, 500)
        }
        if (position1 == 62) {
            position1 = 62
            setTimeout(() => {
                position1 = 18
            }, 500)
        }

        sum = position1
    }
    if (position == 'position2') {
        position2 = position2 + numberOfWalk
        if (position2 > 100) {
            position2 = position2 - num
            // sum = p1sum
        }
        if (position2 == 1) {
            position2 = 1
            setTimeout(() => {
                position2 = 38
                console.log(position2)
            }, 500)
        }
        if (position2 == 4) {
            // await delay(position2=4,10000)
            position2 = 4
            // delay(position2=14,5000)
            setTimeout(() => {
                position2 = 14
                console.log(position2)
            }, 500)
            console.log('porcha')
            // position2 = 14
        }
        if (position2 == 8) {
            position2 = 8
            setTimeout(() => {
                position2 = 30
            }, 500)
        }
        if (position2 == 21) {
            position2 = 21
            setTimeout(() => {
                position2 = 42
            }, 500)
        }
        if (position2 == 28) {
            position2 = 28
            setTimeout(() => {
                position2 = 76
            }, 500)
        }
        if (position2 == 32) {
            position2 = 32
            setTimeout(() => {
                position2 = 10
            }, 500)

        }
        if (position2 == 36) {
            position2 = 36
            setTimeout(() => {
                position2 = 6
            }, 500)
        }
        if (position2 == 48) {
            position2 = 48
            setTimeout(() => {
                position2 = 26
            }, 500)
        }
        if (position2 == 50) {
            position2 = 50
            setTimeout(() => {
                position2 = 67
            }, 500)
        }
        if (position2 == 62) {
            position2 = 62
            setTimeout(() => {
                position2 = 18
            }, 500)
        }

        sum = position2
    }
    if (position == 'position3') {
        position3 = position3 + numberOfWalk

        if (position3 > 100) {
            position3 = position3 - num
            // sum = p1sum
        }
        if (position3 == 1) {
            position3 = 1
            setTimeout(() => {
                position3 = 38
                console.log(position3)
            }, 500)
        }
        if (position3 == 4) {
            // await delay(5000)
            position3 = 4
            //  delay(position3=14,5000)
            setTimeout(() => {
                position3 = 14
                // sum=position3
                console.log(position3)
            }, 500)
            // position3 = 14
        }
        if (position3 == 8) {
            position3 = 8
            setTimeout(() => {
                position3 = 30
                console.log(position3)
            }, 500)
        }
        if (position3 == 21) {
            position3 = 21
            setTimeout(() => {
                position3 = 42
                console.log(position3)
            }, 500)

        }
        if (position3 == 28) {
            position3 = 28
            setTimeout(() => {
                position3 = 76
                console.log(position3)
            }, 500)
        }
        if (position3 == 32) {
            position = 32
            setTimeout(() => {
                position3 = 10
                console.log(position3)
            }, 500)
        }
        if (position3 == 36) {
            position3 = 36
            setTimeout(() => {
                position3 = 6
                console.log(position3)
            }, 500)
        }
        if (position3 == 48) {
            position3 = 48
            setTimeout(() => {
                position3 = 26
                console.log(position3)
            }, 500)
        }
        if (position3 == 50) {
            position3 = 50
            setTimeout(() => {
                position3 = 67
                console.log(position3)
            }, 500)
        }
        if (position3 == 62) {
            position3 = 62
            setTimeout(() => {
                position3 = 18
                console.log(position3)
            }, 500)
        }
        sum = position3
    }
    if (position == 'position4') {
        position4 = position4 + numberOfWalk
        if (position4 > 100) {
            position4 = position4 - num
            // sum = p1sum
        }
        if (position4 == 1) {
            position4 = 1
            setTimeout(() => {
                position4 = 38
                console.log(position1)
            }, 500)
        }
        if (position4 == 4) {
            // await delay(5000)
            position4 = 4
            //  delay(position4=14,5000)
            setTimeout(() => {
                position4 = 14
            }, 500)

        }
        if (position4 == 8) {
            position4 = 8
            setTimeout(() => {
                position4 = 30
                console.log(position1)
            }, 500)
        }
        if (position4 == 21) {
            position4 = 21
            setTimeout(() => {
                position1 = 42
                console.log(position1)
            }, 500)
        }
        if (position4 == 28) {
            position4 = 28
            setTimeout(() => {
                position4 = 76
                console.log(position1)
            }, 500)
        }
        if (position4 == 32) {
            position4 = 32
            setTimeout(() => {
                position1 = 10
                console.log(position1)
            }, 2000)
        }
        if (position4 == 36) {
            position4 = 36
            setTimeout(() => {
                position4 = 6
                console.log(position1)
            }, 500)

        }
        if (position4 == 48) {
            position4 = 48
            setTimeout(() => {
                position4 = 26
                console.log(position4)
            }, 500)

        }
        if (position4 == 50) {
            position4 = 50
            setTimeout(() => {
                position4 = 67
            }, 500)
        }
        if (position4 == 62) {
            position = 62
            setTimeout(() => {
                position4 = 18
            }, 500)
        }
        
        sum = position4
    }
    // it is get element by id.
    let playerElement=getPlayerElement(player)
if(playerElement){
    console.log(playerElement)
    console.log(sum)
    playerElement.style.transition = `linear all .5s`
    
    if (sum < 10) {
        playerElement.style.left = `${(sum - 1) * 70}px`
        playerElement.style.top = `${-0 * 70 - direction}px`
    }

    else if (sum >= 100) {
        // winSound.play()
        if (player == 'player1') {
            winnerIs.value = props.nameInfo[0]
            showWinner()
            // alert("Purple Won !!")
        }
        else if (player == 'player2') {
            winnerIs.value = props.nameInfo[1]
            showWinner()
            // alert("Yellow Won !!")
        }
        else if (player == 'player3') {
            winnerIs.value = props.nameInfo[2]
            showWinner()
            // alert("Green Won !!")
        }
        else if (player == 'player4') {
            winnerIs.value = props.nameInfo[3]
            showWinner()
            // alert("Red Won !!")
        }
        // location.reload()
    }

    else {

        let numarr = Array.from(String(sum))
        let n1 = numarr.shift()
        let n2 = numarr.pop()
        console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                playerElement.style.left = `${(9) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
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



function move(player, sum, direction) {
    let playerElement=getPlayerElement(player)
if(playerElement){
    console.log(playerElement)
    console.log(sum)
    playerElement.style.transition = `linear all .5s`
    
    if (sum < 10) {
        playerElement.style.left = `${(sum - 1) * 70}px`
        playerElement.style.top = `${-0 * 70 - direction}px`
    }

    else if (sum >= 100) {
        // winSound.play()
        if (player == 'player1') {
            winnerIs.value = props.nameInfo[0]
            showWinner()
            // alert("Purple Won !!")
        }
        else if (player == 'player2') {
            winnerIs.value = props.nameInfo[1]
            showWinner()
            // alert("Yellow Won !!")
        }
        else if (player == 'player3') {
            winnerIs.value = props.nameInfo[2]
            showWinner()
            // alert("Green Won !!")
        }
        else if (player == 'player4') {
            winnerIs.value = props.nameInfo[3]
            showWinner()
            // alert("Red Won !!")
        }
        // location.reload()
    }

    else {

        let numarr = Array.from(String(sum))
        let n1 = numarr.shift()
        let n2 = numarr.pop()
        console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                playerElement.style.left = `${(9) * 70}px`
                playerElement.style.top = `${(-n1 + 1) * 70 - direction}px`
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
    <div class="flex w-full">
        <div class="w-1/3 flex flex-col mr-16">
        <div class="flex flex-col ">
                    <div class=" pt-10 pb-10 mb-3 mx-2 rounded-2xl" v-show="twoUser" :style="{ backgroundColor: whoTurn == 1 ? color1 : defaultColor }">
                        <p>{{ props.nameInfo[0]}}</p>
                        <!-- <BinaryPreview :select-binary-object="pic1" /> -->
                    </div>
                    <div class=" pt-10 pb-10 mb-3 mx-2 rounded-2xl" v-show="twoUser" :style="{ backgroundColor: whoTurn == 2 ? color2 : defaultColor }">
                        <p>{{ props.nameInfo[1]}}</p>
                        <!-- <BinaryPreview :select-binary-object="props.allPhoto" /> -->
                    </div>
                    <div class=" pt-10 pb-10 mb-3 mx-2 rounded-2xl" v-show="threeUser" :style="{ backgroundColor: whoTurn == 3 ? color3 : defaultColor }">
                        <p>{{ props.nameInfo[2]}}</p>
                    </div>
                    <div class=" pt-10 pb-10 mb-3 mx-2 rounded-2xl" v-show="fourUser" :style="{ backgroundColor: whoTurn == 4 ? color4 : defaultColor }">
                        <p>{{ props.nameInfo[3]}}</p>
                    </div>
                </div>
        
        <div class="w-1/3">
            <!-- <p class="rand" ref="rands">{{ randomNumber }}</p> -->
            <Dice @plays="showPlay" :random="randomNumber"/>
        </div>
    </div>
        <div class="">
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

                <div class="box" id="b76"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b75">75</div>

                <div class="box" id="b74">74</div>

                <div class="box" id="b73">73</div>

                <div class="box" id="b72">72</div>

                <div class="box" id="b71">71</div>

                <div class="box" id="b61">61</div>

                <div class="box" id="b62"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b63">63</div>

                <div class="box" id="b64">64</div>

                <div class="box" id="b65">65</div>

                <div class="box" id="b66">66</div>

                <div class="box" id="b67"><img src="../assets/Pic/blackhole.png"></div>

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

                <div class="box" id="b42"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b43">43</div>

                <div class="box" id="b44">44</div>

                <div class="box" id="b45">45</div>

                <div class="box" id="b46">46</div>

                <div class="box" id="b47">47</div>

                <div class="box" id="b48"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b49">49</div>

                <div class="box" id="b50"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b40">40</div>

                <div class="box" id="b39">39</div>

                <div class="box" id="b38"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b37">37</div>

                <div class="box" id="b36"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b35">35</div>

                <div class="box" id="b34">34</div>

                <div class="box" id="b33">33</div>

                <div class="box" id="b32"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b31">31</div>

                <div class="box" id="b21"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b22">22</div>

                <div class="box" id="b23">23</div>

                <div class="box" id="b24">24</div>

                <div class="box" id="b25">25</div>

                <div class="box" id="b26"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b27">27</div>

                <div class="box" id="b28"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b29">29</div>

                <div class="box" id="b30"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b20">20</div>

                <div class="box" id="b19">19</div>

                <div class="box" id="b18"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b17">17</div>

                <div class="box" id="b16">16</div>

                <div class="box" id="b15">15</div>

                <div class="box" id="b14"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b13">13</div>

                <div class="box" id="b12">12</div>

                <div class="box" id="b11">11</div>

                <div class="box" id="b01"><img src="../assets/Pic/blackhole.png">
                    <p id="player1" v-show="twoUser" ref="p1" :style="{ backgroundColor: color1}"></p>
                    <p id="player2" v-show="twoUser" ref="p2" :style="{ backgroundColor: color2}"></p>
                    <p id="player3" v-show="threeUser" ref="p3" :style="{ backgroundColor: color3}"></p>
                    <p id="player4" v-show="fourUser" ref="p4" :style="{ backgroundColor: color4}"></p>
                </div>

                <div class="box" id="b02">2</div>

                <div class="box" id="b03">3</div>

                <div class="box" id="b04"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b05">5</div>

                <div class="box" id="b06"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b07">7</div>

                <div class="box" id="b08"><img src="../assets/Pic/blackhole.png"></div>

                <div class="box" id="b09">9</div>

                <div class="box" id="b10"><img src="../assets/Pic/blackhole.png"></div>

            </div>
            
            <!-- <div> -->
                 <!-- <p class="rand" ref="rands">{{ randomNumber }}</p> -->
                <p class="turnMessage" ref="turnMessage"></p>
            <!-- </div>  -->
        </div>
        <div v-show="winStatus">
        <WinnerCard v-show="winStatus" :winner="winnerIs"/>
        <!-- <popup  v-show="winStatus" :winner="winnerIs" @play-again="playAgain">
            <template v-slot:winnerPlay>
                </template>
        </popup>  -->
    </div>
    </div>
</template>
 
<style scoped>


/* css new */
/* body{
    background-color: #410365;
} */

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}
.boxs {
    display: grid;
    width: 700px;
    height: 700px;
    margin: auto;
    background-color: #410365;
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

    position: relative;
    border: 3px solid black;
}

#player1 {
    /* background-color: rgb(143, 82, 236);  */
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
   left: -70px;
  /* z-index: 2; */
} 

 #player2 { 
    /* z-index: 2; */
    /* position: relative;
    top: -70px;
    left: 15px;
    transition: all linear 0.5s;
    background-color: rgb(243, 181, 46); */

    /*new*/
    /* z-index: 2; */
  position: relative;
  top: -55px;
  left: -70px;
  transition: all linear 0.5s;
  /* background-color: rgb(243, 181, 46); */
}

#player3 {
    /* background-color: rgb(143, 82, 236); */
    /* position: relative;
    top: -40px;
    transition: all linear 0.5s; */
    /* top: 0; */
    /* right: 15px; */
    /* z-index: 2; */

    /*new*/
    /* background-color: rgb(116, 246, 29); */
    position: relative;
  top: -90px;
  transition: all linear 0.5s;
  /* top: 0; */
  left: -70px; 
   /* z-index: 2; */
 }  

 #player4 { 
    /* background-color: rgb(143, 82, 236); */
    /* position: relative;
    top: -40px;
    transition: all linear 0.5s; */
    /* top: 0; */
    /* right: 15px; */
    /* z-index: 2; */

    /*new*/
     /* background-color: rgb(239, 16, 16); */
    position: relative;
  top: -125px;
  transition: all linear 0.5s; 
  /* top: 0; */
  left: -70px;
  /* z-index: 3; */
 }

 #b01,
#b04,
#b08,
#b21,
#b28,
#b32,
#b36,
#b48,
#b50,
#b62 {
    background-color: yellowgreen;
}

</style>