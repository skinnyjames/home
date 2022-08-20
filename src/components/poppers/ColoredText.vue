<template>
  <div class="color-text">
    <span v-for="(letter, idx) in word.split('')"  :key="idx" :style="style(random)">{{ letter }}</span>
  </div>
</template>

<script>
import { ref } from "vue";

const range = [...Array(360).keys()]
const colors = [ '#fc2403', '#177813', '#e86c00', '#e8e523','#03f8fc', '#0330fc', '#8803fc', '#fc0384']
const letters = ref([]);
const style = (random) => {
  if (random) {
    shuffle(range)
    const degrees = range[0]
    return {
      transform: `rotate(${degrees}deg)`,
      color: color()
    }
  } else {
    return {
      color: color()
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const color = () => {
  shuffle(colors);
  return colors[0];
}

export default {
  name: 'ColoredText',
  props: ['word', 'random'],
  setup() {
    return {
      color,
      letters,
      style
    }
  }
}
</script>

<style>
  div.color-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  span {
    min-width: .3em;
    margin: 0;
    padding: 0;
    display: block;
  }
</style>