<template>
  <CenteredDiv>
    <Drawing :image="'gum.png'"/>
    <Drawing style="margin-top: 27%;margin-left: 10%;transform: rotate(-15deg);" :image="'balloons.jpg'" />
    <Drawing :image="'owl.png'" style="margin-top: 140px; margin-left: 70%;transform: rotate(-5deg);"></Drawing>
    <div class="self" :class="$mq"></div>
    <div class="table start" :class="$mq">
      <slot></slot>
    </div>
    <div class="table end" :class="$mq">
      <slot name="other-side"></slot>
    </div>
  </CenteredDiv>
</template>

<script>
  import styled from 'vue3-styled-components'
  import Drawing from "./selfie/Drawing";

  const CenteredDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column
    align-items: center;
    position: relative;
  `
  export default {
    name: 'CrossStitch',
    components: { Drawing, CenteredDiv }
  }
</script>

<style scoped>
  .chair {
    position: absolute;
    bottom: -00px;
    width: 900px;
    margin-top: 400px;
    z-index: 2;
  }
  div.self { 
    width: 100%;
    height:1800px;
    min-height: 1100px;
    z-index: 2;
    filter: blur(2px);
    background: url('/images/self.png') no-repeat;
    background-position: center top;
    background-size: contain;
  }

  div.self.xs {
    height: 500px;
    min-height: unset;
  }
  div.self.sm {
    height: 800px;
    min-height: unset;
  }
  div.self.md {
    height: 1400px;
    min-height: unset;
  }
  div.self.md {
    height: 1000px;
    min-height: unset;
  }
  div.self.lg {
    height: 1200px;
    min-height: unset;
  }

  div.table {
    width: 100%;
    min-height: 1200px;
    z-index: 1;
    margin-top: -540px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(1deg, rgba(255, 255, 255, .6), rgba(255, 255, 255, .0), rgba(255, 255, 255, .0)), url('/images/retina_wood.png') repeat;
  }

  div.table.end {
    position: relative;
    width: 100%;
    min-height: calc(2300px - 300px);
    margin-top: 0;
    border-bottom: 2px solid rgba(102, 81, 17, .9);
    transform: rotate(180deg);
    box-shadow: 2px 0px 4px rgba(0, 0, 0, .4) inset;
    background: linear-gradient(1deg, rgba(102, 81, 17, .6), rgba(102, 81, 17, .1)), url('/images/retina_wood.png');
    background-blend-mode: multiply;
  }

  div.table.end.xs, div.table.end.sm, div.table.end.md, div.table.end.lg, div.table.end.xl {
    margin-top: 0px;
    min-height: 1000px;
  }

  div.table.end.xs {
    min-height: 800px;
  }

  div.table.end.sm {
    min-height: 1200px;
  }
  div.table.end.md {
    min-height: 1500px;
  }
  div.table.end.lg {
    min-height: 1800px;
  }
  div.table.end.xl {
    min-height: 2000px;
  }

  div.table.tiny {
    margin-top: -900px;
  }
  div.table.sm {
    min-height: 600px;
    margin-top: -230px;
  }
  div.table.xs {
    min-height: 800px;
    margin-top: -100px;
  }
  div.table.md {
    min-height: 600px;
    margin-top: -200px;
  }
  div.table.lg {
    margin-top: -200px;
  }

</style>