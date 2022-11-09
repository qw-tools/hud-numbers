<script setup>
import { fontNames, store } from "../../../store.js";
</script>

<template>
  <div class="flex items-center space-x-2">
    <strong>Font</strong>
    <select v-model="store.glyphs.fontFamily">
      <option v-for="name in fontNames">{{ name }}</option>
    </select>
  </div>
</template>
