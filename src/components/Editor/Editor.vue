<script setup>
import { store } from "../../store.js";
import EditorBody from "./EditorBody.vue";
import EditorFooter from "./EditorFooter.vue";
import EditorHeader from "./EditorHeader.vue";
import LoadingIndicator from "./LoadingIndicator.vue";
</script>
<template>

  <div class="bg-gray-100 border-b">
    <div v-if="!store.fontsLoaded" class="container">
      <LoadingIndicator />
    </div>

    <div v-if="store.fontsLoaded">
      <EditorHeader />
      <EditorBody />
      <hr class="my-8 container border-gray-300">
      <EditorFooter />
    </div>
  </div>

</template>
