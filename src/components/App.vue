<script setup>
import { store } from "../store.js";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Editor from "./Editor/Editor.vue";
import GoogleFontPreload from "./GoogleFontPreload.vue";
</script>

<template>
  <GoogleFontPreload />

  <div class="max-w-7xl mx-auto mt-4 space-y-4">
    <AppHeader />

    <div v-if="!store.fontsLoaded" class="my-20 text-center">
      loading fonts..
    </div>

    <Editor v-if="store.fontsLoaded" />

    <AppFooter />
  </div>
</template>
