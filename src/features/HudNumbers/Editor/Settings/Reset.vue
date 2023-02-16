<script setup lang="ts">
import { resetSettings } from "../../store";
</script>
<template>
  <input
    type="button"
    class="cursor-pointer ml-auto bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md border border-gray-400 hover:border-gray-500 text-sm"
    value="reset to default"
    @click="resetSettings"
  />
</template>
