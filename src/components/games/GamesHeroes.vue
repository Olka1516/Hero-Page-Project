<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${background})`,
    }"
  >
    <div
      class="games-heroes"
      :class="{ 'games-witcher1': isWitcher1 }"
      v-for="(hero, index) in heroes"
      :style="getHeroStyle(heroesIndex[index])"
    >
      <img
        :src="hero.image"
        alt=""
        @click="changeIndex(heroesIndex[index])"
        :class="{ 'witcher1-img': isWitcher1 }"
      />
      <div class="romb-text">
        <div class="text-cube left"></div>
        <p class="text-content">{{ hero.title }}</p>
        <div class="text-cube right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  heroes: {
    id: number;
    image: string;
    title: string;
  }[];
  background: string;
  isWitcher1?: boolean;
}>();

const heroesIndex = ref(
  Array.from({ length: props.heroes.length }, (_, i) => i)
);

const getHeroStyle = (index: number) => {
  const scale = 1 - Math.abs(index) * 0.18;
  const translateX = index * 380;
  const zIndex = 100 - Math.abs(index);
  const opacity = 1 - Math.abs(index) * 0.1;

  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    zIndex: zIndex,
    opacity: opacity,
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
@include index.games-heroes;
</style>
