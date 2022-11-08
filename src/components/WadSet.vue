<script setup>
import { store } from "../store.js";
import GlyphGrid from "./GlyphGrid.vue";
import { computed } from "vue";

defineProps({
  numType: String,
})

const colorInputStyle = computed(() => ({
  height: `${store.glyphContainerSize}px`,
  width: `${store.glyphContainerSize}px`,
}))

</script>
<template>
  <div class="flex">
    <div class="mr-4">
      <input type="color" v-model.lazy="store[`${numType}Color`]" :style="colorInputStyle" />
    </div>
    <div class="grow">
      <GlyphGrid :numType="numType" />
    </div>
  </div>
</template>

