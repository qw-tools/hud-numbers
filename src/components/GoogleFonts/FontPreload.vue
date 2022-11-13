<script setup>
import { fontNameToUrl } from "../util.js";

defineProps({
  fontFamily: String,
});
</script>
<template>
  <div>
    <link :href="fontNameToUrl(fontFamily)" rel="stylesheet" />
    <div :style="{ fontFamily: fontFamily }" class="hideElement">hello</div>
  </div>
</template>

<style>
.hideElement {
  position: absolute;
  top: -999px;
}
</style>
