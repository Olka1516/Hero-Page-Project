<template>
  <div
    class="games-container"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="games-content">
      <img
        id="gamesCircle"
        class="games-circle"
        src="@/assets/images/games_circle.png"
        alt=""
      />
      <AppHeader></AppHeader>
      <MainBlock></MainBlock>
      <template v-for="story in stories">
        <GamesClouds />
        <StoryBlock
          :story="story.story"
          :title="story.title"
          :image="story.image"
        ></StoryBlock>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_2.jpg";
import storyImage from "@/assets/images/games_bg.webp";
import storyImage_3 from "@/assets/images/games_bg_4.jpg";
import storyImage_4 from "@/assets/images/games_bg_5.webp";
import AppHeader from "@/components/layout/AppHeader.vue";
import MainBlock from "@/components/games/GamesMainBlock.vue";
import StoryBlock from "@/components/games/GamesStory.vue";
import GamesClouds from "@/components/games/GamesClouds.vue";
import { story, openWorld, monsterHunter } from "@/constants";
import { onMounted, onUnmounted, Ref, ref } from "vue";

const element: Ref<HTMLElement | null> = ref(null);
const stories = [
  { story, title: "Story", image: storyImage },
  { story: openWorld, title: "Open World", image: storyImage_3 },
  {
    story: monsterHunter,
    title: "Professional Monster Hunter",
    image: storyImage_4,
  },
];

const handleScroll = () => {
  if (element.value)
    element.value.style.transform = `rotate(${document.body.scrollTop / 8}deg)`;
};

onMounted(() => {
  element.value = document.getElementById("gamesCircle");
  document.body.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.body.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-page;
</style>
