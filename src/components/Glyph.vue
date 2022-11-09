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

  const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  const pos = {
    x: center.x + props.offsetX,
    y: center.y + props.offsetY,
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
    const approxHeight = 0.9 * props.fontSize;

    const bbox = {
      top: pos.y - props.fontSize / 2,
      height: approxHeight,
    };

    // ctx.beginPath();
    // ctx.strokeStyle = "#ffff00";
    // ctx.rect(0, bbox.top, canvas.width, bbox.height);
    // ctx.stroke();

    const gradient = ctx.createLinearGradient(
      0,
      bbox.top,
      0,
      bbox.top + bbox.height
    );
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
