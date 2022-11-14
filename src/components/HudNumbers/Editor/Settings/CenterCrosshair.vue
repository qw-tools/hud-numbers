<script setup lang="ts">
import { store } from "../../store";
</script>
<template>
  <label class="flex items-center text-xs">
    <input type="checkbox" class="block" v-model="store.drawCrosshair" />
    Show center helper<sup>*</sup>
  </label>
</template>
