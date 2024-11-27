<template>
  <div
    class="games-container parallax"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <AppHeader></AppHeader>
    <GamesMain></GamesMain>
    <GamesStory></GamesStory>
    <GamesHero></GamesHero>
    <GamesHeroes
      :heroes="heroes2"
      :background="backgroundHeroes"
      :xCount="380"
    ></GamesHeroes>
    <div
      class="games-stream"
      :style="{
        '--background': `url(${backgroundImage})`,
      }"
    >
      <div class="games-stream-content">
        <GamesNews :news="news"></GamesNews>
        <hr />
        <GamesTimeline></GamesTimeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_witcher2.jpg";
import backgroundHeroes from "@/assets/images/games_bg_2.jpg";
import AppHeader from "@/components/layout/AppHeader.vue";
import GamesMain from "@/components/games/GamesMain2.vue";
import GamesStory from "@/components/games/GamesStory2.vue";
import GamesHero from "@/components/games/GamesHero2.vue";
import GamesHeroes from "@/components/games/GamesHeroes.vue";
import GamesTimeline from "@/components/games/GamesTimeline2.vue";
import GamesNews from "@/components/games/GamesNews.vue";
import { heroes2 } from "@/constants";
import { news } from "@/constants";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games;
</style>
