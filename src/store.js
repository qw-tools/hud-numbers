import { reactive } from "vue";

export const glyphSize = 128;

export const fontNames = [
  "Alfa Slab One",
  "Azeret Mono",
  "Bevan",
  "Bungee",
  "Londrina Shadow",
  "Luckiest Guy",
  "Passion One",
  "Spicy Rice",
  "Righteous",
  "Ultra",
  "Zen Dots",
];

export const store = reactive({
  drawCrosshair: false,
  glyphs: {
    fontFamily: fontNames[0],
    fontSize: "120",
    shadowSize: 4,
    offsetX: 0,
    offsetY: 0,
  },
  bgColor: "#444444",
  numColor: "#ffffff",
  anumColor: "#ff0000",
});
