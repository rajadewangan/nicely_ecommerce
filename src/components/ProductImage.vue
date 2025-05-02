<template>
    <div>
      <!-- <img :src="thumbnail" alt="Main product" class="w-full rounded mb-4" /> -->
      <div class="w-full max-w-md h-80 mx-auto mb-4 overflow-hidden rounded border">
      <img
        :src="selectedImage"
        alt="Main product"
        class="w-full h-full object-contain"
      />
    </div>

      <div class="flex gap-2">
        <!-- <img v-for="(img, i) in images" :key="i" :src="img" class="w-16 h-16 object-cover border" /> -->
        <img  v-for="(img, index) in images"
        :key="index"
        :src="img" 
        @click="selectImage(img)"
        class="w-16 h-16 object-cover border cursor-pointer"
        :class="{ 'border-red-500': selectedImage === img }" />
      </div>
    </div>
  </template>
  
  <script>
 export default {
    name:"ProductImges",
    props:{
        images:{
            type:Array,
        },
        thumbnail:{
            type:String,
        }
    },
    data(){
        return {
            selectedImage:this.thumbnail,
        }
    },
    methods:{
        selectImage(img){
            this.selectedImage=img;
        }
    },
    watch:{
        thumbnail(newVal){
            this.selectedImage=newVal;
        }
    }
 }
  </script>
  