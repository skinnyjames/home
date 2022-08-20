<template>
  <div :class="$mq" @click="$emit('modal', youtube(videoId))" id="minidisc">
    <span>{{ text || ':O'}}</span>
    <img src="/images/minidisc.png"/>
  </div>
</template>

<script>
  const youtube = (videoId) =>  `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  export default {
    props: ['text', 'videoId'],
    name: 'Minidisc',
    setup() {
      return {
        youtube
      }
    }
  }
</script>

<style>
#minidisc {
  font-family: "Patrick Hand SC";
  width: 300px;
  position: relative;
}
#minidisc.sm {
  width: 140px;

}
#minidisc.xs {
  width: 100px;
}
#minidisc.xs span {
  font-size: 17px;
}
#minidisc.lg {
  width: 200px;
  margin-left: 200px;
}
#minidisc.lg span {
  font-size: 33px;
}
#minidisc.md {
  width: 150px;
}
#minidisc.md span {
  font-size: 20px;
}
#minidisc.sm span {
  font-size: 25px;
}

#minidisc:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, .2);
}

#minidisc span {
  position: absolute;
  right: 20%;
  top: 40%;
  color: white;
  transform: rotate(90deg);
  font-size: 45px;
}
#minidisc img {
  width: 100%;
}

</style>