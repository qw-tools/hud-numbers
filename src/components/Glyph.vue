<script setup>
import { glyphSize } from "../store.js";
import { onMounted, onUpdated } from "vue";
import { saveAs } from "file-saver";

const props = defineProps({
  char: String,
  identifier: String,
  color: String,
  numType: String,
  fontFamily: String,
  fontSize: String,
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

  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${props.fontSize}px "${props.fontFamily}"`;
  ctx.fillStyle = props.color;
  ctx.fillText(
    props.char,
    props.offsetX + canvas.width / 2,
    props.offsetY + canvas.height / 2
  );

  //console.log("renderCanvas", id, canvas.width, canvas.height, ctx.font);
};

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

onMounted(() => {
  sleep(500).then(() => {
    canvas = document.getElementById(id);
    ctx = canvas.getContext("2d");
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    renderCanvas();
  });
});

onUpdated(renderCanvas);

const download = () => {
  canvas.toBlob(function (blob) {
    saveAs(blob, `${id}.png`);
  });
};
</script>

<template>
  <canvas :width="glyphSize" :height="glyphSize" :id="id" @click="download" />
</template>

<style scoped>
canvas {
  cursor: pointer;
}
</style>
