<template>
  <div class="selector">
    <h3 @click="isOpen = !isOpen">{{ props.title }}</h3>
    <div class="selector-options" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.base-selector;
</style>
