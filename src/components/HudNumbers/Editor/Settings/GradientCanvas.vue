<script setup lang="ts">
import { onMounted, onUpdated } from "vue";
import { v4 as uuidv4 } from "uuid";
import { GradientStop } from "../../types";

const id = uuidv4();

interface Props {
  size: number;
  stops: GradientStop[];
}

const props = defineProps<Props>();

let canvas: HTMLCanvasElement | null = null;

const renderCanvas = () => {
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

  for (let i = 0; i < props.stops.length; i++) {
    const color = props.stops[i].index ? "#ffffff" : "#000000";
    gradient.addColorStop(props.stops[i].position, color);
  }
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.rect(
    0,
    0,
    canvas.width,
    canvas.height * props.stops[props.stops.length - 1].position
  );
  ctx.fill();
};

onMounted(() => {
  canvas = document.getElementById(id) as HTMLCanvasElement;
  renderCanvas();
});

onUpdated(renderCanvas);
</script>

<template>
  <canvas :id="id" :width="props.size" :height="props.size" />
</template>
