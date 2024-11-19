<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${props.image})`,
    }"
  >
    <div class="games-content">
      <h2>{{ title }}</h2>
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
import { IStory } from "@/types";

const props = defineProps<{ image: string; title: string; story: IStory[] }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-story;
</style>
