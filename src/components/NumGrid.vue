<script setup>
import NumGridItem from "./NumGridItem.vue";

defineProps({
  name: String,
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
  <div class="space-y-2">
    <div class="qgrid grid gap-2">
      <NumGridItem
        v-for="g in allGlyphs"
        :glyph="g"
        color="#fff"
        id="num_{{g.identifier}}"
      />
    </div>
    <div class="qgrid grid gap-2">
      <NumGridItem
        v-for="g in allGlyphs"
        :glyph="g"
        color="#f00"
        id="num_{{g.identifier}}"
      />
    </div>
  </div>
</template>

<style scoped>
.qgrid {
  grid-template-columns: repeat(13, 64px);
}
</style>
