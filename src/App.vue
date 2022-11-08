<script setup>
import { store } from "./store.js";
import GoogleFontSelect from "./components/GoogleFontSelect.vue";
import GoogleFontPageLink from "./components/GoogleFontPageLink.vue";
import GlyphGrid from "./components/GlyphGrid.vue";
import FontPreload from "./components/FontPreload.vue";
</script>

<template>
  <FontPreload />

  <div class="max-w-5xl mx-auto mt-4">
    <div class="font-bold flex items-center">
      <div class="font-bold">QuakeWorld WAD Numbers generator</div>
      <div class="ml-auto text-gray-600 text-xs">
        <GoogleFontPageLink :fontFamily="store.glyphs.fontFamily" />
        <span class="text-gray-400 mx-2">|</span>
        <a href="https://github.com/vikpe/qwnum" class="text-sky-700"
          >Source on GitHub &#8599;</a
        >
      </div>
    </div>

    <hr class="my-4" />

    <div>
      <div class="flex items-center">
        <div class="font-bold">Font</div>
        <div>
          <GoogleFontSelect />
        </div>
        <div class="flex">
          <input
            v-model.lazy="store.glyphs.fontSize"
            type="range"
            min="48"
            step="4"
            max="96"
            class="w-24 mr-2"
          />
          <span>{{ store.glyphs.fontSize }}px</span>
        </div>

        <div class="flex ml-6 space-x-2 items-center">
          <strong>Offset</strong> <span class="text-gray-500">(x,y)</span>
          <input
            v-model.lazy="store.glyphs.offsetX"
            type="number"
            class="app-input w-14"
            min="-32"
            max="32"
          />
          <input
            v-model.lazy="store.glyphs.offsetY"
            type="number"
            class="app-input w-14"
            min="-32"
            max="32"
          />
          &nbsp; px
        </div>

        <div class="ml-auto">
          <label>
            <input type="checkbox" v-model="store.drawCrosshair" /> Draw center
            helper
          </label>
        </div>
      </div>
    </div>

    <hr class="my-4" />

    <div class="flex">
      <div class="mr-4">
        <label class="block text-center w-14">
          <input type="color" v-model.lazy="store.numColor" class="w-8 h-8" />
          <br />
          <code class="text-xs">{{ store.numColor }}</code>
        </label>
      </div>
      <div class="grow">
        <GlyphGrid numType="num" />
      </div>
    </div>

    <div class="flex mt-2">
      <div class="mr-4">
        <label class="block text-center w-14">
          <input type="color" v-model.lazy="store.anumColor" class="w-8 h-8" />
          <br />
          <code class="text-xs">{{ store.anumColor }}</code>
        </label>
      </div>
      <div class="grow">
        <GlyphGrid numType="anum" />
      </div>
    </div>

    <div class="mt-2 ml-16 mr-auto">
      <label class="block text-center w-14">
        <input type="color" class="w-8 h-8" v-model.lazy="store.bgColor" />
        <br />
        <code class="text-xs">{{ store.bgColor }}</code>
      </label>
    </div>
    <div class="text-center mt-4 text-sky-800">
      <strong>ⓘ click a glyph to download</strong>, and save into
      <span class="bg-gray-200 text-black text-sm p-1">/qw/textures/wad/</span>
    </div>
  </div>
</template>
