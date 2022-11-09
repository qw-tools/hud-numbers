<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div class="flex items-center" :style="`height: ${store.glyphs.size}px`">
    <div class="space-y-2">
      <label class="block text-center">
        <input type="color" v-model.lazy="store.anumColorTop" /><br />
        <code class="block text-xs">{{ store.anumColorTop }}</code>
      </label>
      <label class="block text-center">
        <input type="color" v-model.lazy="store.anumColorBottom" />
        <code class="block text-xs">{{ store.anumColorBottom }}</code>
      </label>
    </div>
  </div>
</template>
