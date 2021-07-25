<template>
  <MqLayout mq="xs-md">
    <SmallCurtainHeader />
  </MqLayout>
  <MqLayout mq="lg+">
    <CurtainHeader />
  </MqLayout>
</template>
<script>
import styled from 'vue3-styled-components'

const CurtainHeader = styled.div`
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: url('/images/curtain.png') repeat-x;
`

const SmallCurtainHeader = CurtainHeader.extend`
  height: 100px;
  background: url('/images/curtain-sm.png') repeat-x
`
export default {
  name: 'HomeHeader',
  components: { CurtainHeader, SmallCurtainHeader}
}
</script>
