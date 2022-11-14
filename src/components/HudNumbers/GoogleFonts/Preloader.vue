<script setup lang="ts">
import { sleep } from "../util";
import { onMounted } from "vue";
import GoogleFontPreload from "./Preload.vue";
import { fontLoadTimeout } from "../config";

interface Props {
  fontNames: string[];
  onLoaded: () => void;
}

const props = defineProps<Props>();

onMounted(() => {
  sleep(fontLoadTimeout).then(props.onLoaded);
});
</script>

<template>
  <GoogleFontPreload v-for="name in props.fontNames" :fontFamily="name" />
</template>
