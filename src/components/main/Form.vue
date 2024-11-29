<template>
  <div class="form-container">
    <h1>Always First!</h1>
    <h2>Sign up to the Witcher newsletter.</h2>
    <input type="text" placeholder="Enter your email address" />
    <div class="info-content">
      <span
        @click="isClicked = !isClicked"
        :class="{ active: isClicked }"
      ></span>
      <p class="info">
        I would like to receive news, special offers and other information from
        CD PROJEKT and I am 16 years old or older.
        <br /><br />
        CD PROJEKT will be responsible for your personal data. For more
        information please check our CD PROJEKT Privacy Policy
      </p>
    </div>
    <div class="romb-text">
      <div class="text-cube left"></div>
      <p class="text-content">Submit</p>
      <div class="text-cube right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isClicked = ref(false);
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.main-form;
</style>
