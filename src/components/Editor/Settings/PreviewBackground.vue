<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div class="flex items-center space-x-2">
    <label class="flex items-center space-x-2">
      <input type="color" v-model.lazy="store.previewBgColor" />
      <div class="leading-5">
        <div class="font-bold">Preview background*</div>
        <code class="text-xs">{{ store.previewBgColor }}</code>
      </div>
    </label>
  </div>
</template>
