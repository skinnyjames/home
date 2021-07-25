<template>
  <CenteredDiv>
  <div class="frame" :class="$mq">
    <div id="sampler" :class="$mq">
      <ul>
        <li>Thinker</li>
        <li><a target="_blank" href="https://www.github.com/skinnyjames">Programmer</a></li>
        <li><a target="_blank" href="http://home.skinnyjames.net">sean gregory</a></li>
        <li><a target="_blank" href="https://vimeo.com/578952197">Conceptual Artist</a></li>
        <li><a target="_blank" href="https://www.reddit.com/r/AskReddit/comments/lsms5/making_a_spider_pi%C3%B1ata_to_be_filled_with_spiders/">Trickster</a></li>
        <li><a target="_blank" href="https://open.spotify.com/artist/0wqTcreN6E418WVF3e82kV">Rapper</a></li>
        <li><a target="_blank" href="https://www.instagram.com/sean.christopher.gregory/">Painter</a></li>
      </ul>
    </div>
  </div>
  </CenteredDiv>
</template>

<script>
import styled from 'vue3-styled-components'

const CenteredDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default {
  name: 'CrossStitch',
  components: { CenteredDiv }
}
</script>

<style scoped>
  div.frame {
    margin-top: 200px;
    width: 950px;
    height: 550px;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, .7) 2px 3px 2px;
  }
  div.frame.tiny {
    width: 300px;
    height: 150px;
  }
  div.frame.xs {
    margin-top: 100px;
    width: 350px;
    height: 200px;
  }
  div.frame.sm {
    margin-top: 100px;
    width: 400px;
    height: 250px;
  }
  
  div.frame.md {
    margin-top: 150px;
    width: 600px;
    height: 350px;
  }

  div#sampler{ 
    font-family: 'xstitch';
    font-size: 74px;
    height: 500px;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    background: url('/images/stitchbg.png') repeat;
    box-shadow: rgba(0, 0, 0, .7) 2px 3px 3px inset;
  }

  div#sampler.tiny {
    height: 130px;
    width: 280px;
  }

  div#sampler.sm {/* do */
    width: 360px;
    height: 210px;
  }
  div#sampler.xs {
    width: 330px;
    height: 180px;
  }
  div#sampler.md {
    width: 570px;
    height: 320px;
  }
  div#sampler ul {
    position: relative;
    width: 100%;
    height: 100%;
  }
  div#sampler ul, div#sampler li {
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-shadow: rgba(0, 0, 0, .4) 1px 1px 1px;
    list-style-type: none;

  }
  div#sampler li a, div#sampler li a:active, div#sampler li a:hover {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
  div#sampler li {
    cursor: pointer;
    position: absolute;
  }
  div#sampler li:hover {
    text-shadow: none;
  }

  div#sampler li:nth-child(1) {
    color: #3170ff;
    font-weight: bold;
    font-size: 26px;
    left: 50px;
    top: 100px;
  }
  div#sampler li:nth-child(2) {
    color: #c1bb1e;
    font-size: 57px;
    top: 140px;
    left: 100px;
  }
  div#sampler li:nth-child(3) {
    color: #333;
    font-size:20px;
    font-weight: bold;
    top: 180px;
    right: 104px;
  }
  div#sampler li:nth-child(4) {
    color: #ff3131;
    font-size: 100px;
    top: 200px;
    left: 50px;
  }
  div#sampler li:nth-child(5) {
    color: #1ec1bb;
    bottom: 100px;
    left: 250px;
  }
  div#sampler li:nth-child(6) {
    color: #2d751c;
    bottom: 130px;
    right: 100px;
    font-size: 55px;
    font-weight: 580;

  }
  div#sampler li:nth-child(7) {
    color: #c11e82;
    bottom: 70px;
    left: 150px;
    font-size: 43px;
  }
  /* small letters */
  div#sampler.sm li:nth-child(1), div#sampler.xs li:nth-child(1) {
    color: #3170ff;
    font-weight: bold;
    font-size: 13px;
    left: 25px;
    top: 50px;
  }
  div#sampler.sm li:nth-child(2), div#sampler.xs li:nth-child(2) {
    color: #cac408;
    font-size: 23px;
    top: 75px;
    left: 40px;
  }
  div#sampler.sm li:nth-child(3), div#sampler.xs li:nth-child(3) {
    color: #333;
    font-size:12px;
    font-weight: bold;
    top: 85px;
    right: 50px;
  }
  div#sampler.sm li:nth-child(4), div#sampler.xs li:nth-child(4) {
    color: #ff3131;
    font-size: 37px;
    display: flex;
    top: 100px;
    left: 20px;
  }
  div#sampler.sm li:nth-child(5), div#sampler.xs li:nth-child(5) {
    font-size: 28px;
    color: #1ec1bb;
    bottom: 40px;
    left: 100px;
  }
  div#sampler.sm li:nth-child(6), div#sampler.xs li:nth-child(6) {
    color: #2d751c;
    bottom: 45px;
    right: 30px;
    font-size: 25px;
    font-weight: 580;
  
  }
  div#sampler.sm li:nth-child(7), div#sampler.xs li:nth-child(7) {
    color: #c11e82;
    bottom: 24px;
    left: 60px;
    font-size: 23px;
  }
  
  /* xtra small */
  div#sampler.xs li:nth-child(1) {
    left: 25px;
    top: 20px;
  }
  div#sampler.xs li:nth-child(2) {
    top: 50px;
    left: 40px;
  }
  div#sampler.xs li:nth-child(3) {
    top: 180px;
    right: 104px;
  }
  div#sampler.xs li:nth-child(4) {
    top: 80px;
    left: 10px;
  }
  div#sampler.xs li:nth-child(5) {
    bottom: 30px;
    left: 80px;
  }
  div#sampler.xs li:nth-child(6) {
    bottom: 25px;
    right: 30px;
  }
  div#sampler.xs li:nth-child(7) {
    bottom: 14px;
    left: 60px;
  }

  /* medium */
  div#sampler.md li:nth-child(1) {
    font-size: 20px;
    left: 50px;
    top: 50px;
  }
  div#sampler.md li:nth-child(2) {
    font-size: 35px;
    top: 80px;
    left: 100px;
  }
  div#sampler.md li:nth-child(3) {
    font-size: 16px;
    top: 110px;
    right: 50px;
  }
  div#sampler.md li:nth-child(4) {
    font-size: 60px;
    top: 120px;
    left: 50px;
  }
  div#sampler.md li:nth-child(5) {
    font-size: 48px;
    bottom: 80px;
    left: 130px;
  }
  div#sampler.md li:nth-child(6) {
    font-size: 40px;
    bottom: 100px;
    right: 80px;
  }
  div#sampler.md li:nth-child(7) {
    font-size: 30px;
    bottom: 50px;
    left: 100px;
  }

</style>