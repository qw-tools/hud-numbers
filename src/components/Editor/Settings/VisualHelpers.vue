<script setup>
import CenterCrosshair from "./CenterCrosshair.vue";
import PreviewBackground from "./PreviewBackground.vue";
</script>
<template>
  <div>
    <div class="flex items-center space-x-12 mx-4">
      <CenterCrosshair />
      <PreviewBackground />
    </div>
    <div>
      <div
        class="border-x border-b h-2 border-gray-400 border-dashed mt-2"
      ></div>
      <div class="text-xs text-center text-gray-600 mt-2">
        Not included in download
      </div>
    </div>
  </div>
</template>
