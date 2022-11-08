<script setup>
import { onMounted, onUpdated } from "vue";
import { saveAs } from "file-saver";

const props = defineProps({
  char: String,
  color: String,
  numType: String,
  fontFamily: String,
  fontSize: String,
  drawCrosshair: Boolean,
});

const id = `${props.numType}_${props.char}`;
let canvas = null;
let ctx = null;

const renderCanvas = () => {
  if (!canvas) {
    return
  }

  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${props.fontSize}px "${props.fontFamily}"`;
  ctx.fillStyle = props.color;
  ctx.fillText(props.char, canvas.width / 2, canvas.height / 2);

  console.log("renderCanvas", id, canvas.width, canvas.height, ctx.font);

  if (props.drawCrosshair) {
    drawCrosshair(ctx);
  }
}

const drawCrosshair = (ctx) => {
  const center = { x: (canvas.width / 2) - 1, y: (canvas.height / 2) - 1 }
  ctx.beginPath();
  ctx.moveTo(center.x, 0);
  ctx.lineTo(center.x, canvas.height - 1);
  ctx.moveTo(0, center.y);
  ctx.lineTo(canvas.width - 1, center.y);
  ctx.stroke();
}

onMounted(() => {
  canvas = document.getElementById(id);
  ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  renderCanvas()
})

onUpdated(renderCanvas);

const downloadCanvas = () => {
  canvas.toBlob(function (blob) {
    saveAs(blob, `${id}.png`);
  });
}


</script>

<template>
  <canvas width="64" height="64" :id="id" @click="downloadCanvas" />
</template>


<style>
canvas {
  cursor: pointer
}
</style>
