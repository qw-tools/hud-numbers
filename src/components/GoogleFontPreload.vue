<script setup>
import { fontLoadTimeout, fontNames, store } from "../store.js";
import { sleep } from "./util.js";
import { onMounted } from "vue";

const fontNameToSlug = (name) => name.replaceAll(" ", "+");

onMounted(() => {
  sleep(fontLoadTimeout).then(() => {
    store.fontsLoaded = true;
  });
});
</script>

<template>
  <div v-for="name in fontNames">
    <link
      :href="`https://fonts.googleapis.com/css2?family=${fontNameToSlug(
        name
      )}&display=block`"
      rel="stylesheet"
    />
    <div class="hideElement" :style="{ fontFamily: name }">hello</div>
  </div>
</template>

<style>
.hideElement {
  position: absolute;
  top: -999px;
}
</style>
