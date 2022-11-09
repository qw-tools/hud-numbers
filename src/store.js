import { reactive } from "vue";

export const glyphSize = 128;

export const fontNames = [
  "Aldrich",
  "Alfa Slab One",
  "Azeret Mono",
  "Bevan",
  "Black Ops One",
  "Bungee",
  "Cinzel Decorative",
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
  numColorTop: "#ffffff",
  numColorBottom: "#aaaaaa",
  anumColorTop: "#ff0000",
  anumColorBottom: "#aa0000",
});
