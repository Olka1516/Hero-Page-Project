<template>
  <div
    class="games-container parallax"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="romb-text">
      <div class="text-cube left"></div>
      <p class="text-content">Features</p>
      <div class="text-cube right"></div>
    </div>
    <img
      class="features-img"
      src="@/assets/images/games_features1.jpg"
      alt=""
    />
    <div class="features-texts">
      <h3>Unique combat system</h3>
      <p>
        The witcher features a completely unique combat system, which blends
        tactical choice known from RPG games and fast paced action from action
        adventure games. Combat effectiveness depends on the player’s ability to
        appropriately combine melee, magic signs and potion skills. The
        combination of two types of blades with 3 different fighting styles
        gives a vast variation of the witcher’s technique in combat.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/games_bg_4.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-features-witcher1;
</style>
