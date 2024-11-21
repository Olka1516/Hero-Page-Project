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
    <GamesHeroes></GamesHeroes>
    <GamesFeatures></GamesFeatures>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_witcher1.jpeg";
import GamesHero from "@/components/games/GamesHero1.vue";
import GamesHeroes from "@/components/games/GamesHeroes1.vue";
import GamesStory from "@/components/games/GamesStory1.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import GamesFeatures from "@/components/games/GamesFeatures.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games;
</style>
