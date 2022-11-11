<script setup>
import { onMounted, onUpdated } from "vue";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

const props = defineProps({
  size: Number,
  stops: Array,
});

let canvas = null;
let ctx = null;

const renderCanvas = () => {
  if (!canvas) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

  for (let i = 0; i < props.stops.length; i++) {
    const color = props.stops[i].index ? "#ffffff" : "#000000";
    gradient.addColorStop(props.stops[i].pos, color);
  }
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.rect(
    0,
    0,
    canvas.width,
    canvas.height * props.stops[props.stops.length - 1].pos
  );
  ctx.fill();
};

onMounted(() => {
  canvas = document.getElementById(id);
  ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  renderCanvas();
});

onUpdated(renderCanvas);
</script>

<template>
  <canvas :id="id" :width="props.size" :height="props.size" />
</template>
