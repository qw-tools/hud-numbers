<script setup>
import { store } from "./../store.js";

defineProps({
  name: String,
});

const fontNameToSlug = name => name.replaceAll(" ", "+");
</script>

<template>
  <link
      :href="`https://fonts.googleapis.com/css2?family=${fontNameToSlug(store.glyphs.fontFamily)}&display=swap`"
      rel="stylesheet"
  />
  <select v-model="store.glyphs.fontFamily" class="p-2 rounded">
    <option v-for="name in store.fontNames">{{ name }}</option>
  </select>
</template>
