<script setup lang="ts">
interface Props {
  top: string;
  bottom: string;
}

const props = withDefaults(defineProps<Props>(), {
  top: "",
  bottom: "",
});

const emit = defineEmits(["update:top", "update:bottom"]);

const updateTop = (e: Event): void => update("update:top", e);
const updateBottom = (e: Event): void => update("update:bottom", e);

function update(eventName: "update:top" | "update:bottom", event: Event): void {
  emit(eventName, (event.target as HTMLInputElement).value);
}
</script>
<template>
  <div class="space-y-2">
    <label class="block text-center">
      <input type="color" :value="props.top" @change="updateTop" /><br />
      <code class="block text-xs">{{ props.top }}</code>
    </label>
    <label class="block text-center">
      <input type="color" :value="props.bottom" @change="updateBottom" /><br />
      <code class="block text-xs">{{ props.bottom }}</code>
    </label>
  </div>
</template>
