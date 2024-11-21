<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <h1>Story</h1>
    <img src="@/assets/images/games_book_blank1.jpg" alt="" />
    <div class="story-texts">
      <p>
        Being based on a novel series by Andrzej Sapkowski – a bestselling
        Polish author – gives the game’s universe and characters credibility,
        authority and exceptional cohesiveness. In this harsh fantasy world
        abstract, absolute and unconditional ideas such as “Good” and “Evil”
        written in upper case letters do not exist. Instead, however, while
        moral good exists , the protagonist will often only have a choice
        between two evils, deciding on the path which he regards as the lesser
        evil of the two.
        <br /><br />
        The story begins with Geralt reappearing after being feared dead. He is
        found unconscious, dazed and with only a vague recollection of past
        events. This way, players unfamiliar with Sapkowski’s works will be able
        to gradually immerse into the fantasy realm.
      </p>

      <p>
        The game features an innovative, time delayed decision-consequence
        system, prodding players to make their decisions seriously and with
        thought.
        <br />
        <br />The whole world does not revolve just around Geralt. NPCs will
        lead their lives independently of the protagonist, yet upon interaction
        they can be influenced by and react to the Witcher’s actions. It’s
        basically a living world, of which Geralt is only a part of, despite his
        involvement in its ultimate fate.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_2.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-story-witcher1;
</style>
