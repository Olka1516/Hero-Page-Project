<template>
  <div class="games-container">
    <h1>Our Games</h1>
    <div class="games-navs">
      <button
        v-for="nav in navs"
        @click="saga = nav.id"
        :class="{ active: saga === nav.id }"
      >
        {{ nav.title }}
      </button>
    </div>
    <div class="games-content">
      <div class="games-inner">
        <div class="games-element" v-for="game in getGames()">
          <img :src="game.image" alt="" />
          <h3>{{ game.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { allGames } from "@/constants/allGames";
import { ref } from "vue";

const saga = ref(0);
const navs = [
  { id: 0, title: "The Original Saga" },
  { id: 1, title: "Beyond The Saga" },
];

const getGames = () => {
  return saga.value ? allGames.slice(3, 6) : allGames.slice(0, 3);
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main-games;
</style>
