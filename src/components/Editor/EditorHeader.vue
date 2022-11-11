<script setup>
import FontFamilySelect from "./Settings/FontFamily.vue";
import FontOffset from "./Settings/FontOffset.vue";
import FontSize from "./Settings/FontSize.vue";
import FontShadow from "./Settings/FontShadow.vue";
import GradientStyle from "./Settings/GradientStyle.vue";
</script>
<template>
  <div class="bg-white shadow py-3">
    <div class="container">
      <div class="flex items-center space-x-8">
        <div class="flex space-x-4">
          <FontFamilySelect />
          <FontSize />
          <FontOffset />
        </div>
        <FontShadow />
        <GradientStyle />
      </div>
    </div>
  </div>
</template>
