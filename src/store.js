import { reactive } from "vue";

const defaultGlyphFontSize = "80";
const fontNames = [
  "Alfa Slab One",
  "Bungee",
  "Bungee Inline",
  "Lato",
  "Londrina Shadow",
  "Righteous",
  "Ultra",
  "Zen Dots",
];

export const store = reactive({
  drawCrosshair: true,
  fontNames,
  glyphContainerSize: "64",
  glyphs: {
    fontFamily: fontNames[0],
    fontSize: defaultGlyphFontSize,
  },
  numColor: "#000000",
  anumColor: "#ff0000",
});
