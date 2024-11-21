<template>
  <div class="games-clouds-container">
    <img
      :style="{
        '--top': `${top}px`,
      }"
      class="games-clouds"
      src="@/assets/images/games_clouds.webp"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ top?: string }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-clouds;
</style>
