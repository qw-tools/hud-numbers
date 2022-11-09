<script setup>
import { glyphSize } from "../store.js";
import { onMounted, onUpdated } from "vue";
import { saveAs } from "file-saver";

const shadowColor = "#000000";

const props = defineProps({
  char: String,
  identifier: String,
  colorTop: String,
  colorBottom: String,
  numType: String,
  fontFamily: String,
  fontSize: String,
  shadowSize: Number,
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

  const pos = {
    x: props.offsetX + canvas.width / 2,
    y: props.offsetY + canvas.height / 2,
  };

  // "shadow"
  if (props.shadowSize > 0) {
    ctx.fillStyle = shadowColor;

    for (let i = 0; i < props.shadowSize; i++) {
      ctx.fillText(props.char, pos.x + i, pos.y + i);
    }
  }

  // color(s)
  if (props.colorTop === props.colorBottom) {
    ctx.fillStyle = props.colorTop;
  } else {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0.0, props.colorTop);
    gradient.addColorStop(1.0, props.colorBottom);
    ctx.fillStyle = gradient;
  }

  // text
  ctx.fillText(props.char, pos.x, pos.y);

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
