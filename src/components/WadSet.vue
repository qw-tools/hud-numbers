<script setup>
import { store } from "../store.js";
import GlyphGrid from "./GlyphGrid.vue";
import { computed } from "vue";

defineProps({
  numType: String,
  size: Number,
})

const colorInputStyle = computed(() => ({
  height: store.glyphContainerSize,
  width: store.glyphContainerSize,
}))

</script>
<template>
  <div class="flex items-center">
    <div class="mr-4">
      <input type="color" v-model="store[`${numType}Color`]" :style="colorInputStyle" />
    </div>
    <div class="grow">
      <GlyphGrid :size="size" :color="store[`${numType}Color`]" />
    </div>
  </div>
</template>

