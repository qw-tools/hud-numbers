<script setup>
import { store } from "../../store.js";
</script>
<template>
  <div class="flex items-center space-x-2">
    <strong class="grow">Shadow</strong>
    <input type="color" v-model.lazy="store.glyphs.shadowColor" />
    <input
      v-model="store.glyphs.shadowSize"
      type="number"
      class="w-12"
      min="0"
      max="24"
    />
    <span class="text-gray-400">px</span>
  </div>
</template>
