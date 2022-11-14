<script setup lang="ts">
import { store } from "../../store";
import GradientCanvas from "./GradientCanvas.vue";
import isequal from "lodash.isequal";
import { gradientStyles } from "../../config";
import { GradientStyle } from "../../gradients";

function handleClick(style: GradientStyle): void {
  store.glyphs.gradientStops = style.stops;
}
</script>
<template>
  <div class="flex items-center">
    <strong class="grow">Gradient style</strong>

    <div
      v-for="style in gradientStyles"
      class="ml-0.5 cursor-pointer border-2 border-gray-400 hover:border-black"
      :class="
        isequal(style.stops, store.glyphs.gradientStops) ? 'border-sky-600' : ''
      "
      @click="() => handleClick(style)"
    >
      <GradientCanvas :size="36" :stops="style.stops" />
    </div>
  </div>
</template>
