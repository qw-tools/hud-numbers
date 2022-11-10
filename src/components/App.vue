<script setup>
import { store } from "../store.js";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Editor from "./Editor/Editor.vue";
import LoadingIndicator from "./LoadingIndicator.vue";
import GoogleFontPreload from "./GoogleFontPreload.vue";</script>

<template>
  <GoogleFontPreload />

  <div class="max-w-7xl mx-auto space-y-4">
    <AppHeader />

    <LoadingIndicator v-if="!store.fontsLoaded"></LoadingIndicator>
    <Editor v-if="store.fontsLoaded" />

    <AppFooter />
  </div>
</template>
