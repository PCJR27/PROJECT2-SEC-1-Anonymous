<script setup>
import { computed } from 'vue';
import { ref } from 'vue'

const props = defineProps({
    selectBinaryObject: [String, Object],default : null

})
console.log(props.selectBinaryObject)
// const previewSrc = ref('')
// const previewSrc = ref([])
 const previewSrc = ref('')
// if (props.selectBinaryObject === "./assets/Pic/DefaullProfile.jpeg"){
//     previewSrc = "./assets/Pic/DefaullProfile.jpeg"
// }
const previewImage = () => {
    const reader = new FileReader()

    reader.addEventListener(
        "load",
        () => {
            // convert image file to base64 string
            // previewSrc.value = reader.result;

            // previewSrc.value.push(reader.result) 
            previewSrc.value = reader.result
            // test.push(reader.result) 
            
            // if (previewSrc.value.length > 1){
            //     previewSrc.value.splice(0, 1)
            // }
        },
        false
    );

    if (props.selectBinaryObject) {
        reader.readAsDataURL(props.selectBinaryObject);
    }
}

const previewDoc = () => {
  previewSrc.value=URL.createObjectURL(props.selectBinaryObject)
}
const isDoc=ref(false)
const canPreview = computed(() => {
    console.log(props.selectBinaryObject)
    if (typeof props.selectBinaryObject === 'object') {
        if (props.selectBinaryObject.name.endsWith('pdf')) {
            previewDoc()
            isDoc.value=true
        } else {
            previewImage()
            isDoc.value=false
        }
        return true
    } else
        return false
})

</script>
 
<template>
    <div>
        <div v-if="canPreview && !isDoc">
            
            <!-- <img v-for=" item of previewSrc" :src="item" class="w-52 h-52"> -->

            <img :src="previewSrc" class="w-40 h-40 rounded-2xl object-cover">
            <!-- <img :src="previewSrc[1]" class="w-52 h-52"> -->
            <!-- {{ item }} -->
            <!-- {{ previewSrc.length }}
            {{ test }} -->
           
        </div>
        <div v-if="canPreview && isDoc">
            <a :href="previewSrc" target="_blank"><span class=" text-blue-300">{{ previewSrc }}</span></a>
        </div>
    </div>
</template>
 
<style scoped></style>