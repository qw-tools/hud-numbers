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
const allGlyphs = numberGlyphs.concat(specialGlyphs);

</script>

<template>
  <div class="qgrid grid gap-2">
    <div v-for="glyph in allGlyphs" class="border border-2 bg-gray-100 hover:border-green-600">
      <Glyph :char="glyph.char"
             :numType="numType"
             :color="store[`${props.numType}Color`]"
             :fontFamily="store.glyphs.fontFamily"
             :fontSize="store.glyphs.fontSize"
             :drawCrosshair="store.drawCrosshair" />
    </div>
  </div>
</template>

<style scoped>
.qgrid {
  grid-template-columns: repeat(13, 64px);
}
</style>
