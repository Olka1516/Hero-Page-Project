<template>
    <div class="timeline-content">
      <h2>Time line</h2>
      <div class="games-timeline">
        <div class="games-timeline-content" v-for="data in witcherTimeline">
          <div>
            <h2>{{ data.title }}</h2>
            <h3>{{ data.year }}</h3>
          </div>
          <div class="games-times">
            <div v-for="time in data.stories" class="games-time">
              <h3>{{ time.month }}</h3>
              <div class="games-box-container">
                <div class="games-box"></div>
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
</template>

<script setup lang="ts">
import { witcherTimeline } from "@/constants/gamesTimeline";
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.games-timeline2;
</style>
