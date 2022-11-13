<script setup>
import ColorNum from "./Settings/ColorNum.vue";
import ColorAnum from "./Settings/ColorAnum.vue";
import GlyphGrid from "./../Glyphs/GlyphGrid.vue";
import Preview from "./Preview.vue";
import Font from "./Settings/Font.vue";
import Offset from "./Settings/Offset.vue";
import FontShadow from "./Settings/Shadow.vue";
import Reset from "./Settings/Reset.vue";
import GradientStyle from "./Settings/GradientStyle.vue";
import PreviewBackground from "./Settings/PreviewBackground.vue";
import DownloadInfo from "./DownloadInfo.vue";
</script>
<template>
  <div class="container my-4">
    <div class="flex">
      <div class="grow space-y-2" style="max-width: 982px">
        <div class="flex">
          <Preview />
        </div>

        <div class="flex bg-gray-300 rounded-md">
          <div class="mx-4">
            <ColorNum />
          </div>
          <div class="flex-grow">
            <GlyphGrid numType="num" />
          </div>
        </div>

        <div class="flex bg-gray-300 rounded-md">
          <div class="mx-4">
            <ColorAnum />
          </div>
          <div class="flex-grow">
            <GlyphGrid numType="anum" />
          </div>
        </div>

        <div class="ml-20" style="max-width: 990px">
          <DownloadInfo />
        </div>
      </div>

      <div class="bg-gray-200 mx-6 border-l"></div>

      <div class="space-y-4" style="min-width: 220px; max-width: 320px">
        <div class="flex items-center">
          <div class="text-lg font-bold">Settings</div>
          <Reset />
        </div>

        <hr />
        <Font />
        <hr />
        <Offset />
        <hr />
        <FontShadow />
        <hr />
        <GradientStyle />
        <hr />
        <PreviewBackground />
        <hr />
        <div>
          <div class="mt-4 text-xs text-gray-500">
            * not included in download.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
