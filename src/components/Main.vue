<template>
<div>
  <TopBar/>
  <div id="container">
    <div id="team1">
      <img src="/static/thonking.jpg" alt="thonking">
    </div>
    <div id="team2">
      <img src="/static/done.png" alt="done">
    </div>
  </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
img {
  height: 400px;
  width: 400px;
}

#container {
  display: flex;
  justify-content: space-around;
}

#container div {
  float: left;
  display: block;
}
</style>
