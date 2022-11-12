<script setup>
import { store } from "../../store.js";
import { downloadGlyph } from "../util";
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
  // { char: "/", identifier: "slash", type: "nonNumber" }, OBSOLETE?
];
const allGlyphs = numberGlyphs.concat(specialGlyphs); //.slice(0,3);
</script>

<template>
  <div
    class="grid"
    :style="` grid-template-columns: repeat(auto-fit, ${
      store.glyphs.size + 2 * 2
    }px);`"
  >
    <div
      v-for="glyph in allGlyphs"
      class="border-2 hover:border-sky-600 hover:border-sky-600 hover:bg-sky-100 cursor-pointer"
      :title="`Download ${numType}_${glyph.identifier}.png`"
      :style="`background-color: ${store.previewBgColor}`"
    >
      <GlyphCrosshair
        v-show="store.drawCrosshair"
        :size="store.glyphs.size"
        :color="store.centerHelperColor"
      />
      <Glyph
        :id="`${numType}_${glyph.identifier}`"
        :colorTop="store[`${props.numType}ColorTop`]"
        :colorBottom="store[`${props.numType}ColorBottom`]"
        :char="glyph.char"
        :fontFamily="store.glyphs.fontFamily"
        :fontSize="store.glyphs.fontSize"
        :gradientStops="store.glyphs.gradientStops"
        :shadowColor="store.glyphs.shadowColor"
        :shadowSize="store.glyphs.shadowSize"
        :offsetX="store.glyphs.offsetX"
        :offsetY="store.glyphs.offsetY"
        :size="store.glyphs.size"
        @click="() => downloadGlyph(`${numType}_${glyph.identifier}`)"
      />
    </div>
  </div>
</template>
