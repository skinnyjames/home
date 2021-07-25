<template>
  <CenteredDiv>
    <div class="self" :class="$mq"></div>
    <div class="table" :class="$mq">
      <slot></slot>
    </div>
  </CenteredDiv>
</template>

<script>
  import styled from 'vue3-styled-components'

  const CenteredDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column
    align-items: center;
    position: relative;
  `
  export default {
    name: 'CrossStitch',
    components: { CenteredDiv }
  }
</script>

<style scoped>
  div.self { 
    width: 100%;
    height:1800px;
    min-height: 1100px;
    z-index: 2;
    background: url('/images/self.png') no-repeat;
    background-position: center top;
    background-size: contain;
  }
  div.self.xs {
    height: 1100px;
  }
  div.self.sm {
    height: 10000px;
  }
  div.self.sm, div.self.md {
    height: 1400px;
  }

  div.table {
    width: 100%;
    min-height: 800px;
    z-index: 1;
    margin-top: -540px;
    display: flex;
    justify-content: center;
    background: url('/images/retina_wood.png') repeat;
  }
  div.table.tiny {
    margin-top: -900px;
  }
  div.table.sm {
    margin-top: -800px;
  }
  div.table.xs {
    margin-top: -700px;
  }
  div.table.md {
    margin-top: -600px;
  }
  div.table.lg {
    margin-top: -800px;
  }

</style>