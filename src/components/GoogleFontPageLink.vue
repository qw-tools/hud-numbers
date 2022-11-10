<script setup>
import { store } from "../store.js";
import { fontNameToSlug } from "./util.js";

</script>

<template>
  <a
    :href="`https://fonts.google.com/specimen/${fontNameToSlug(store.glyphs.fontFamily)}`"
    class="text-sky-700"
  >
    <strong>{{ store.glyphs.fontFamily }}</strong> on Google Fonts &#8599;
  </a>
</template>
