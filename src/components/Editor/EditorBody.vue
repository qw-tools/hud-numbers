<script setup>
import { store } from "../../store.js";
import ColorNum from "./Settings/ColorNum.vue";
import ColorAnum from "./Settings/ColorAnum.vue";
import GlyphGrid from "./../Glyphs/GlyphGrid.vue";
import Glyph from "../Glyphs/Glyph.vue";
import VisualHelpers from "./Settings/VisualHelpers.vue";

const previewChars = [
  { id: "preview_1", char: "1" },
  { id: "preview_2", char: "0" },
  { id: "preview_3", char: "0" },
];
</script>
<template>
  <div class="container my-4">
    <div class="flex">
      <div class="flex-grow">
        <div class="flex">
          <div class="px-2 mr-4 rounded-md">
            <ColorNum />
          </div>
          <div class="flex-grow">
            <GlyphGrid numType="num" />
          </div>
        </div>

        <div class="flex mt-2">
          <div class="px-2 mr-4 rounded-md">
            <ColorAnum />
          </div>
          <div class="flex-grow">
            <GlyphGrid numType="anum" />
          </div>
        </div>

        <div class="flex items-center justify-center ml-16 mt-6">
          <VisualHelpers />
        </div>
      </div>

      <div class="flex flex-col" style="width: 640px">
        <div class="flex justify-center grow" style="width: 640px">
          <div
            class="flex shadow-md border-4 border-white rounded"
            style="
              width: 600px;
              height: 400px;
              background: url(/assets/img/screenshots/ezquake005.png);
              background-size: cover;
            "
          >
            <div
              class="flex mt-auto"
              style="margin-left: 322px; margin-bottom: 22px"
            >
              <Glyph
                v-for="p in previewChars"
                :id="p.id"
                :char="p.char"
                :fontSize="20"
                :size="24"
                :fontFamily="store.glyphs.fontFamily"
                :colorTop="store.numColorTop"
                :colorBottom="store.numColorBottom"
                :gradientStops="store.glyphs.gradientStops"
                :shadowColor="store.glyphs.shadowColor"
                :offsetX="store.glyphs.offsetX"
                :offsetY="store.glyphs.offsetY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
