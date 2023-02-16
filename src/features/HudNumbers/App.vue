<script setup lang="ts">
import SiteHeader from "@/Site/SiteHeader.vue";
import SiteFooter from "@/Site/SiteFooter.vue";
import HudNumbers from "../HudNumbers/HudNumbers.vue";
</script>

<template>
  <SiteHeader current-app="hud-numbers" />
  <HudNumbers />
  <SiteFooter />
</template>
