<script setup>
import Glyph from "./Glyph.vue";

defineProps({
  color: String,
  size: Number,
});

const numberGlyphs = [...Array(10).keys()].map((n) => ({
  char: n.toString(),
  identifier: n.toString(),
}));
const specialGlyphs = [
  { char: ":", identifier: "colon" },
  { char: "-", identifier: "minus" },
  { char: "/", identifier: "slash" },
];
const allGlyphs = numberGlyphs.concat(specialGlyphs);
</script>

<template>
  <div class="qgrid grid gap-2">
    <div v-for="glyph in allGlyphs" class="border border-gray-300 bg-gray-100">
      <Glyph :char="glyph.char" :color="color" />
    </div>
  </div>
</template>

<style scoped>
.qgrid {
  grid-template-columns: repeat(13, 64px);
}
</style>
