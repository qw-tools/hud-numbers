<script setup>
import { v4 as uuidv4 } from "uuid";
import { onMounted } from "vue";

const props = defineProps({
  size: Number,
  color: String,
});

const id = uuidv4();
let canvas = null;
let ctx = null;

const render = () => {
  if (!canvas || !ctx) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const center = { x: canvas.width / 2 - 1, y: canvas.height / 2 - 1 };
  ctx.beginPath();
  ctx.moveTo(center.x, 0);
  ctx.lineTo(center.x, canvas.height);
  ctx.moveTo(0, center.y);
  ctx.lineTo(canvas.width, center.y);
  ctx.strokeStyle = props.color;
  ctx.stroke();
};

onMounted(() => {
  canvas = document.getElementById(id);
  ctx = canvas.getContext("2d");
  render();
});
</script>

<template>
  <canvas
    :width="props.size"
    :height="props.size"
    :id="id"
    :style="`margin-bottom: -${props.size}px`"
  />
</template>
