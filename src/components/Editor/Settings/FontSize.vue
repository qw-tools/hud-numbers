<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div class="flex items-center">
    <input
      v-model.lazy="store.glyphs.fontSize"
      type="range"
      min="48"
      step="8"
      max="200"
      class="w-24 mr-2"
    />
    <span>{{ store.glyphs.fontSize }}px</span>
  </div>
</template>
