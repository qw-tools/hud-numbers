<script setup>
import CenterHelperToggle from "./Settings/CenterCrosshair.vue";
import PreviewBackground from "./Settings/PreviewBackground.vue";
</script>
<template>
  <div>
    <div class="flex items-center my-8 space-x-12">
      <span class="text-xs">* Not included in download.</span>
      <CenterHelperToggle />
      <PreviewBackground />
    </div>

    <div class="p-4 bg-sky-100 text-sky-800 rounded-md">
      <strong>ⓘ click a glyph to download</strong>, and save into
      <span class="bg-gray-200 text-black text-sm p-1">/qw/textures/wad/</span>
    </div>
  </div>
</template>
