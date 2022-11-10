<script setup>
import { store } from "../../store.js";
import EditorHeader from "./EditorHeader.vue";
import EditorFooter from "./EditorFooter.vue";
import GlyphGrid from "../Glyphs/GlyphGrid.vue";
import ColorNum from "./Settings/ColorNum.vue";
import ColorAnum from "./Settings/ColorAnum.vue";
import LoadingIndicator from "../LoadingIndicator.vue";
</script>
<template>

  <div class="bg-gray-200 px-3 py-2 rounded-md">
    <EditorHeader />
  </div>

  <div class="my-4 space-y-4">

    <LoadingIndicator v-if="!store.glyphs" />

    <div class="flex">
      <div class="px-2 mr-4 bg-gray-200 rounded-md">
        <ColorNum />
      </div>
      <div class="flex-grow">
        <GlyphGrid numType="num" />
      </div>
    </div>

    <div class="flex">
      <div class="px-2 mr-4 bg-gray-200 rounded-md">
        <ColorAnum />
      </div>
      <div class="flex-grow">
        <GlyphGrid numType="anum" />
      </div>
    </div>
  </div>

  <EditorFooter />

</template>
