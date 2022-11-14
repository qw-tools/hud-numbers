<script setup lang="ts">
import { store } from "../store";
import { downloadGlyph } from "../../util";
import Char from "../Canvas/Char.vue";
import Crosshair from "../Canvas/Crosshair.vue";
import { Glyph } from "../glyphs";

interface Props {
  glyphs: Glyph[];
  colors: {
    top: string;
    bottom: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  glyphs: () => [],
  colors: () => ({
    top: "",
    bottom: "",
  }),
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
      <Char
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
