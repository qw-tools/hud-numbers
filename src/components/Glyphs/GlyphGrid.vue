<script setup>
import { store } from "../../store.js";
import { downloadGlyph } from "../util";
import Glyph from "./Glyph.vue";
import GlyphCrosshair from "./GlyphCrosshair.vue";

const props = defineProps({
  numType: String,
  colors: Object,
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
    class="grid gap-[1px]"
    :style="`grid-template-columns: repeat(auto-fit, ${store.glyphs.size}px);`"
  >
    <div
      v-for="glyph in allGlyphs"
      :title="`Download ${numType}_${glyph.identifier}.png`"
      :style="`background-color: ${store.previewBgColor}`"
    >
      <GlyphCrosshair
        v-show="store.drawCrosshair"
        :size="store.glyphs.size"
        :color="store.centerHelperColor"
      />
      <Glyph
        class="hover:bg-sky-600 cursor-pointer"
        :id="`${numType}_${glyph.identifier}`"
        :colorTop="props.colors.top"
        :colorBottom="props.colors.bottom"
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
