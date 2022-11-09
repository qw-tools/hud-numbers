<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <div>
    <label class="block leading-5">
      <input type="checkbox" v-model="store.drawCrosshair" />
      <strong>Center crosshair*</strong><br />
      <span class="text-xs">Helper for adjusting font offset.</span>
    </label>
  </div>
</template>
