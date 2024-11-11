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
      <StoryBlock></StoryBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_2.jpg";
import AppHeader from "@/components/layout/AppHeader.vue";
import MainBlock from "@/components/games/GamesMainBlock.vue";
import StoryBlock from "@/components/games/GamesStory.vue";
import { onMounted, onUnmounted, Ref, ref } from "vue";

const element: Ref<HTMLElement | null> = ref(null);
const handleScroll = () => {
  console.log("lala", document.body.scrollTop);
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
