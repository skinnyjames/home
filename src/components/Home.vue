<template>
  <div>
    <CrossStitch />
    <Selfie>
      <StreetGuide
        image="/images/street.png"
        text="A Schizophrenic's Guide to the Street"
        link="https://docs.google.com/document/d/1opeKgwEukMxzT2zRbJArpV2eH9-yisONlZVb1ck93TY/edit?usp=sharing"
      />
      <Minidisc class="mini" text=":)"  videoId="QW8ra3eUjy4" @modal="youtube" />
      <Poppers :class="['paper', $mq]"></Poppers>
      <template #other-side>
        <div class="mirrored">
          <Poppers :random="true" :class="['paper', 'other', $mq]" />
          <Minidisc @modal="youtube"  videoId="FKA-GFkda-o" class="mini other" />
        </div>
      </template>
    </Selfie>
    <div :class="$mq" id="modal" @click="youtube" v-if="modal">
      <div :class="['modal-body', $mq]" v-html="modal"></div>
    </div>
  </div>
</template>
<script>
import { injectGlobal } from 'vue3-styled-components'
import CrossStitch from './CrossStitch.vue'
import Selfie from './Selfie.vue'
import StreetGuide from './StreetGuide.vue'
import Minidisc from "./Minidisc";
import { ref } from "vue";
import Poppers from "./Poppers";

injectGlobal`
  @font-face {
    font-family: 'xstitch';
    src: url('/fonts/xstitch.ttf');
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`
const modal = ref('')
const showPoppers = ref(false)
const youtube = (str) => {
  if (modal.value) {
    modal.value = ''
  } else {
    modal.value = str
  }
}


export default {
  name: 'App',
  components: {Poppers, Minidisc, CrossStitch, Selfie, StreetGuide },
  setup() {
    return {
      modal,
      youtube,
      showPoppers
    }
  }
}
</script>

<style>
#modal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mirrored {
  bottom: 0px;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
}
.mirrored .guide-container.xs {
  margin-bottom: 100px;
}
.mirrored .guide-container.sm {
  margin-bottom: 220px;
}
.mirrored .guide-container.md {
  margin-bottom: 220px;
}
.mirrored .guide-container.xl {
  margin-bottom: 400px;
}
.mirrored .guide-container.xxl {
  margin-bottom: 400px;
}
.mirrored .guide-container.lg {
  margin-bottom: 270px;
}
.mirrored .guide-container {
  flex-direction: row-reverse;
  text-align: right !important;
}
.mirrored .guide {
  margin-left: inherit !important;
}
.mirrored .guide-container a {
  margin-right: 20px !important;
  margin-left: 0px;
}
.mirrored .guide-container.xl a {
  margin-top: 300px;
}
.mirrored .guide-container.sm a {
  margin-top: 200px !important;
}
.mirrored .guide-container.md a {
  margin-top: 100px !important;
}
.mirrored .guide-container.lg a {
  margin-top: 200px !important;
}
.mirrored .guide-container.xl a {
  margin-top: 350px !important;
}
.mirrored .guide-container.xxl a {
  margin-top: 300px !important;
}
.mirrored .guide-container span {
  text-shadow: -1px -1px 3px rgba(255,255,255,0.5);
}
div.mini {
  margin-left: 100px;
  transform: rotate(-30deg);
  z-index: 5;
}

.mirrored div.mini.other {
  position: absolute !important;
  right: 100px;
  bottom: 400px;
  transform: rotate(30deg);
}
div.mini.sm.other {
  bottom: 540px;
}
div.mini.md.other {
  bottom: 740px;
}

div.mini.lg.other {
  bottom: 730px;
  right: 200px;
}

div.mini.xl.other, div.mini.xxl.other {
  bottom: 730px;
}

.modal-body {
  transition: all 1s;

  width: 900px;
  height: 700px;
}
.modal-body.sm {
  width: 300px;
  height: 300px;
}

.modal-body.md {
  width: 600px;
  height: 600px;
}
.modal-body.xs {
  width: 250px;
  height: 250px;
}
#youtube-frame {
  box-shadow: 2px 2px 60px rgba(255, 255, 255, .7);
}
#poppers-container {
  height: 0px;
  overflow: hidden;
  transition: all 1s;
}
.paper.sm {
  width: 280px !important;
  height: 430px !important;
}

.paper.xs {
  width: 200px !important;
  height: 300px !important;
}
.paper {
  align-self: center;
  transform: rotate(20deg);
  height: 630px;
  width: 480px !important;
  overflow: hidden;
  min-height: 0 !important;

  margin-left: 50px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .7);
  margin-bottom: 100px;
}

.paper.other {
  transform: rotate(-20deg);
  align-self: center;
  margin-right: 50px;
  margin-left: 0px;
}

</style>