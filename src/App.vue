<script setup>
import GoogleFontLink from "./components/GoogleFontLink.vue";
import GoogleFontSelector from "./components/GoogleFontSelector.vue";
import NumGrid from "./components/NumGrid.vue";
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <div class="my-4">
      <strong>Font:</strong>&nbsp;
      <GoogleFontSelector />
    </div>
    <div>
      <GoogleFontLink />
    </div>

    <hr class="my-6" />

    <h1 class="font-bold my-4">Glyphs</h1>
    <NumGrid />
    <hr class="my-6" />

    <h1 class="font-bold">In game preview</h1>
    TODO
  </div>
</template>

<style scoped></style>
