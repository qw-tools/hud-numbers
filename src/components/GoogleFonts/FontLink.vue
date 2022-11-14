<script setup lang="ts">
import { store } from "../HudNumbers/store";
import { fontNameToCssSlug } from "../util";
</script>

<template>
  <a
    :href="`https://fonts.google.com/specimen/${fontNameToCssSlug(
      store.glyphs.fontFamily
    )}`"
    class="text-sky-700"
  >
    <strong>{{ store.glyphs.fontFamily }}</strong> on Google Fonts &#8599;
  </a>
</template>
