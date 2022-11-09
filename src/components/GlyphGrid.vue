<script setup>
import { glyphSize, store } from "../store.js";
import Glyph from "./Glyph.vue";
import GlyphCrosshair from "./GlyphCrosshair.vue";

const props = defineProps({
  numType: String,
});

const numberGlyphs = [...Array(10).keys()].map((n) => ({
  char: n.toString(),
  identifier: n.toString(),
  type: "number",
}));
const specialGlyphs = [
  { char: ":", identifier: "colon", type: "nonNumber" },
  { char: "-", identifier: "minus", type: "nonNumber" },
  { char: "/", identifier: "slash", type: "nonNumber" },
];
const allGlyphs = numberGlyphs.concat(specialGlyphs); //.slice(0,3);
</script>

<template>
  <div
    class="grid"
    :style="` grid-template-columns: repeat(auto-fit, ${glyphSize + 2 * 2}px);`"
  >
    <div
      v-for="glyph in allGlyphs"
      class="border-2 hover:border-sky-600 hover:border-sky-600 hover:bg-sky-100"
      :style="`background-color: ${store.bgColor}`"
    >
      <GlyphCrosshair v-if="store.drawCrosshair" />
      <Glyph
        :numType="numType"
        :color="store[`${props.numType}Color`]"
        :char="glyph.char"
        :identifier="glyph.identifier"
        :fontFamily="store.glyphs.fontFamily"
        :fontSize="store.glyphs.fontSize"
        :offsetX="store.glyphs.offsetX"
        :offsetY="store.glyphs.offsetY"
      />
    </div>
  </div>
</template>
