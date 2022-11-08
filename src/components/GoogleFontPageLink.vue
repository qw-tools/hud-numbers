<script setup>
defineProps({
  fontFamily: String,
});

const fontNameToSlug = (name) => name.replaceAll(" ", "+");
</script>

<template>
  <a
    :href="`https://fonts.google.com/specimen/${fontNameToSlug(fontFamily)}`"
    class="text-sky-700"
  >
    <strong>{{ fontFamily }}</strong> on Google Fonts &#8599;
  </a>
</template>

<style scoped></style>
