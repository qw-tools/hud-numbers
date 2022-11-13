<script setup>
const props = defineProps({
  top: String,
  bottom: String,
});
defineEmits(["update:top", "update:bottom"]);
</script>
<template>
  <div class="space-y-2">
    <label class="block text-center">
      <input
        type="color"
        :value="props.top"
        @change="$emit('update:top', $event.target.value)"
      /><br />
      <code class="block text-xs">{{ props.top }}</code>
    </label>
    <label class="block text-center">
      <input
        type="color"
        :value="props.bottom"
        @change="$emit('update:bottom', $event.target.value)"
      /><br />
      <code class="block text-xs">{{ props.bottom }}</code>
    </label>
  </div>
</template>
