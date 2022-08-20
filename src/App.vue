<template>
  <HomeScreen class='home' :size="$mq">
    <HomeHeader/>
    <router-view></router-view>
  </HomeScreen>
</template>

<script>
import HomeHeader from "./components/Header";
import styled from "vue3-styled-components";
const props = { size: String }
const calcTile = (props) => ['xs', 'sm', 'md'].includes(props.size) ? '/images/smalltile.png' : '/images/tile.png'
export const HomeScreen = styled('div', props)`
  width: 100%;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  background: url(${props => calcTile(props)}) repeat;

`
export default {
  components: {
    HomeHeader,
    HomeScreen
  }
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.35s ease-out;
}


.slide-right-enter-to {
  position: absolute;
  right: 0;
}


.slide-right-enter-from {
  position: absolute;
  right: -100%;
}


.slide-right-leave-to {
  position: absolute;
  left: -100%;
}


.slide-right-leave-from {
  position: absolute;
  left: 0;
}



.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.35s ease-in;
}


.slide-left-enter-to {
  position: absolute;
  left: 0;
}


.slide-left-enter-from {
  position: absolute;
  left: -100%;
}


.slide-left-leave-to {
  position: absolute;
  right: -100%;
}


.slide-left-leave-from {
  position: absolute;
  right: 0;
}
</style>