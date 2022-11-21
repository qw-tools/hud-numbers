<script setup lang="ts">
import { store } from "../../store";
</script>
<template>
  <div class="flex items-center space-x-2">
    <strong class="grow">Stroke</strong>
    <input type="color" v-model.lazy="store.glyphs.strokeColor" />
    <input
      v-model="store.glyphs.strokeSize"
      type="number"
      class="w-12"
      min="0"
      max="24"
    />
    <span class="text-gray-400">px</span>
  </div>
</template>
