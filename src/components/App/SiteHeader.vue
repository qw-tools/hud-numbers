<script setup lang="ts">
const pages = [
  { url: "https://tools.quake.world/model-textures/", title: "Model Textures" },
  { url: import.meta.env.BASE_URL, title: "HUD Numbers", active: true },
  { url: "https://tools.quake.world/charset/", title: "Charset" },
];
</script>

<template>
  <div class="bg-gray-800">
    <div class="container h-12 items-center text-white text-sm">
      <div class="flex items-center h-12">
        <a
            href="https://tools.quake.world/"
            class="px-2 hover:text-yellow-200"
        >
          QuakeWorld Tools
        </a>
        <div class="text-gray-400 mr-6 font-mono">Graphics</div>
        <a v-for="page in pages" :href="page.url" class="flex px-2 h-full items-center hover:text-yellow-100 "
           :class="page.active ? 'font-bold text-green-300' : 'text-sky-200'">{{ page.title }}</a>
      </div>
    </div>
  </div>
</template>
