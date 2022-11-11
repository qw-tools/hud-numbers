<script setup>
import { downloadCanvases } from "../util.js";

const handleClick = async () => {
  const canvases = document.getElementsByClassName("glyph-canvas");
  await downloadCanvases(canvases, "qwnum");
};
</script>

<template>
  <button
    class="bg-sky-600 hover:bg-sky-800 text-white rounded-md px-3 py-2 font-mono text-sm"
    @click="handleClick"
  >
    Download all
  </button>
</template>
