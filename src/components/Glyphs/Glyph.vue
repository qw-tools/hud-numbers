<script setup>
import { onMounted, onUpdated } from "vue";
import { downloadGlyph } from "../util";

const props = defineProps({
  char: String,
  identifier: String,
  colorTop: String,
  colorBottom: String,
  numType: String,
  fontFamily: String,
  fontSize: String,
  gradientStops: Array,
  shadowColor: String,
  shadowSize: Number,
  size: Number,
  offsetX: Number,
  offsetY: Number,
});

const id = `${props.numType}_${props.identifier}`;
let canvas = null;
let ctx = null;

const renderCanvas = () => {
  if (!canvas) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    gradient.addColorStop(props.gradientStops[i].pos, color);
  }

  ctx.fillStyle = gradient;
  ctx.fillText(props.char, glyphCenter.x, glyphCenter.y);
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
  <canvas
    class="glyph-canvas"
    :width="props.size"
    :height="props.size"
    :id="id"
    @click="() => downloadGlyph(id)"
  />
</template>

<style scoped>
canvas {
  cursor: pointer;
}
</style>
