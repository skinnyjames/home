<template>
  <HomeScreen :size="$mq">
    <HomeHeader/>
    <CrossStitch/>
    <Selfie>
      <StreetGuide/>
    </Selfie>
  </HomeScreen>
</template>

<script>
import styled, { injectGlobal } from 'vue3-styled-components'
import CrossStitch from './components/CrossStitch.vue'
import Selfie from './components/Selfie.vue'
import HomeHeader from './components/Header.vue'
import StreetGuide from './components/StreetGuide.vue'

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

const props = { size: String }

const calcTile = (props) => ['xs', 'sm', 'md'].includes(props.size) ? '/images/smalltile.png' : '/images/tile.png'

const HomeScreen = styled('div', props)`
  width: 100%;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  background: url(${props => calcTile(props)}) repeat;
`

export default {
  name: 'App',
  components: { HomeScreen, HomeHeader, CrossStitch, Selfie, StreetGuide}
}
</script>

<style>

</style>