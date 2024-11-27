<template>
  <div
    class="games-container parallax"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <AppHeader></AppHeader>
    <div style="height: calc(100vh - 80px)"></div>
    <GamesStory></GamesStory>
    <GamesHero></GamesHero>
    <GamesHeroes :heroes="heroes1" :background="backgroundHeroes" :isWitcher1="true"></GamesHeroes>
    <GamesFeatures></GamesFeatures>
  </div>
</template>

<script setup lang="ts">
import backgroundHeroes from "@/assets/images/games_bg_2.jpg";
import backgroundImage from "@/assets/images/games_bg_witcher1.jpeg";
import GamesHero from "@/components/games/GamesHero1.vue";
import GamesHeroes from "@/components/games/GamesHeroes.vue";
import GamesStory from "@/components/games/GamesStory1.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import GamesFeatures from "@/components/games/GamesFeatures.vue";
import { heroes1 } from "@/constants";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games;
</style>
