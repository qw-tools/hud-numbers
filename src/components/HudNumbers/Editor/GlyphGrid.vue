<script setup>
import { store } from "../store.js";
import { downloadGlyph } from "../../util.js";
import Glyph from "../../Canvas/Char.vue";
import Crosshair from "../../Canvas/Crosshair.vue";

const props = defineProps({
  glyphs: Array,
  colors: Object,
});
</script>

<template>
  <div
    class="grid gap-[1px]"
    :style="`grid-template-columns: repeat(auto-fit, ${store.glyphs.size}px);`"
  >
    <div
      v-for="glyph in glyphs"
      :title="`Download ${glyph.filename}.png`"
      :style="`background-color: ${store.previewBgColor}`"
      @click="() => downloadGlyph(glyph.filename)"
    >
      <Crosshair
        v-show="store.drawCrosshair"
        :size="store.glyphs.size"
        :color="store.centerHelperColor"
      />
      <Glyph
        class="glyph-canvas hover:bg-sky-600 cursor-pointer"
        :id="glyph.filename"
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
      />
    </div>
  </div>
</template>
