<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { onMounted } from "vue";

interface Props {
  size: number;
  color: string;
}

const props = defineProps<Props>();

const id = uuidv4();
let canvas: HTMLCanvasElement | null = null;

const render = () => {
  if (!canvas) {
    return;
  }

  drawCrosshair(canvas, props.color);
};

const canvasCenter = (canvas: HTMLCanvasElement) => ({
  x: canvas.width / 2 - 1,
  y: canvas.height / 2 - 1,
});

const drawCrosshair = (
  canvas: HTMLCanvasElement,
  color: string,
  width: number = 1
) => {
  const center = canvasCenter(canvas);
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(center.x, 0);
  ctx.lineTo(center.x, canvas.height);
  ctx.moveTo(0, center.y);
  ctx.lineTo(canvas.width, center.y);

  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
};

onMounted(() => {
  canvas = document.getElementById(id) as HTMLCanvasElement;

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
