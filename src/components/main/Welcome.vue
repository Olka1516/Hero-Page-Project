<template>
  <div class="main-welcome">
    <div class="main-texts">
      <h1>Welcome to the Witcher Universe</h1>
      <p class="main-description">
        Become a traveling monster slayer and embark on an adventure into The
        Witcher universe. From immersive RPGs to epic card battles and more,
        discover a realm of monsters and magic where your choices shape the
        world around you.
      </p>
    </div>
    <div class="main-quotes">
      <div class="main-quote" v-for="data in quotes">
        <img src="@/assets/images/main_leaf.png" alt="" />
        <div>
          <h2>"{{ data.title }}""</h2>
          <b>{{ data.description }}</b>
        </div>
        <img src="@/assets/images/main_leaf.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotes = [
  { title: "A MASTERPIECE", description: "EUROGAMER" },
  { title: "EVERY BATTLE FEELS LIKE A CUTSCENE", description: "IGN" },
  { title: "A STAGGERING ACHIEVEMENT", description: "GAMESPOT" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main-welcome;
</style>
