<template>
  <div class="hero-content" :class="{ reverse: props.count & 1 }">
    <img class="hero-image" :src="`${data.image}`" alt="" />
    <div class="hero-block">
      <div class="romb-text">
        <div class="text-cube left"></div>
        <h1 class="text-content">{{ data.name }}</h1>
        <div class="text-cube right"></div>
      </div>
      <h2 class="hero-quote"><span>"</span>{{ data.quote }}<span>"</span></h2>
      <div class="hero-info">
        <p class="hero-description">
          <span>{{ data.description.split(" ")[0] }}</span>
          &nbsp;
          {{ data.description.split(" ").slice(1).join(" ") }}
        </p>
        <div class="hero-details">
          <template v-for="k in data.details">
            <h4 class="hero-details-title">{{ k.title }}</h4>
            <b>{{ k.value }}</b>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  hero: {
    image: string;
    name: string;
    quote: string;
    details: { title: string; value: string }[];
    description: string;
  };
  count: number;
}>();

const data = ref(props.hero);
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.hero;
</style>
