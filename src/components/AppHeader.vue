<script setup>
import { store } from "../store.js";
import GoogleFontPageLink from "./GoogleFontPageLink.vue";</script>

<template>
  <div class="flex items-center my-4">
    <div class="font-bold">QuakeWorld WAD/HUD Numbers Generator</div>
    <div class="ml-auto text-xs">
      <GoogleFontPageLink :fontFamily="store.glyphs.fontFamily" />
    </div>
  </div>
</template>
