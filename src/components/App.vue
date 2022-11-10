<script setup>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Editor from "./Editor/Editor.vue";
import GoogleFontPreloader from "./GoogleFontPreloader.vue";
</script>

<template>
  <GoogleFontPreloader />
  <AppHeader />
  <Editor />
  <AppFooter />
</template>
