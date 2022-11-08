import { reactive } from "vue";

const defaultGlyphSize = 128;
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
  fontNames,
  glyphContainerSize: "64px",
  glyphs: {
    fontFamily: fontNames[0],
    size: defaultGlyphSize,
  },
  numColor: "#000000",
  anumColor: "#ff0000",
});
