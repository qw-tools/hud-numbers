<script lang="ts" setup>
import { store } from "../store";
import Char from "../Canvas/Char.vue";
import { computed } from "vue";

const scenario = {
  armor: "165",
  health: "94",
  ammo: "20",
};

const screenshotScale = 0.75;
const previewFontSize = 50;
const previewActualFontSize = previewFontSize * screenshotScale;
const editorDefaultFontSize = 128;
const scaleFactor = previewActualFontSize / editorDefaultFontSize;

const scaledFontSize = computed(() => {
  return (
    (parseInt(store.glyphs.fontSize) / editorDefaultFontSize) *
    previewActualFontSize
  ).toString();
});
</script>
<template>
  <div
    :style="`
        width: 820px;
        height: 120px;
        background: url(https://vikpe.org/qwnum/assets/img/preview.jpg) no-repeat left center;
      `"
    class="flex items-center"
  >
    <div style="margin-left: 110px; width: 150px">
      <div class="flex">
        <Char
          v-for="(char, charIndex) in scenario.armor.toString().split('')"
          :id="`armor-${charIndex}`"
          :char="char"
          :colorBottom="store.numColors.bottom"
          :colorTop="store.numColors.top"
          :fontFamily="store.glyphs.fontFamily"
          :fontSize="scaledFontSize"
          :gradientStops="store.glyphs.gradientStops"
          :offsetX="store.glyphs.offsetX * scaleFactor"
          :offsetY="store.glyphs.offsetY * scaleFactor"
          :shadowColor="store.glyphs.shadowColor"
          :shadowSize="store.glyphs.shadowSize * scaleFactor"
          :size="previewActualFontSize"
          :strokeColor="store.glyphs.strokeColor"
          :strokeSize="store.glyphs.strokeSize * scaleFactor"
        />
      </div>
    </div>

    <div class="flex" style="margin-left: 120px; width: 150px">
      <Char
        v-for="(char, charIndex) in scenario.health.toString().split('')"
        :id="`health-${charIndex}`"
        :char="char"
        :colorBottom="store.numColors.bottom"
        :colorTop="store.numColors.top"
        :fontFamily="store.glyphs.fontFamily"
        :fontSize="scaledFontSize"
        :gradientStops="store.glyphs.gradientStops"
        :offsetX="store.glyphs.offsetX * scaleFactor"
        :offsetY="store.glyphs.offsetY * scaleFactor"
        :shadowColor="store.glyphs.shadowColor"
        :shadowSize="store.glyphs.shadowSize * scaleFactor"
        :size="previewActualFontSize"
        :strokeColor="store.glyphs.strokeColor"
        :strokeSize="store.glyphs.strokeSize * scaleFactor"
      />
    </div>

    <div class="flex" style="margin-left: 114px; width: 150px">
      <Char
        v-for="(char, charIndex) in scenario.ammo.toString().split('')"
        :id="`ammo-${charIndex}`"
        :char="char"
        :colorBottom="store.anumColors.bottom"
        :colorTop="store.anumColors.top"
        :fontFamily="store.glyphs.fontFamily"
        :fontSize="scaledFontSize"
        :gradientStops="store.glyphs.gradientStops"
        :offsetX="store.glyphs.offsetX * scaleFactor"
        :offsetY="store.glyphs.offsetY * scaleFactor"
        :shadowColor="store.glyphs.shadowColor"
        :shadowSize="store.glyphs.shadowSize * scaleFactor"
        :size="previewActualFontSize"
        :strokeColor="store.glyphs.strokeColor"
        :strokeSize="store.glyphs.strokeSize * scaleFactor"
      />
    </div>
  </div>
</template>
