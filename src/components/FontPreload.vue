<script setup>
import { store } from "../store.js";

const fontNameToSlug = name => name.replaceAll(" ", "+");

</script>

<template>
  <div v-for="name in store.fontNames">
    <link
        :href="`https://fonts.googleapis.com/css2?family=${fontNameToSlug(name)}&display=block`"
        rel="stylesheet"
    />
    <div class="goAway" :style="{fontFamily: name }">hello</div>
  </div>
</template>

<style>
.goAway {
  position: absolute;
  top: -999px;
}
</style>
