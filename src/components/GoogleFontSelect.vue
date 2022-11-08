<script setup>
import { store } from "./../store.js";

defineProps({
  name: String,
});
</script>

<template>
  <select v-model="store.glyphs.fontFamily" class="app-input">
    <option v-for="name in store.fontNames">{{ name }}</option>
  </select>
</template>
