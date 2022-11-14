<script setup lang="ts">
import { store } from "../store.js";
import { reactive } from "vue";
import Glyph from "../../Canvas/Char.vue";

const scenarios = [
  {
    image: "preview01",
    armor: "200",
    health: "100",
    ammo: "23",
  },
  {
    image: "preview02",
    armor: "0",
    health: "25",
    ammo: "4",
  },
  {
    image: "preview03",
    armor: "64",
    health: "150",
    ammo: "22",
  },
  {
    image: "preview04",
    armor: "0",
    health: "12",
    ammo: "52",
  },
];

const screenshotScale = 0.75;
const previewFontSize = 50;
const previewActualFontSize = previewFontSize * screenshotScale;
const editorDefaultFontSize = 128;
const scaleFactor = previewActualFontSize / editorDefaultFontSize;

let scenarioIndex = 0;

const data = reactive({
  scenarioIndex,
  scenario: scenarios[scenarioIndex],
});

// const onPrev = () => {
//   if (0 === data.scenarioIndex) {
//     data.scenarioIndex = scenarios.length - 1;
//   } else {
//     data.scenarioIndex -= 1;
//   }
//   data.scenario = scenarios[data.scenarioIndex];
// };
//
// const onNext = () => {
//   data.scenarioIndex = (data.scenarioIndex + 1) % scenarios.length;
//   data.scenario = scenarios[data.scenarioIndex];
// };
</script>
<template>
  <div
    class="flex items-center"
    :style="`
        width: 820px;
        height: 150px;
        background: url(https://vikpe.org/qwnum/assets/img/preview/${data.scenario.image}.jpg) no-repeat;
      `"
  >
    <div style="margin-left: 104px; width: 150px">
      <div class="flex" v-show="'0' !== data.scenario.armor">
        <Glyph
          v-for="(char, charIndex) in data.scenario.armor.toString().split('')"
          :id="`armor-${charIndex}`"
          :size="previewActualFontSize"
          :colorTop="store.numColors.top"
          :colorBottom="store.numColors.bottom"
          :fontFamily="store.glyphs.fontFamily"
          :shadowColor="store.glyphs.shadowColor"
          :shadowSize="store.glyphs.shadowSize * scaleFactor"
          :gradientStops="store.glyphs.gradientStops"
          :offsetX="store.glyphs.offsetX * scaleFactor"
          :offsetY="store.glyphs.offsetY * scaleFactor"
          :fontSize="
            (
              (parseInt(store.glyphs.fontSize) / editorDefaultFontSize) *
              previewActualFontSize
            ).toString()
          "
          :char="char"
        />
      </div>
    </div>

    <div class="flex" style="margin-left: 118px; width: 150px">
      <Glyph
        v-for="(char, charIndex) in data.scenario.health.toString().split('')"
        :id="`health-${charIndex}`"
        :size="previewActualFontSize"
        :colorTop="store.numColors.top"
        :colorBottom="store.numColors.bottom"
        :fontFamily="store.glyphs.fontFamily"
        :shadowColor="store.glyphs.shadowColor"
        :shadowSize="store.glyphs.shadowSize * scaleFactor"
        :gradientStops="store.glyphs.gradientStops"
        :offsetX="store.glyphs.offsetX * scaleFactor"
        :offsetY="store.glyphs.offsetY * scaleFactor"
        :fontSize="
          (
            (parseInt(store.glyphs.fontSize) / editorDefaultFontSize) *
            previewActualFontSize
          ).toString()
        "
        :char="char"
      />
    </div>

    <div class="flex" style="margin-left: 112px; width: 150px">
      <Glyph
        v-for="(char, charIndex) in data.scenario.ammo.toString().split('')"
        :id="`ammo-${charIndex}`"
        :size="previewActualFontSize"
        :colorTop="store.numColors.top"
        :colorBottom="store.numColors.bottom"
        :fontFamily="store.glyphs.fontFamily"
        :shadowColor="store.glyphs.shadowColor"
        :shadowSize="store.glyphs.shadowSize * scaleFactor"
        :gradientStops="store.glyphs.gradientStops"
        :offsetX="store.glyphs.offsetX * scaleFactor"
        :offsetY="store.glyphs.offsetY * scaleFactor"
        :fontSize="
          (
            (parseInt(store.glyphs.fontSize) / editorDefaultFontSize) *
            previewActualFontSize
          ).toString()
        "
        :char="char"
      />
    </div>
  </div>
</template>
