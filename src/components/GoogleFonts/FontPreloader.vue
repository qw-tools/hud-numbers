<script setup lang="ts">
import { store } from "../HudNumbers/store.js";
import { sleep } from "../util";
import { onMounted } from "vue";
import GoogleFontPreload from "./FontPreload.vue";
import { fontLoadTimeout } from "../HudNumbers/config.js";

onMounted(() => {
  sleep(fontLoadTimeout).then(() => {
    store.fontsLoaded = true;
  });
});
</script>

<template>
  <GoogleFontPreload v-for="name in store.fontNames" :fontFamily="name" />
</template>
