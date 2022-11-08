<script setup>
import { store } from "./store.js";
import GoogleFontSelect from "./components/GoogleFontSelect.vue";
import GoogleFontPageLink from "./components/GoogleFontPageLink.vue";
import GlyphGrid from "./components/GlyphGrid.vue";
import FontPreload from "./components/FontPreload.vue";</script>

<template>
  <FontPreload />

  <div class="max-w-5xl mx-auto">

    <div class="p-4 font-bold bg-sky-100 flex items-center">
      <div class="font-bold">QuakeWorld WAD Numbers generator</div>
      <div class="ml-auto">
        <GoogleFontPageLink :fontFamily="store.glyphs.fontFamily" />
      </div>
    </div>

    <div class="my-4">
      <div class="flex items-center">
        <div class="font-bold">Font</div>&nbsp;
        <div>
          <GoogleFontSelect />
        </div>
        <div class="flex ml-2">
          <input v-model.lazy="store.glyphs.fontSize" type="range" min="48" step="8" max="96" class="mr-2"> <span>{{ store.glyphs.fontSize }}px</span>
        </div>

        <div class="flex ml-6 space-x-2 items-center">
          <strong>vertical offset</strong> <input v-model.lazy="store.glyphs.offsetY" type="number" class="app-input w-16" min="-32" max="32">px
        </div>

        <div class="ml-auto">
          <label class="cursor-pointer">
            <input type="checkbox" v-model="store.drawCrosshair" /> Draw center helper
          </label>
        </div>
      </div>
    </div>

    <hr class="my-6" />

    <div class="space-y-2">

      <div class="flex">
        <div class="mr-4">
          <input type="color" v-model.lazy="store.numColor" class="w-8 h-8" />
        </div>
        <div class="grow">
          <GlyphGrid numType="num" />
        </div>
      </div>

      <div class="flex">
        <div class="mr-4">
          <input type="color" v-model.lazy="store.anumColor" class="w-8 h-8" />
        </div>
        <div class="grow">
          <GlyphGrid numType="anum" />
        </div>
      </div>
    </div>

  </div>
</template>
