<script setup>
import { store } from "../../store.js";
import { reactive } from "vue";
import Glyph from "./../Glyphs/Glyph.vue";

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

const scale = 0.75;

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
  <div class="flex items-center justify-center">
    <!--    <div class="grow text-center">-->
    <!--      <button class="px-2 py-1 rounded bg-gray-400" @click="onPrev">-->
    <!--        Prev-->
    <!--      </button>-->
    <!--    </div>-->
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
            v-for="(char, charIndex) in data.scenario.armor
              .toString()
              .split('')"
            :id="`armor-${charIndex}`"
            :size="50"
            :colorTop="store.numColorTop"
            :colorBottom="store.numColorBottom"
            :fontFamily="store.glyphs.fontFamily"
            :shadowColor="store.glyphs.shadowColor"
            :shadowSize="store.glyphs.shadowSize * scale"
            :gradientStops="store.glyphs.gradientStops"
            fontSize="48"
            :char="char"
          />
        </div>
      </div>

      <div class="flex" style="margin-left: 118px; width: 150px">
        <Glyph
          v-for="(char, charIndex) in data.scenario.health.toString().split('')"
          :id="`health-${charIndex}`"
          :size="50"
          :colorTop="store.numColorTop"
          :colorBottom="store.numColorBottom"
          :fontFamily="store.glyphs.fontFamily"
          :shadowColor="store.glyphs.shadowColor"
          :shadowSize="store.glyphs.shadowSize * scale"
          :gradientStops="store.glyphs.gradientStops"
          fontSize="48"
          :char="char"
        />
      </div>

      <div class="flex" style="margin-left: 112px; width: 150px">
        <Glyph
          v-for="(char, charIndex) in data.scenario.ammo.toString().split('')"
          :id="`ammo-${charIndex}`"
          :size="50"
          :colorTop="store.numColorTop"
          :colorBottom="store.numColorBottom"
          :fontFamily="store.glyphs.fontFamily"
          :shadowColor="store.glyphs.shadowColor"
          :shadowSize="store.glyphs.shadowSize * scale"
          :gradientStops="store.glyphs.gradientStops"
          fontSize="48"
          :char="char"
        />
      </div>
    </div>
    <!--    <div class="grow text-center">-->
    <!--      <button class="px-2 py-1 rounded bg-gray-400" @click="onNext">-->
    <!--        Next-->
    <!--      </button>-->
    <!--    </div>-->
  </div>
</template>
