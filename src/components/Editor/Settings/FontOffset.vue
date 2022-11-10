<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div class="flex items-center">
    <strong>Offset</strong> <span class="text-gray-500">(x,y)</span>
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
</template>
