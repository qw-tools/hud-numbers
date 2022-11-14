<script setup lang="ts">
import { reactive } from "vue";
import { fontExist, sleep } from "../../../util.js";
import { store } from "../../store.js";
import { fontLoadTimeout } from "../../config.js";

const defaultMsg =
  '<a href="https://fonts.google.com/" class="text-sky-700">Find fonts on Google Fonts ↗</a>';
const defaultMsgClass = "";

const model = reactive({
  customFont: "",
  isLoadingFont: false,
  msg: defaultMsg,
  msgClass: defaultMsgClass,
});

const handleAddFont = async () => {
  if (store.fontNames.includes(model.customFont)) {
    store.glyphs.fontFamily = model.customFont;
    model.msg = "Font already loaded.";
    model.msgClass = "text-amber-700";
    model.customFont = "";
    return;
  }

  model.isLoadingFont = true;
  const isValidFont = await fontExist(model.customFont);

  if (isValidFont) {
    store.fontNames.push(model.customFont);

    sleep(fontLoadTimeout).then(() => {
      store.glyphs.fontFamily = model.customFont;
      model.msg = "Font added.";
      model.msgClass = "text-green-700";
      model.customFont = "";
      model.isLoadingFont = false;
    });
  } else {
    model.msg = "Font not found.";
    model.msgClass = "text-red-700";
    model.isLoadingFont = false;
  }
};
</script>
<template>
  <div>
    <div class="flex">
      <input
        v-model.lazy.trim="model.customFont"
        :disabled="model.isLoadingFont"
        class="border-red-400 w-32"
        type="text"
      />
      <button
        :disabled="model.isLoadingFont"
        class="bg-gray-200 rounded text-xs px-2 border border-gray-300"
        @click="handleAddFont"
      >
        + Add font
      </button>
    </div>
    <div class="text-xs mt-2">
      <span :class="model.msgClass" v-html="model.msg" />
    </div>
  </div>
</template>
