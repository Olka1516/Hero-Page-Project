<template>
  <div
    class="games-container parallax"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="hero-content">
      <img class="hero-img" src="@/assets/images/games_hero1.png" alt="" />
      <div class="hero-texts">
        <h2>Hero</h2>
        <p class="hero-quotes">
          No knight he, though a master of the sword
          <br /><br />
          No wizard he, though adept in secret magic
          <br /><br />
          He did not care to save the world, yet for many he was a deliverer
          <br /><br />
          He was no murderer though he killed for a living
          <br /><br />
          The legend of him that arose is not over
        </p>
        <p class="hero-text">
          The player assumes the role of Geralt of Rivia, a witcher – a
          professional monster slayer. Abandoned as a child, he was subjected to
          rigorous training and mutation he is an ultimate killing machine with
          supernatural abilities. As a witcher he is a sword master with little
          contestation. While not a wizard or sorcerer, Geralt uses magical
          Signs in a supportive role to the rest of his arsenal. His organism Is
          capable to process highly toxic potions that further enhance his
          combat skills. Members of the Witcher caste are bred to protect human
          life by slaying monsters, yet they are often perceived as such beasts
          themselves.
        </p>
      </div>
    </div>
    <GamesClouds top="-160"></GamesClouds>
  </div>
</template>

<script setup lang="ts">
import GamesClouds from "./GamesClouds.vue";
import backgroundImage from "@/assets/images/games_bg1.jpeg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-hero-witcher1;
</style>
