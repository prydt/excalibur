<template>
<div>
  <TopBar/>
  <div id="main-container">
      <div id="logo">
        <img src="static/Chalice.png" alt="chalice logo">
      </div>
      <img v-for="(item, index) in sideImgs" :key="item" class="side-img" :src="'static/' + item + '.png'" :title="sideTitles[index]">
  </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'main',
  data () {
    return {
      sideImgs: ['Gandalf_Edited', 'King_Arthur_Edited', 'Lancelot_Edited', 'guenever', 'Mordred_Edited'],
      sideTitles: ['Merlin', 'King Arthur of England', 'Sir Lancelot', 'Queen Guenever', 'Mordred']
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
#logo {
  text-align: center;
}

#logo img {
  width: 20%;
}

.side-img {
  width: 20%;
  float: left;
  padding-top: 20px;
  padding-bottom: 60px;
}
</style>
