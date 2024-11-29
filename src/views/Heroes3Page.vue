<template>
  <div
    class="heroes-background"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <AppHeader></AppHeader>
    <div id="scrollContent">
      <div></div>
    </div>
    <div class="heroes-content">
      <div class="main-hero" v-for="(hero, index) in data">
        <HeroPage
          :hero="hero"
          :count="index"
          class="heroes-item"
          :class="{ 'animate-out': isOut(index), [getActive(index)]: true }"
        ></HeroPage>
      </div>
    </div>
    <div class="heroes-navs">
      <span
        v-for="k in data.length"
        @click="mainIndex = k - 1"
        :class="{ 'active-nav': isActive(k - 1) }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroPage from "@/components/HeroPage.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import backgroundImage from "@/assets/images/back.jpg";
import { heroes } from "@/constants/heroes";
import { onMounted, onUnmounted, Ref, ref } from "vue";
import debounce from "lodash/debounce";

const data = ref(heroes);
const mainIndex = ref(0);
const element: Ref<HTMLElement | null> = ref(null);

let handleDebouncedScroll: () => void;

const isOut = (index: number) => {
  return mainIndex.value > index;
};

const getActive = (index: number) => {
  if (mainIndex.value === index) {
    return "active";
  } else if (mainIndex.value < index) {
    return "not-active";
  }
  return "";
};

const isActive = (index: number) => {
  return index === mainIndex.value;
};

const handleScroll = () => {
  if (
    element.value &&
    (element.value?.scrollTop === 0 || element.value?.scrollTop >= 349)
  ) {
    element.value.scrollTo(175, 175);
  } else {
    mainIndex.value = (mainIndex.value + 1) % data.value.length;
  }
};

onMounted(() => {
  handleDebouncedScroll = debounce(handleScroll, 400);
  element.value = document.getElementById("scrollContent");
  if (element.value)
    element.value.addEventListener("scroll", handleDebouncedScroll);
});

onUnmounted(() => {
  if (element.value)
    element.value.removeEventListener("scroll", handleDebouncedScroll);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.heroes;
</style>
