<script lang="ts" setup>
import Font from "./Settings/Font.vue";
import FontShadow from "./Settings/Shadow.vue";
import GradientStyle from "./Settings/GradientStyle.vue";
import Offset from "./Settings/Offset.vue";
import PreviewBackground from "./Settings/PreviewBackground.vue";
import Reset from "./Settings/Reset.vue";
import Stroke from "./Settings/Stroke.vue";
</script>
<template>
  <div class="space-y-4">
    <div class="flex items-center">
      <div class="text-lg font-bold">Settings</div>
      <Reset />
    </div>
    <hr />
    <Font />
    <hr />
    <Offset />
    <hr />
    <Stroke />
    <hr />
    <FontShadow />
    <hr />
    <GradientStyle />
    <hr />
    <PreviewBackground />
    <hr />
    <div>
      <div class="mt-4 text-xs text-gray-500">* not included in download.</div>
    </div>
  </div>
</template>
