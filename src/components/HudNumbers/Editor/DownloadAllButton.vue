<script setup>
import { store } from "../../../store.js";
import { downloadCanvases } from "../../util.js";

const handleClick = async () => {
  const canvases = document.getElementsByClassName("glyph-canvas");
  await downloadCanvases(canvases, `qwnum_${store.glyphs.fontFamily}`);
};
</script>

<template>
  <button
    class="bg-gradient-to-b from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white rounded-md px-3 py-2 font-mono text-sm"
    @click="handleClick"
  >
    Download all
  </button>
</template>
