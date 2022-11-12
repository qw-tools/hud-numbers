<script setup>
import { store } from "../../store.js";
import EditorBody from "./EditorBody.vue";
import EditorFooter from "./EditorFooter.vue";
import EditorHeader from "./EditorHeader.vue";
import LoadingIndicator from "./LoadingIndicator.vue";
</script>
<template>
  <div class="bg-gray-100 border-b border-gray-300">
    <div v-if="!store.fontsLoaded" class="container">
      <LoadingIndicator />
    </div>

    <div v-if="store.fontsLoaded" class="fadeIn">
      <EditorHeader />
      <EditorBody />
      <EditorFooter />
    </div>
  </div>
</template>
