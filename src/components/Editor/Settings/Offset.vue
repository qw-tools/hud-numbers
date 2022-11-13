<script setup>
import { store } from "../../../store.js";
import CenterCrosshair from "./CenterCrosshair.vue";
</script>
<template>
  <div class="flex items-center">
    <div class="grow">
      <div class="mb-1">
        <strong>Offset</strong>
        {{ " " }}
        <span class="text-gray-500">(x,y)</span>
      </div>
      <CenterCrosshair />
    </div>

    <div class="space-y-2">
      <div class="flex items-center">
        <input
          v-model.lazy="store.glyphs.offsetX"
          class="w-14"
          max="32"
          min="-32"
          type="number"
        />
        <input
          v-model.lazy="store.glyphs.offsetY"
          class="w-14"
          max="32"
          min="-32"
          type="number"
        />
        <span class="text-gray-400"> px </span>
      </div>
    </div>
  </div>

  <div></div>
</template>
