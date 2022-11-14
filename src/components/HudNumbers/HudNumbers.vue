<script setup lang="ts">
import { store } from "./store";
import { defaultFontNames } from "./config";
import GoogleFontPreloader from "./GoogleFonts/Preloader.vue";
import EditorBody from "./Editor/Editor.vue";
import LoadingIndicator from "../LoadingIndicator.vue";

const onFontsLoaded = (): void => {
  store.fontsLoaded = true;
};
</script>
<template>
  <GoogleFontPreloader
    :fontNames="defaultFontNames"
    :onLoaded="onFontsLoaded"
  />
  <div class="bg-gray-100 border-b border-gray-300">
    <div class="bg-white shadow py-4">
      <div class="container">
        <div class="font-bold text-xl">HUD Numbers Generator</div>
      </div>
    </div>

    <div v-if="!store.fontsLoaded" class="container">
      <LoadingIndicator class="h-96" />
    </div>

    <div v-if="store.fontsLoaded" class="fadeIn">
      <EditorBody />
    </div>
  </div>
</template>
