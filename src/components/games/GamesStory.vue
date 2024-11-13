<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="games-content">
      <h2>Story</h2>
      <div class="games-story">
        <div v-for="data in story" class="game-story">
          <img :src="data.image[0]" alt="" />
          <h3>{{ data.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg.jpg";
import { story } from "@/constants";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-story;
</style>
