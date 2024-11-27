<template>
  <div class="news-content">
    <h1>News</h1>
    <div v-for="data in news" class="news-content-inner">
      <hr />
      <div class="news-info">
        <img :src="data.image" alt="" />
        <div>
          <h2>{{ data.title }}</h2>
          <h3>{{ data.date }}</h3>
        </div>
      </div>
      <p>{{ data.description }}</p>
    </div>

    <div class="romb-text">
      <div class="text-cube left"></div>
      <p class="text-content">See more</p>
      <div class="text-cube right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    title: string;
    description: string;
    date: string;
    image: string;
  }[];
}>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-news-witcher2;
</style>
