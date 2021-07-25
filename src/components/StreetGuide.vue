<template>
  <mq-layout mq='lg+'>
    <div class="guide" :class="$mq">
      <img src="/images/street.png"/>
      <a name="street" href="/pdf/street-guide.pdf" target="_blank"><span>A Schizophrenic's Guide to the Street <br><i class="fas fa-file-download"></i></span></a>
    </div>
  </mq-layout>
</template>

<script>
export default {
  name: 'StreetGuide',
  components: {}
}
</script>

<style scoped>
  span {
    position: absolute;
    margin-top: 350px;
    font-size: 40px;
    font-weight: bold;
    margin-left: 20px;
    background-color: #886210;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255,255,255,0.6);
    background-clip: text;
    font-family: 'Patrick Hand SC', cursive;
  }
  span:hover {
    background-color:  #a17005;
    cursor: pointer;
  }
  div.guide {
    position: relative;
    z-index: 4;
    padding: 0;
    margin: 0;
    box-shadow: rgba(0, 0, 0, .4) 1px 2px 2px;
    transform: rotate(10deg);
  }
  div.guide.lg {
    margin-top: -300px;
  }

  div.guide.md {
    margin-top: -300px;
  }
  div.guide.sm {
    margin-top: -250px;
  }
  div.guide.xs {
    margin-top: -550px;
  }
  div.guide.md img {
    height: 450px;
  }
  div.guide.sm img {
    height: 350px;
  }
  div.guide.xs img{
    height: 250px;
  }
  
</style>