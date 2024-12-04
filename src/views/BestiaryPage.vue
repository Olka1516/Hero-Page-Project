<template>
  <div
    class="bestiary"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <div class="bestiary-content">
      <AppHeader></AppHeader>
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import backgroundImage from "@/assets/images/back.jpg";
import AppHeader from "@/components/layout/AppHeader.vue";
import Main from "@/components/bestiary/Main.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.bestiary;
</style>
