<template>
<div>
  <TopBar/>
  <div id="container">
    <div id="side1">
      <div id="text-box" v-for="item in sideText" :key="item">
        <p>{{ item }}</p>
      </div>
    </div>
    <div id="side2">
      <img v-for="item in sideImgs" :key="item" class="side-img" :src="'static/' + item + '.png'">
    </div>
  </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'Players',
  data () {
    return {
      sideText: ['Merlyn is a great wizard who has helped and advised Arthur throughout the King’s lifetime, aiding Arthur’s ascension to the throne. With ability to see the future, dedication to the pursuit of Goodness, and knowledge of supernatural beings such as the Lady in the Lake, Merlyn’s role as Arthur’s mentor in Arthurian Legend goes unchallenged; however, even Merlyn has begun to feel the effects of time’s passage. As Arthur’s kingdom grows older, Merlyn has been making appearances less and less frequently.',
        'As the King of England, Arthur brought order and culture to the “Dark Ages” of Europe. His ascension to the throne and his sword are world renowned, with many acknowledging the King as a great fighter and peerless ruler. As an accomplished commander and fighter, Arthur has conquered tyrants, defeated giants, and slain dragons. He also heads the Round Table and its valiant knights. In the later stages of his rule, Arthur and Lancelot have had conflicts over Guenever. It is suspected that Mordred and Agravine forced Arthur’s hand in fighting with Lancelot in a bid to claim the throne.',
        'Lancelot, a world-renowned chivalrous knight, is one of Arthur’s best combatants and once held the #1 position on the tilting and battle averages - in fact, Lancelot maintained perfect averages until being bested by his son, Galahad. He has ventured on many quests - some more fruitful than others - the quest for the Holy Grail and various adventures during his (attempted) escape from Guenever. Lancelot remained on top of the averages until his bout with Galahad. ',
        'Guenever is Arthur’s wife, Lancelot’s lover, and the daughter of King Leodegrance. King Leodegrance bestowed King Arthur with the Round Table, which currently holds 150 of the best knights in the kingdom. King Arthur married Guenever due to love, political power, and the advice of the great wizard Merlyn. Unfortunately, Guenever is a source of the tension between Lancelot and King Arthur. During times of great strife, like Mordred’s reign, Guenever holes herself up in a stone box and manages to stave of both hunger and Mordred with the aid of either the Bishop or King Arthur depending on my memory.',
        'Mordred is the son of King Arthur and Morgause. One of Mordred’s defining traits, his deeply rooted hatred towards Arthur, is a result of Arthur’s attempt to kill Mordred as a child in an attempt to hide Arthur’s shame. Throughout his career, Mordred has hatched and carried out various treacherous plots against Arthur. With rumours of his attempts to claim the throne over his father’s dead body, there is no doubt that he brings pandemonium wherever he goes.'
      ],
      sideImgs: ['Gandalf_Edited', 'King_Arthur_Edited', 'Lancelot_Edited', 'guenever', 'Mordred_Edited']
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-around;
}

#container div {
  float: left;
  display: block;
}

#side1 {
  min-width: 800px;
}

#side2 {
  width: 500px;
}

#text-box {
  padding: 60px;
  font-size: 1.5em;
}

.side-img {
  width: 70%;
  float: left;
  padding-top: 20px;
  padding-bottom: 60px;
}
</style>
