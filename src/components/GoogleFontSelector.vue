<script setup>
import { store } from "./../store.js";

defineProps({
  name: String,
});

const fontToSlug = name => name.replaceAll(" ", "+");
const fontNameToUrl = (name) => `https://fonts.google.com/specimen/${fontToSlug(name)}`;

const fonts = [
  "Alfa Slab One",
  "Bungee",
  "Bungee Inline",
  "Lato",
  "Righteous",
  "Roboto",
  "Ultra",
  "Zen Dots",
].map((name) => ({
  name,
  slug: fontToSlug(name),
  url: fontNameToUrl(name),
}));
</script>

<template>
  <select v-model="store.fontName" class="p-2 rounded">
    <option v-for="font in fonts" :value="font.slug">{{ font.name }}</option>
  </select>
</template>
