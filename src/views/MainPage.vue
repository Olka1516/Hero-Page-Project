<template>
  <div
    class="main-background"
    :style="{
      '--background': `url(${backgroundImage})`,
    }"
  >
    <AppHeader></AppHeader>
    <div class="main-content">
      <Welcome></Welcome>
      <News></News>
      <Games></Games>
      <Discover></Discover>
      <Form></Form>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import News from "@/components/main/News.vue";
import Welcome from "@/components/main/Welcome.vue";
import Games from "@/components/main/Games.vue";
import Discover from "@/components/main/Discover.vue";
import Form from "@/components/main/Form.vue";
import backgroundImage from "../assets/images/games_bg_2.jpg";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main;
</style>
