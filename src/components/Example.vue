<script setup>
import DisplayWidget from "./example/DisplayWidget";
import { ref } from 'vue'

const arr = ['Herb pods', 'Garden Pack', 'Outdoor light', 'Purifier O2', 'Couch capsule', 'Couch cake', 'Worktop', 'Copse combo', 'Bouncy prop'].map((item) => {
  return { item, size: '110 x 110' }
})

const items = ref(arr);
</script>

<template>
  <div id="context">
    <div id="container">
      <display-widget :items="items" />
    </div>
  </div>
</template>

<style scoped>
 #context {
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 #container {
   width: 50vw;
   height: 60vh;
   display: flex;
   background-color: white;
   border-radius: 40px;
   box-shadow: 2px 2px 20px rgba(0, 0, 0, .2);
   clip-path: view-box;
   overflow: hidden;
 }
</style>