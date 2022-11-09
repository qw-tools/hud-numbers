<script setup>
import { store } from "../../../store.js";
</script>

<template>
  <div>
    <strong>Offset</strong> <span class="text-gray-500">(x,y)</span>
    <input
      v-model.lazy="store.glyphs.offsetX"
      type="number"
      class="w-14"
      min="-32"
      max="32"
    />
    <input
      v-model.lazy="store.glyphs.offsetY"
      type="number"
      class="w-14"
      min="-32"
      max="32"
    />
    <span class="text-gray-400"> px </span>
  </div>
</template>
