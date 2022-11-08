<script setup>
import { store } from "./store.js";
import GoogleFontLink from "./components/GoogleFontLink.vue";
import GoogleFontSelector from "./components/GoogleFontSelector.vue";
import WadSet from "./components/WadSet.vue";
</script>

<template>
  <GoogleFontLink />

  <div class="max-w-5xl mx-auto">
    <div class="my-4">
      <div class="flex items-center space-x-8">
        <div class="font-bold">Font:</div>&nbsp;
        <div>
          <GoogleFontSelector />
        </div>
        <div class="flex space-x-4">
          <input v-model="store.glyphs.size" type="range" min="48" step="8" max="128"> <span>{{ store.glyphs.size }}px</span>
        </div>
      </div>
    </div>

    <hr class="my-6" />

    <div class="space-y-2">
      <WadSet :size="parseInt(store.glyphs.size)" :color="store.numColor" />
      <WadSet :size="parseInt(store.glyphs.size)" :color="store.anumColor" />
    </div>

  </div>
</template>
