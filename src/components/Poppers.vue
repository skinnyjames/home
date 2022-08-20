<template>
  <div>
    <div id="poppers" :class="$mq">
      <h1>
      <ColoredText :random="random" word="Poppers!"></ColoredText>
      </h1>
      <div v-for="(line, idx) in poem" :key="idx">
        <ColoredText :random="random" :word="line"></ColoredText>
      </div>
    </div>
  </div>
</template>

<script>
import { injectGlobal} from "vue3-styled-components";
import ColoredText from "./poppers/ColoredText";

injectGlobal`
  @font-face {
    font-family: 'Bubble Bobble';
    src: url('/fonts/bubble-bobble.ttf');
    font-weight: bold;
  }
`
const poem = [
  'Pherope! Pherope-pah-pah!',
  `Blup, Blup, Blup`,
  'Gluppy Blup',
  'Gluppy Blup',
  'Gluppy Blup',
  'Gluppy Blup',
  '',
  'Bluckle, Bluckle',
  'Bluckle',
  'Bluckle!',
  '...',
  'Bluckle?',
  '',
  'Chk-Chack - QUALLACK!',
  '',
  'Quillipblacblearg',
  'Capfwakah fwop!',
  '',
  'HUUUUUUUUuuuuuuuuuuuuuhhhhhh!',
  '',
  'Plip, Plap',
  '',
  'Plip',
  '.',
  'Plip.'
]
export default {
  name: 'Poppers',
  props: ['random'],
  components: {ColoredText},
  setup() {
    return {
      poem
    }
  }
}
</script>

<style>
.paper #poppers {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  overflow: hidden;
  min-height: 0 !important;
  background: url("/images/handmade-paper.png");
  background-color: rgba(89, 52, 0, 1);
}
.paper #poppers h1 {
  text-shadow: 1px 2px 3px rgba(0, 0, 0, .4);
  font-size: 50px !important;
  margin: 5px;
}
.paper #poppers p {
  margin: 2px;
  font-size: 20px !important;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, .4);
}
div#poppers.xs h1 div {
  font-size: 25px !important;
}
div#poppers.xs div {
  margin: 0 !important;
  font-size: 10px !important;
}

div#poppers {
  position: relative;
  font-family: 'Bubble Bobble';
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh + 400px);
  z-index: 2;

}

h1 {
  font-size: 160px;
}
p {
  margin: 30px;
  font-size: 80px;
  word-wrap: break-word;
}
</style>