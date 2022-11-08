<script setup>
import { store } from "../store.js";

defineProps({
  char: String,
  color: String,
});
</script>

<template>
  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
    <text :font-family="store.glyphs.fontFamily" :font-size="store.glyphs.size" :fill="color" text-anchor="middle" dominant-baseline="central" x="50%" y="50%">
      {{ char }}
    </text>
  </svg>
</template>
