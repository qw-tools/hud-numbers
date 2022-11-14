<script setup lang="ts">
import { store } from "../store.js";
import glyphs from "../glyphs.js";
import GlyphGrid from "./GlyphGrid.vue";
import ScreenshotPreview from "./ScreenshotPreview.vue";
import GradientColors from "./Settings/GradientColors.vue";
import DownloadInfo from "./DownloadInfo.vue";
import SharedSettings from "./SharedSettings.vue";
</script>
<template>
  <div class="container my-4">
    <div class="flex">
      <div class="space-y-2" style="min-width: 860px">
        <div class="flex justify-center bg-black py-1">
          <ScreenshotPreview />
        </div>

        <div class="flex bg-gray-300">
          <div class="flex w-20 justify-center mt-2">
            <GradientColors
              v-model:top.lazy="store.numColors.top"
              v-model:bottom.lazy="store.numColors.bottom"
            />
          </div>
          <div class="flex-grow">
            <GlyphGrid :glyphs="glyphs.nums" :colors="store.numColors" />
          </div>
        </div>

        <div class="flex bg-gray-300">
          <div class="flex w-20 justify-center mt-2">
            <GradientColors
              v-model:top.lazy="store.anumColors.top"
              v-model:bottom.lazy="store.anumColors.bottom"
            />
          </div>
          <div class="flex-grow">
            <GlyphGrid :glyphs="glyphs.anums" :colors="store.anumColors" />
          </div>
        </div>

        <div class="container pt-2">
          <DownloadInfo />
        </div>
      </div>

      <div class="mx-6 border-l border-l-gray-300"></div>

      <div style="min-width: 220px; max-width: 320px">
        <SharedSettings />
      </div>
    </div>
  </div>
</template>
