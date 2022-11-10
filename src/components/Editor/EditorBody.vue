<script setup>
import ColorNum from "./Settings/ColorNum.vue";
import ColorAnum from "./Settings/ColorAnum.vue";
import GlyphGrid from "./../Glyphs/GlyphGrid.vue";</script>
<template>
  <div class="container mx-auto my-4 space-y-4">
    <div class="flex">
      <div class="px-2 mr-4 rounded-md">
        <ColorNum />
      </div>
      <div class="flex-grow">
        <GlyphGrid numType="num" />
      </div>
    </div>

    <div class="flex">
      <div class="px-2 mr-4 rounded-md">
        <ColorAnum />
      </div>
      <div class="flex-grow">
        <GlyphGrid numType="anum" />
      </div>
    </div>
  </div>
</template>
