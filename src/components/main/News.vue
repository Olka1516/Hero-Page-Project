<template>
  <div class="news-container">
    <h1>News</h1>
    <div class="main-news">
      <div
        class="main-new"
        v-for="(data, index) in news.slice(0, 5)"
        :class="getClass(index)"
      >
        <div class="main-img-container">
          <img :src="data.image" alt="" />
        </div>
        <h3>{{ data.title }}</h3>
        <p>{{ data.date }}</p>
      </div>
    </div>
    <div class="romb-text">
      <div class="text-cube left"></div>
      <p class="text-content">Load more</p>
      <div class="text-cube right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { news } from "@/constants";

const getClass = (index: number) => {
  return index === 0 ? "large-block" : "small-block";
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main-news;
</style>
