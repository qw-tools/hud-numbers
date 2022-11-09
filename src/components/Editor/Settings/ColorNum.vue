<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div class="flex items-center" :style="`height: ${store.glyphs.size}px`">
    <div class="space-y-2">
      <label class="block text-center">
        <input type="color" v-model.lazy="store.numColorTop" /><br />
        <code class="block text-xs">{{ store.numColorTop }}</code>
      </label>
      <label class="block text-center">
        <input type="color" v-model.lazy="store.numColorBottom" />
        <code class="block text-xs">{{ store.numColorBottom }}</code>
      </label>
    </div>
  </div>
</template>
