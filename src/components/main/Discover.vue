<template>
  <div class="discover-container">
    <div
      class="discover-content"
      :style="{
        '--background': `url(${backgroundImage})`,
      }"
    >
      <div class="discover-inner">
        <img class="discover-logo" src="../../assets/images/logo.png" alt="" />
        <img class="discover-img" src="../../assets/images/gerald_ciri.png" alt="" />
        <div class="discover-texts">
          <h3>Discover the world of Mods</h3>
          <p class="discover-p">
            Explore a slew of custom content created by the talented community
            surrounding The Witcher 3: Wild Hunt — from unique locations, new
            quests and storylines to characters, animations and items, and so
            much more — or build it yourself! With REDkit, you have the power to
            bring your own vision of The Witcher world to life!
          </p>
          <div class="romb-text">
            <div class="text-cube left"></div>
            <p class="text-content">Learn more</p>
            <div class="text-cube right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/dragons.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main-discover;
</style>
