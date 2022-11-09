<script setup>
import { store, fontNames } from "./../store.js";

defineProps({
  name: String,
});
</script>

<template>
  <select v-model="store.glyphs.fontFamily" class="app-input">
    <option v-for="name in fontNames">{{ name }}</option>
  </select>
</template>
