<script setup>
import GoogleFontLink from "./components/GoogleFontLink.vue";
import GoogleFontSelector from "./components/GoogleFontSelector.vue";
import NumGrid from "./components/NumGrid.vue";
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <div>
      Font:
      <GoogleFontSelector />
    </div>
    <div>
      <GoogleFontLink />
    </div>

    <hr class="my-6" />

    <h1>Glyphs</h1>
    <NumGrid />
    <hr class="my-6" />

    <h1>Preview</h1>
    TODO
  </div>
</template>

<style scoped></style>
