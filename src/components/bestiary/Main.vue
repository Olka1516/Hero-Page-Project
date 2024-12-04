<template>
  <div class="bestiary-container">
    <div class="bestiary-select">
      <div class="bestiary-select-inner">
        <div
          class="bestiary-selection"
          v-for="bestie in besties"
          :key="bestie.title"
        >
          <div
            class="bestiary-accordion"
            @click="toggleAccordion(bestie.title)"
          >
            <h2>{{ bestie.title }}</h2>
            <div>
              <img
                :class="{ active: activeAccordion.includes(bestie.title) }"
                src="../../assets/images/icons/chevron.svg"
                alt=""
              />
            </div>
          </div>
          <div
            class="bestiary-bestie-container"
            :class="{ active: activeAccordion.includes(bestie.title) }"
          >
            <div class="bestiary-bestie-inner">
              <button
                class="bestiary-bestie-btn"
                v-for="data in bestie.besties"
                :key="data.title"
                @click="selected = data"
              >
                {{ data.title }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bestiary-asset">
      <transition name="fade">
        <div v-bind:key="selected.image" class="bestiary-asset-content">
          <img :src="selected.image" alt="" />
          <div class="bestiary-asset-inner">
            <span v-for="data in selected.defeat" :key="data">{{ data }}</span>
          </div>
        </div>
      </transition>
    </div>
    <div class="bestiary-info">
      <div class="bestiary-description">
        <div class="bestiary-description-inner">
          <h2>{{ selected.title }}</h2>
          <hr />
          <p>{{ selected.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { besties } from "@/constants/bestiesWitcher3";
import { ref } from "vue";

const activeAccordion = ref<string[]>([]);
const selected = ref(besties[0].besties[0]);

const toggleAccordion = (title: string) => {
  if (activeAccordion.value.includes(title)) {
    activeAccordion.value = activeAccordion.value.filter(
      (item) => item !== title
    );
  } else {
    activeAccordion.value.push(title);
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.bestiary-main;
</style>
