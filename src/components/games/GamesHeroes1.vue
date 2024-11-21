<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div
      class="games-heroes"
      v-for="(hero, index) in heroes1"
      :style="getHeroStyle(heroesIndex[index])"
    >
      <img :src="hero.image" alt="" @click="changeIndex(heroesIndex[index])" />
      <div class="romb-text">
        <div class="text-cube left"></div>
        <p class="text-content">{{ hero.title }}</p>
        <div class="text-cube right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_2.jpg";
import { heroes1 } from "@/constants";
import { ref } from "vue";

const heroesIndex = ref([0, 1, 2]);

const getHeroStyle = (index: number) => {
  const scale = 1 - Math.abs(index) * 0.1;
  const translateX = index * 380;
  const zIndex = 100 - Math.abs(index);
  const opacity = 1 - Math.abs(index) * 0.1;

  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    zIndex: zIndex,
    opacity: opacity > 0 ? opacity : 0,
  };
};

const changeIndex = (index: number) => {
  if (index < 0)
    heroesIndex.value = heroesIndex.value.map((value) => value + 1);
  else if (index > 0)
    heroesIndex.value = heroesIndex.value.map((value) => value - 1);
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-heroes-witcher1;
</style>
