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
    <div class="team">
      <h2>Team Comparisons</h2>
      <p>In Le Morte de Arthur, Malory writes in a more somber tone, in contrast to White whose prose is very light hearted and flamboyant even during the troubling times in the book. This can be attributed with Malory’s aim of creating a sort of epic, a character that is the epitome of justice and the ideal ruler of the entirety of England. The king, in Malory’s eyes, should be one who is both wise and just, one that never shirks from his responsibilities and yet never exceeds his boundaries as the king of England. White, on the other hand, aims to entertain the audience with common household items today suddenly appearing in Medieval England and comedic moments to keep the readers hooked. Because of this shift from a more history-like story to an entertaining one, the final battle of the King Arthur and his son Mordred is removed from T.H. White, presumably because the death of the hero Arthur would be unappealing to the masses at home.</p>
    </div>
    <div class="team">
      <h1>Team Traits</h1>
      <h2>Merlyn</h2>
      <ul>
        <li>Married to Nimue in White </li>
        <li>Role of “mentor” gradually fades towards the end of White’s novel</li>
      </ul>
      <h2>King Arthur</h2>
      <ul>
        <li>Malory’s “perfect king”</li>
        <li>White portrays Arthur as a great king, but a flawed man</li>
        <li>Sir Ector is his foster father in Malory</li>
        <li>In both books, Arthur’s death is ambiguous - Malory sends Arthur to Avalon with his sister, while White never covers Arthur’s death.</li>
        <li>Morgause is his sister in Malory, half-sister in White</li>
      </ul>
      <h2>Lancelot</h2>
      <ul>
        <li>T. H. White’s Lancelot is unusually ugly</li>
        <li>Lancelot is trained by his uncle Dap in White’s rendition</li>
        <li>Lancelot quests for the Holy Grail, but does not complete his quest. Instead, his son Galahad has a Mass with the Grail.</li>
        <li>Lancelot goes insane in White and marries Elaine who becomes a nun</li>
        <li>Lancelot, despite having no armour, defeats many foes during his period of insanity</li>
        <li>Elaine kills herself in White</li>
        <li>Lancelot is hired by Arthur after beating everyone in a tournament</li>
        <li>Infatuated with Arthur, jealous of Guenever because she’s Arthur’s wife</li>
      </ul>
      <h2>Guenever</h2>
      <ul>
        <li>Pities Lancelot's ugliness in T. H. White's story</li>
      </ul>
      <h2>Mordred</h2>
      <ul>
        <li>Plots against Lancelot in T. H. White's story</li>
        <li>Exposes Lancelot and Guenever’s affair to Arthur in T. H. White's story</li>
        <li>Almost killed by Arthur in T. H. White's story when Arthur orders all babies of a certain age to be sent out to sea </li>
        <li>Holds anti-Semitic views in White’s story, possibly acting as a stand-in for Nazis.</li>
      </ul>
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

.team p {
  line-height: 1.6;
}
</style>
