<script setup lang="ts">
import { fontNameToUrl } from "../util/font";

interface Props {
  fontFamily: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div>
    <link :href="fontNameToUrl(fontFamily)" rel="stylesheet" />
    <div :style="{ fontFamily: props.fontFamily }" class="hideElement">
      hello
    </div>
  </div>
</template>

<style>
.hideElement {
  position: absolute;
  top: -999px;
}
</style>
