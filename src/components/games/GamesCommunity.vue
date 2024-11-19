<template>
  <div
    class="games-block"
    :style="{
      '--background': `url(${props.image})`,
    }"
  >
    <div class="games-content">
      <div class="games-texts">
        <h2>Community Corner</h2>
        <h3>
          Welcome to Community Corner — your number one stop listing any and all
          CD PROJEKT RED-organized community projects for The Witcher!
        </h3>
        <p>
          Below you’ll find a list of our events currently taking place, as well
          as ones which have been concluded (but might return in the future!).
          If you’d like to learn more about a particular one, simply click on
          the corresponding badge to load up a project’s dedicated page with all
          the details.
        </p>
      </div>
      <div class="games-imgs">
        <div v-for="data in dataImgs" class="games-img">
          <img :src="data.url" alt="" />
          <h3>{{ data.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataImgs } from "@/constants/gamesCommunity";
const props = defineProps<{ image: string }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-community;
</style>
