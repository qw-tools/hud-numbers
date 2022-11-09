<script setup>
import FontFamilySelect from "./Settings/FontFamily.vue";
import FontOffset from "./Settings/FontOffset.vue";
import FontSize from "./Settings/FontSize.vue";
import FontShadow from "./Settings/FontShadow.vue";
</script>
<template>
  <div>
    <div class="flex items-center space-x-8">
      <div class="flex space-x-4">
        <FontFamilySelect />
        <FontSize />
        <FontOffset />
      </div>
      <FontShadow />
    </div>
  </div>
</template>
