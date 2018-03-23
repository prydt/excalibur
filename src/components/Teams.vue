<template>
<div>
  <TopBar/>
  <div id="main">
    <div class="team">
      <h2>Team Malory Backstory</h2>
      <p>    Once a knight, twice a turncoat, Thomas Malory likely served in Warwickshire and Winwick before deciding to go rogue and committing several crimes. His list of transgressions includes the attempted murder of the Duke of Buckingham, livestock theft, robbery of the Combe Abbey, and more. After being arrested, Malory’s time languishing in a prison cell - interspersed escapes and bail-outs - was spent writing a book containing the Arthurian legends. The book became a faithful rendition of Arthur’s legends detailing of the tales of King Arthur. Le Morte d’Arthur was published fifteen years after Malory’s final release from prison and death.</p>
    </div>
    <div class="team">
      <h2>Team White Backstory</h2>
      <p>T.H. White wrote The Once And Future King to recapture the essence and ideas of Arthurian legend while providing modern readers a more familiar interpretation of the ancient texts. Aiming to expand the Arthurian audience to the common man, White crated dialects to convey the maturity of the characters by utilizing unique - but more “modern-day” - tones. To further the present-day reader’s understanding of Arthurian legend, White even utilizes anachronisms (Medieval era Communism, anyone?). Despite the radical departure from the prim and proper writing style of Malory’s rendition, White manages to convey the grandiosity of the older author’s books. (In fact, White often directly references Malory throughout The Once and Future King.)</p>
    </div>
  </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  components: {
    TopBar
  }
}
</script>

<style scoped>
.team {
  padding: 50px;
}
</style>
