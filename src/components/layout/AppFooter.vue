<template>
  <footer>
    <div class="main-navs">
      <button v-for="nav in navs">{{ nav }}</button>
    </div>
    <div class="contacts-navs">
      <button v-for="contact in contacts">
        <img :src="contact" alt="" />
      </button>
    </div>
    <button>Cookie declaration</button>
    <p>
      CD PROJEKT®, The Witcher® are registered trademarks of CD PROJEKT Capital
      Group. The Witcher game © CD PROJEKT S.A. Developed by CD PROJEKT S.A. All
      rights reserved. The Witcher game is set in the universe created by
      Andrzej Sapkowski in his series of books. All other copyrights and
      trademarks are the property of their respective owners.
    </p>
    <h3>Terms of Use & Privacy Policy</h3>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import discord from "../../assets/images/icons/discord.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import twitch from "../../assets/images/icons/twitch.svg";
import twitter from "../../assets/images/icons/twitter.svg";

const navs = ref([
  "Support",
  "User agreement",
  "Careers",
  "Fan Content Guidelines",
  "Press center",
  "Store",
]);

const contacts = ref([discord, instagram, twitch, twitter]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/index";
@include index.footer;
</style>
