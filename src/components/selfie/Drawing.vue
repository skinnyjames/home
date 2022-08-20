<template>
  <div id="drawing" :class="$mq">
    <div class="tape left"></div>
    <div class="tape right"></div>
    <div class="selfie" :style="{ 'background': `url('/images/${image}') no-repeat`, 'background-size': 'cover', 'background-position': 'center'}"></div>
    <div class="selfie reflect" :style="{ 'margin-top': '2px', 'background': `url('/images/${image}') no-repeat`, 'background-size': 'cover', 'background-position': 'center',  transform: 'scale(1, -1)'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Drawing',
  props: ['image'],
}
</script>

<style>
#drawing.md {
  margin-left: 30px;
  margin-top: 10px;
}
#drawing.md .selfie {
  width: 190px;
  height: 250px
}
#drawing.md .tape {
  width: 4.5em;
  height: 2em;
}
#drawing.md .tape.left {
  margin-left: -25px;
}
#drawing.md .tape.right {
  margin-right: -25px;
}
#drawing.sm {
  margin-left: 30px;
  margin-top: 10px;
}
#drawing.xl {
  margin-left: 50px;
  margin-top: 80px;
}
#drawing.xl .selfie {
  width: 250px;
  height: 300px;
}
#drawing.lg {
  margin-left: 50px;
  margin-top: 100px;
}
#drawing.lg .selfie {
  width: 200px;
  height: 300px;
}
#drawing.lg .tape {
  width: 4em;
  height: 2em;
}
#drawing.lg .tape.left {
  margin-left: -20px;
}

#drawing.lg .tape.right {
  margin-right: -20px;
}
.tape.bottom.left {
  transform: rotate(45deg);
}
.tape.bottom.right {
  transform: rotate(-45deg);
}

#drawing.xxl .tape.bottom.right, #drawing.xxl .tape.bottom.left {
  margin-top: -40px;
}
#drawing {
  transform: rotate(10deg);
  margin-left: 300px;
  position: absolute;
  z-index: 3;
  left: 0;
}
#drawing.sm .selfie {
  width: 150px;
  height: 200px;
}
#drawing.sm .tape {
  width: 3em;
  height: 1em;
}
#drawing.sm .tape.left {
  margin-left: -10px;
}
#drawing.sm .tape.right {
  margin-right: -10px;
}
#drawing.sm {
  left: 0;
}
#drawing.xs {
  margin-left: 10px;
  margin-top: 50px;
}
#drawing.xs .selfie {
  width: 100px;
  height: 150px;
}
#drawing.xs .tape {
  width: 2em;
  height: 1em;
}
#drawing.xs .tape.left {
  margin-left: -10px;
}
#drawing.xs .tape.right {
  margin-right:-10px;
}
.tape {
  z-index: 4;
  background-color: hsla(0,0%,100%,.2);
  box-shadow: inset 0 0 1em .5em hsla(0,0%,100%,.1);
  height: 3em;
  position: absolute;
  width: 9em;
  -webkit-filter: drop-shadow(0 1px 1px hsla(0,0%,0%,.3));
}
.tape.left {
  transform: rotate(-45deg);
  margin-left: -60px;
}
.tape.right {
  transform: rotate(45deg);
  right: 0;
  margin-right: -60px;
}
.tape:after,
.tape:before {
  background-size: .4em .4em;
  bottom: 0;
  content: '';
  position: absolute;
  top: 0;
  width: .2em;
}
.tape:after {
  background-image: linear-gradient(45deg, transparent 50%, hsla(0,0%,100%,.3) 50%),
  linear-gradient(-45deg, transparent 50%, hsla(0,0%,100%,.3) 50%);
  background-position: 0 100%;
  left: -.2em;
}
.tape:before {
  background-image: linear-gradient(135deg, transparent 50%, hsla(0,0%,100%,.3) 50%),
  linear-gradient(-135deg, transparent 50%, hsla(0,0%,100%,.3) 50%);
  background-position: 100% 100%;
  right: -.2em;
}
div.reflect {
  transform: rotate(180deg);
  mask:linear-gradient(0deg, rgba(255, 255, 255, .2), transparent 30%);
}
div.selfie {
  width: 300px;
  height: 400px;
  filter: sepia(50%);

  mix-blend-mode: hard-light;
  background-position: center;
  background-size: cover;
  box-shadow: 2px 1px 3px rgba(0, 0, 0, .7);
}
</style>