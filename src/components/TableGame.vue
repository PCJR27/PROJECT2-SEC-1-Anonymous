<script setup>
import { ref } from 'vue';
let p1=ref('')
let p2=ref('')
let p3=ref('')
let p4=ref('')

function playGame(){
    let num = Math.floor(Math.random() *6+1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1
   
}
</script>
 
<template>
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
                    <p id="player3" ref="p3"></p>
                    <p id="player4" ref="p4"></p>
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
    </div>
</template>
 
<style scoped>
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

#player1,#player2,#player3,#player4{
    width: 30px;
    height: 30px;
    border-radius: 100px;
    /* background-color: rgb(236, 82, 82); */
    position: relative;
    border: 3px solid black;
}

#player1{
    background-color: rgb(143, 82, 236); 
    position: relative;
    top: -40px;
    transition: all linear 0.5s;
    /* top: 0; */
    right: 15px;
    /* z-index: 2; */
}

#player2{
    /* z-index: 2; */
    position: relative;
    top:-70px;
    left: 15px; 
    transition: all linear 0.5s;
    background-color: rgb(243, 181, 46);
}

#player3{
    /* z-index: 2; */
    position: relative;
    top: -70px;
    right: 15px; 
    transition: all linear 0.5s;
    background-color: rgb(116, 246, 29);
}

#player4{
    /* z-index: 2; */
    position: relative;
    top: -100px;
    left: 15px; 
    transition: all linear 0.5s;
    background-color: rgb(239, 16, 16);
}
</style>