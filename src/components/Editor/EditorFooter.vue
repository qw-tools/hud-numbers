<script setup>
import CenterHelperToggle from "./Settings/CenterCrosshair.vue";
import PreviewBackground from "./Settings/PreviewBackground.vue";
import DownloadAllButton from "./DownloadAllButton.vue";
</script>
<template>
  <div class="container my-6">
    <div class="flex justify-around">
      <div class="flex">
        <div class="space-y-4">
          <div class="flex items-center space-x-12 mx-4">
            <CenterHelperToggle />
            <PreviewBackground />
          </div>
          <div>
            <div
              class="border-x border-b h-2 border-gray-400 border-dashed"
            ></div>
            <div class="text-xs text-center text-gray-600 mt-2">
              * Not included in download
            </div>
          </div>
        </div>

        <div class="w-24"></div>

        <div class="flex">
          <div>
            <div class="border bg-sky-100 border-sky-300 p-2 rounded-md">
              <DownloadAllButton />
              or
              <strong>click a single glyph</strong>, and save into
              <code class="bg-gray-200 text-black text-sm p-1"
                >/qw/textures/wad/</code
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
