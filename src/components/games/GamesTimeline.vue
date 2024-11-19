<template>
  <div
    class="games-block"
    :style="{
      '--background': `url(${props.image})`,
    }"
  >
    <div class="games-content">
      <h2>Backstory</h2>
      <div class="games-timeline">
        <div v-for="data in witcherTimeline">
          <h2>{{ data.title }}</h2>
          <h3>{{ data.year }}</h3>
          <div class="games-times">
            <div v-for="time in data.stories" class="games-time">
              <h3>{{ time.month }}</h3>
              <div class="games-box-container">
                <div class="games-box"></div>
                <hr />
              </div>
              <div class="games-texts">
                <h3>{{ time.title }}</h3>
                <p>{{ time.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { witcherTimeline } from "@/constants/gamesTimeline";

const props = defineProps<{ image: string }>();
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-timeline;
</style>
