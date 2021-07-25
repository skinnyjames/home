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
    min-height: 1800px;
    z-index: 1;
    margin-top: -540px;
    display: flex;
    flex-direction: column;
    background: url('/images/retina_wood.png') repeat;
  }
  div.table.tiny {
    margin-top: -900px;
  }
  div.table.sm {
    margin-top: -230px;
  }
  div.table.xs {
    margin-top: -100px;
  }
  div.table.md {
    margin-top: -200px;
  }
  div.table.lg {
    margin-top: -200px;
  }

</style>