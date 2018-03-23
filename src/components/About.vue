<template>
<div>
  <TopBar/>
  <div id="main">
    <div class="bio" v-for="item in bio" :key="item">
      <h2>{{ item.name + ' - ' + item.grade }}</h2>
      <blockquote>{{ item.desc }}</blockquote>
    </div>
    <div id="cite">
      <h2>Work Cited (images)</h2>
      <p>
        Butler, Charles Ernest. “King Arthur.” Wikipedia, Mark Cartwright, 11 May 2017.<br>
        <br>
        Dashinvaine. “Queen Guinevere.” Deviant Art, Dashinvaine, 1 Oct. 2008, dashinvaine.deviantart.com/art/Queen-Guinevere-99497153<br>
        <br>
        Lang, Andrew. “Tales of the Round Table; Based on the Tales in the Book of Romance.” Longmans, Green and Co., 1908.<br>
        <br>
        Rackham, Arthur. “Sir Lancelot and Sir Balin.” Wiki Art, www.wikiart.org/en/arthur-rackham/sir-lancelot-and-sir-balin.<br>
        <br>
        Whitelightnin. “Gandalf the Grey.” Deviant Art, Whitelightnin, 16 Sept. 2008, witelightnin.deviantart.com/art/Gandalf-the-Grey-98179433.<br>
      </p>
    </div>
  </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  data () {
    return {
      bio: [
        {
          name: 'Pranoy Dutta',
          grade: '9th grade',
          desc: 'A Vim enthusiasts who likes listening to music, programming, and playing video games. He\'s rather bad at HTML5 and website technology.'
        },
        {
          name: 'Ben Wang',
          grade: '9th grade',
          desc: 'I think this water bottle has lead in it. ~ Ben Wang'
        },
        {
          name: 'Eric Bau',
          grade: '10th grade',
          desc: 'A boi who thinks too much at times and too little at other times with a penchant for not thinking about what I\'m he\'s supposed to think about. I think.'
        },
        {
          name: 'Joshua Weng',
          grade: '10th grade',
          desc: 'Likes to sleep and waste time'
        }
      ]
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
.bio {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
}

#cite {
  padding: 50px;
}
</style>
