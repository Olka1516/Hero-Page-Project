<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <h2>World</h2>
    <h3>A true hero forges his own history</h3>
    <div class="story-content">
      <img
        class="story-img"
        src="../../assets/images/games_community_3.jpg"
        alt=""
      />
      <div class="story-detailed">
        <div class="story-detailed-inner">
          <p>
            The player is Geralt of Rivia, a professional monster slayer, a
            witcher. Entangled in the political turmoil that engulfed Temeria,
            Geralt helped quell the rebellion of the Order of the Flaming Rose.
            Soon after, he saved King Foltest’s life when the monarch was
            attacked by a witcher-like assassin. He continues to protect the
            king, serving as his bodyguard as Foltest strives to bring peace to
            his kingdom. The Order’s last bastions have yielded to the royal
            army, yet one more task remains - the Baroness La Valette announced
            her secession from the realm, and her fortress must be taken. A
            month after the attempted assassination, Foltest’s armies stand at
            the gates of La Valette Castle, preparing for a final assault. Still
            at Foltest’s side, Geralt is among them, unable to begin his
            personal quest to discover the mysterious assassin’s origin and
            identity
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_map2.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-story-witcher2;
</style>
