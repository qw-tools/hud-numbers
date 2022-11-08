<script setup>
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
      <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
        <text :font-size="size" :fill="color" text-anchor="middle" dominant-baseline="central" x="50%" y="50%">{{ glyph.char }}</text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.qgrid {
  grid-template-columns: repeat(13, 64px);
}

svg text {
  font-weight: bold;
  /*fill: red;*/
}
</style>
