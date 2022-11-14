<script setup lang="ts">
import { downloadAllGlyphs } from "../../util";
import { store } from "../store";
</script>

<template>
  <div class="border bg-sky-100 border-sky-300 p-3 rounded-md mx-auto">
    <button
      class="bg-gradient-to-b from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white rounded-md px-3 py-2 font-mono text-sm"
      @click="() => downloadAllGlyphs(`qwnum_${store.glyphs.fontFamily}`)"
    >
      Download all
    </button>

    or
    <strong>click a single glyph</strong>, and save into
    <code class="bg-gray-200 text-black text-sm p-1">/qw/textures/wad/</code>
  </div>
</template>
