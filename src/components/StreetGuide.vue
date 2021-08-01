<template>
  <div class="guide-container" :class="$mq">
    <div class="guide">
      <img src="/images/street.png"/>
    </div>
    <a name="street" href="https://docs.google.com/document/d/1opeKgwEukMxzT2zRbJArpV2eH9-yisONlZVb1ck93TY/edit?usp=sharing" target="_blank"><span>A Schizophrenic's Guide to the Street <br><i class="fas fa-file-download"></i></span></a>
  </div>
</template>

<script>
export default {
  name: 'StreetGuide',
  components: {}
}
</script>

<style scoped>
  a {
    text-decoration: none;
    margin-top: 400px;
    font-size: 40px;
    margin-left: 20px;
    width: 250px;
    display: block;
    z-index: 4;

  }
  span {
    font-weight: bold;
    display: block;
    background-color: #886210;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255,255,255,0.6);
    background-clip: text;
    font-family: 'Patrick Hand SC', cursive;
  }
  a:hover span {
    background-color:  #a17005;
    cursor: pointer;
  }
  div.guide-container div.guide {
    padding: 0;
    margin: 0;
    margin-left: 150px;
  }
  div.guide-container div.guide img {
    box-shadow: rgba(0, 0, 0, .4) 1px 2px 2px;
  }
  div.guide-container {
    transform: rotate(10deg);
    margin-top: 100px;
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: center;
  }
  div.guide-container.xs {
    transform: rotate(3deg);
  }
  div.guide-container.xxl a {
    margin-top: 300px;
  }
  div.guide-container.lg  {
    margin-top: -100px;
  }
  div.guide-container.lg a {
    margin-top: 250px;
  }
  div.guide-container.md {
    margin-top: 0px;
  }
  div.guide-container.md a {
    margin-top: 150px;
    font-size: 35px;
  }
  div.guide-container.sm a {
    margin-top: 170px;
    font-size: 25px;
  }
  div.guide-container.md div.guide {
    margin-top: -30px;
  }

  div.guide-container.xs div.guide {
    margin-left: 0px;
  }
  div.guide-container.sm {
    margin-top: 30px;
  }
  div.guide-container.xs {
    margin-top: 50px;
  }
  div.guide-container.lg img {
    height: 500px;
  }
  div.guide-container.md img {
    height: 350px;
  }
  div.guide-container.sm img {
    height: 350px;
  }
  div.guide-container.xs img{
    height: 180px;
  }
  div.guide-container.xs a, div.guide.xs span {
    margin-top: 60px;
    font-size: 25px;
  }
  div.guide.xs {
    margin-left: 0px;
  }
  
</style>