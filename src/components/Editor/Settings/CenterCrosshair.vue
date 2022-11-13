<script setup>
import { store } from "../../../store.js";
</script>
<template>
  <label class="flex items-center text-xs">
    <input type="checkbox" class="block" v-model="store.drawCrosshair" />
    <div class="">Show center helper<sup>*</sup></div>
  </label>
</template>
