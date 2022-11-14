<script setup lang="ts">
import { store } from "../../store.js";
import CustomFontFamily from "./CustomFontFamily.vue";
</script>
<template>
  <div class="space-y-2">
    <strong>Font</strong>
    <div class="flex items-center space-x-4">
      <select v-model="store.glyphs.fontFamily" class="w-full">
        <option v-for="name in store.fontNames">{{ name }}</option>
      </select>
      <input
        v-model.lazy="store.glyphs.fontSize"
        type="range"
        min="48"
        step="2"
        max="200"
        class="w-24 mr-2"
      />
      <span>{{ store.glyphs.fontSize }}px</span>
    </div>

    <CustomFontFamily />
  </div>
</template>
