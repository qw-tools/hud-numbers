<script setup>
import { store } from "./store.js";
import GoogleFontSelect from "./components/GoogleFontSelect.vue";
import GoogleFontPageLink from "./components/GoogleFontPageLink.vue";
import WadSet from "./components/WadSet.vue";
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <div class="my-4">
      <div class="flex items-center">
        <div class="font-bold">Font</div>&nbsp;
        <div>
          <GoogleFontSelect />
        </div>
        <div class="flex space-x-2">
          <input v-model="store.glyphs.size" type="range" min="48" step="8" max="192"> <span>{{ store.glyphs.size }}px</span>
        </div>
        <div class="ml-auto">
          <GoogleFontPageLink :fontFamily="store.glyphs.fontFamily" />
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
