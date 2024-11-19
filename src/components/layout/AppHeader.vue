<template>
  <header>
    <div class="header-navs">
      <div class="header-nav" v-for="(nav, index) in navs">
        <template v-if="nav === 'games'">
          <Selector title="Games" @changeOption="">
            <RouterLink
              v-for="(option, index) in options"
              :to="`/games/witcher-${index + 1}`"
              >{{ option }}</RouterLink
            >
          </Selector>
          <hr />
        </template>
        <template v-else>
          <RouterLink class="nav" :to="`/${nav}`">{{ nav }}</RouterLink>
          <hr v-if="index !== navs.length - 1" />
        </template>
      </div>
    </div>
    <img
      @click="toMain()"
      class="header-logo"
      src="../../assets/images/logo.png"
      alt=""
    />
  </header>
</template>

<script setup lang="ts">
import Selector from "../BaseSelector.vue";
import router from "@/router";
import { ref } from "vue";

const navs = ref(["games", "forum", "jobs", "support", "contact & legal"]);
const options = ref([
  "The Witcher 1: Enhanced Edition",
  "The Witcher 2: Assassins of Kings",
  "The Witcher 3: Wild Hunt",
]);
const toMain = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.header;
</style>
