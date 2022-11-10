<script setup>
import { store } from "../../../store.js";
import CustomFontFamily from "./CustomFontFamily.vue";</script>
<template>
  <div class="flex items-center space-x-2">
    <strong>Font</strong>
    <select v-model="store.glyphs.fontFamily" class="w-full">
      <option v-for="name in store.fontNames">{{ name }}</option>
    </select>
    <CustomFontFamily />
  </div>
</template>
