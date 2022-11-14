<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { onMounted, onUpdated } from "vue";
import { GradientStop } from "../gradients";

interface Props {
  id: string;
  char: string;
  colorTop: string;
  colorBottom: string;
  fontFamily: string;
  fontSize: string;
  gradientStops: GradientStop[];
  shadowColor: string;
  shadowSize: number;
  size: number;
  offsetX: number;
  offsetY: number;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => uuidv4(),
  char: "0",
  colorTop: "#ff0000",
  colorBottom: "#00ffff",
  fontFamily: "Aldrich",
  fontSize: "48",
  gradientStops: () => [
    { position: 0.0, index: 0 },
    { position: 1.0, index: 1 },
  ],
  shadowColor: "#000000",
  shadowSize: 2,
  size: 64,
  offsetX: 0,
  offsetY: 0,
});

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

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = `${props.fontSize}px "${props.fontFamily}"`;

  const canvasCenter = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  const glyphCenter = {
    x: canvasCenter.x + props.offsetX,
    y: canvasCenter.y + props.offsetY,
  };

  // "shadow"
  if (props.shadowSize > 0) {
    ctx.fillStyle = props.shadowColor;

    for (let i = 0; i < props.shadowSize; i++) {
      ctx.fillText(props.char, glyphCenter.x + i, glyphCenter.y + i);
    }
  }

  // color(s)
  if (props.colorTop === props.colorBottom) {
    ctx.fillStyle = props.colorTop;
    ctx.fillText(props.char, glyphCenter.x, glyphCenter.y);
    return;
  }

  const metrics = ctx.measureText(props.char);
  const bbox = {
    top: glyphCenter.y - metrics.actualBoundingBoxAscent,
    bottom: glyphCenter.y + metrics.actualBoundingBoxDescent,
    height: 0,
  };

  // debug: bounding box
  // ctx.beginPath();
  // ctx.strokeStyle = "#ffff00";
  // ctx.rect(0, bbox.top, canvas.width, bbox.bottom - bbox.top);
  // ctx.stroke();

  // text
  const gradient = ctx.createLinearGradient(0, bbox.top, 0, bbox.bottom);
  for (let i = 0; i < props.gradientStops.length; i++) {
    const color = props.gradientStops[i].index
      ? props.colorBottom
      : props.colorTop;
    gradient.addColorStop(props.gradientStops[i].position, color);
  }

  ctx.fillStyle = gradient;
  ctx.fillText(props.char, glyphCenter.x, glyphCenter.y);
};

onMounted(() => {
  canvas = document.getElementById(props.id) as HTMLCanvasElement;
  renderCanvas();
});

onUpdated(renderCanvas);
</script>

<template>
  <canvas :id="id" :width="props.size" :height="props.size" />
</template>
