<script setup>
import DownloadAllButton from "./DownloadAllButton.vue";
</script>
<template>
  <div class="container mt-6 mb-4">
    <div class="border bg-sky-100 border-sky-300 p-3 rounded-md mx-auto">
      <DownloadAllButton />
      or
      <strong>click a single glyph</strong>, and save into
      <code class="bg-gray-200 text-black text-sm p-1">/qw/textures/wad/</code>
    </div>
  </div>
</template>
