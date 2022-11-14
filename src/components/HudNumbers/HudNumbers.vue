<script setup>
import { store } from "./store.js";
import GoogleFontPreloader from "../GoogleFonts/FontPreloader.vue";
import EditorBody from "./Editor/Editor.vue";
import LoadingIndicator from "../LoadingIndicator.vue";
</script>
<template>
  <GoogleFontPreloader />
  <div class="bg-gray-100 border-b border-gray-300">
    <div class="bg-white shadow py-4">
      <div class="container">
        <div class="font-bold text-xl">HUD Numbers Generator</div>
      </div>
    </div>

    <div v-if="!store.fontsLoaded" class="container">
      <LoadingIndicator />
    </div>

    <div v-if="store.fontsLoaded" class="fadeIn">
      <EditorBody />
    </div>
  </div>
</template>
