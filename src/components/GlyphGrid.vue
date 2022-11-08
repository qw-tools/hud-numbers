<script setup>
import { store } from "../store.js";
import Glyph from "./Glyph.vue";

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
  <div class="qgrid grid gap-2">
    <div v-for="glyph in allGlyphs" class="border border-2 bg-gray-100 hover:border-sky-600 hover:bg-sky-100">
      <Glyph :numType="numType"
             :color="store[`${props.numType}Color`]"
             :char="glyph.char"
             :fontFamily="store.glyphs.fontFamily"
             :fontSize="store.glyphs.fontSize"
             :offsetX="store.glyphs.offsetX"
             :offsetY="store.glyphs.offsetY"
             :drawCrosshair="store.drawCrosshair" />
    </div>
  </div>
</template>

<style scoped>
.qgrid {
  grid-template-columns: repeat(13, 64px);
}
</style>
