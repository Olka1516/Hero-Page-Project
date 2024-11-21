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
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_witcher2.jpg";
import AppHeader from "@/components/layout/AppHeader.vue";
import GamesMain from "@/components/games/GamesMain2.vue";
import GamesStory from "@/components/games/GamesStory2.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games;
</style>
