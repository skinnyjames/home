<script setup>
  import {defineProps } from "vue";

  const props = defineProps({
    items: Array
  })

  const chunkedItems = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
</script>

<template>
  <div id="display-widget">
    <div class="display">
      <div class="graphic">
        <h4>helo</h4>
      </div>
      <div class="store">
        <div class="heading">

        </div>
        <div class="table">
          <div v-for="(chunk, idx) in chunkedItems(items, 3)" :key="idx ">{{ chunk }}</div>
        </div>
      </div>
    </div>
    <div class="widget"></div>
  </div>
</template>

<style>
#display-widget {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
}
.display {
  display: flex;
  width: 100%;
  height: calc(100% - 40px - 80px);
}
.display .graphic, .display .store {
  width: 50%;
  height: 100%;
  border: 1px solid #ccc;
}

.widget {
  height: 80px;
  width: 100%;
  border: 1px solid #ccc;
}
</style>