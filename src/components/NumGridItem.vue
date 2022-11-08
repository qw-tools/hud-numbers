<script setup>
import { store } from "./../store.js";
import { computed } from "vue";

const props = defineProps({
  glyph: Object,
  color: String,
});

const styles = computed(() => ({
  fontFamily: store.fontName,
  color: props.color,
}));
</script>

<template>
  <div class="bg-gray-400 border border-gray-300 py-4 text-center">
    <div class="text-stroke text-6xl font-bold" :style="styles">
      {{ glyph.char }}
    </div>
  </div>
</template>

<style scoped>
.text-stroke {
  text-shadow: 1px 1px #666;
  /*color: white;*/
  /*-webkit-text-fill-color: white;*/
  /*-webkit-text-stroke-width: 1px;*/
  /*-webkit-text-stroke-color: red;*/
  /*background: -webkit-linear-gradient(#fff, #ccc);*/
  /*-webkit-background-clip: text;*/
  /*-webkit-text-fill-color: transparent;*/
}
</style>
