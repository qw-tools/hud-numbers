import { reactive } from "vue";

const defaultGlyphFontSize = "64";
const fontNames = [
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
  fontNames,
  glyphContainerSize: "64",
  glyphs: {
    fontFamily: fontNames[0],
    fontSize: defaultGlyphFontSize,
    offsetX: 0,
    offsetY: 0,
  },
  numColor: "#000000",
  anumColor: "#ff0000",
});
