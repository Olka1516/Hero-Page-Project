<template>
  <div
    class="games-container parallax"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="hero-content">
      <div class="hero-texts">
        <h2>Hero</h2>
        <p class="hero-text">
          You are a witcher, a mutant. The sooner you accept this, the better.
          People will seek you out for your skills, but you must know to
          disappear when your presence is no longer desired. You are unique,
          different. This puts you in the same precarious position as non-humans
          who find themselves impaled...
        </p>
      </div>
      <img class="hero-img" src="@/assets/images/games_geralt2.webp" alt="" />
    </div>
    <GamesClouds top="-160"></GamesClouds>
  </div>
</template>

<script setup lang="ts">
import GamesClouds from "./GamesClouds.vue";
import backgroundImage from "@/assets/images/back.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-hero-witcher2;
</style>
