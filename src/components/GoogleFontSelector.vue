<script setup>
import { store } from "./../store.js";

defineProps({
  name: String,
});

const fontNameToUrl = (name) => `https://fonts.google.com/specimen/${name}`;

const fonts = [
  "Alfa Slab One",
  "Bungie Spice",
  "Lato",
  "Righteous",
  "Roboto",
  "Ultra",
  "Zen Dots",
].map((name) => ({
  name,
  url: fontNameToUrl(name),
}));
</script>

<template>
  <select v-model="store.fontName">
    <option v-for="font in fonts" :value="font.name">{{ font.name }}</option>
  </select>
</template>
