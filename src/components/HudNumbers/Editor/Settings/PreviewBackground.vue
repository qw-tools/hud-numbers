<script setup>
import { store } from "../../../../store.js";
</script>
<template>
  <div class="flex items-center space-x-2">
    <div class="grow">
      <div class="font-bold">Preview background <sup>*</sup></div>
    </div>
    <label class="flex items-center space-x-2">
      <input type="color" v-model.lazy="store.previewBgColor" />
      <code class="text-xs">{{ store.previewBgColor }}</code>
    </label>
  </div>
</template>
