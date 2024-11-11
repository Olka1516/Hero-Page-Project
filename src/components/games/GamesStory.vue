<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    lala
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-story;
</style>
