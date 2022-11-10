<script setup>
import CenterHelperToggle from "./Settings/CenterCrosshair.vue";
import PreviewBackground from "./Settings/PreviewBackground.vue";
</script>
<template>
  <div class="container my-4">
    <div class="flex items-center my-8 space-x-12">
      <span class="text-xs">* Not included in download.</span>
      <CenterHelperToggle />
      <PreviewBackground />
    </div>

    <div class="p-4 border border-sky-200 text-sky-800 rounded-md">
      <strong>ⓘ Click a glyph to download</strong>, and save into
      <code class="bg-gray-200 text-black text-sm p-1">/qw/textures/wad/</code>
    </div>
  </div>
</template>
