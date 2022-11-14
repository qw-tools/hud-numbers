<script setup lang="ts">
import { onMounted } from "vue";
import GoogleFontPreload from "./Preload.vue";
import { fontLoadTimeout } from "../config";
import { sleep } from "../util/sys";

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
