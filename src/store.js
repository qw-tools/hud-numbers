import { reactive } from "vue";

const defaultGlyphSize = 80;

export const store = reactive({
  fontName: "Roboto",
  glyphContainerSize: "64px",
  glyphs: {
    size: defaultGlyphSize,
  },
  numColor: "#000000",
  anumColor: "#ff0000",
});
