<script setup>
import { fontNameToSlug } from "./util.js";

defineProps({
  fontFamily: String,
});
</script>

<template>
  <a
    :href="`https://fonts.google.com/specimen/${fontNameToSlug(fontFamily)}`"
    class="text-sky-700"
  >
    <strong>{{ fontFamily }}</strong> on Google Fonts &#8599;
  </a>
</template>
