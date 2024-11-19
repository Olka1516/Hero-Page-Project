<template>
  <header>
    <div class="header-navs">
      <div class="header-nav" v-for="(nav, index) in navs">
        <RouterLink :to="`/${nav}`">{{ nav }}</RouterLink>
        <hr v-if="index !== navs.length - 1" />
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
import router from "@/router";
import { ref } from "vue";

const navs = ref(["games", "forum", "jobs", "support", "contact & legal"]);
const toMain = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.header;
</style>
