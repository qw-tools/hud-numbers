import { reactive } from "vue";
import { defaultFontNames, gradientStyles } from "./config.js";

export const getDefaultState = () => ({
  fontNames: defaultFontNames,
  fontsLoaded: false,
  drawCrosshair: false,
  glyphs: {
    fontFamily: defaultFontNames[0],
    fontSize: "128",
    gradientStops: gradientStyles[0].stops,
    shadowSize: 4,
    shadowColor: "#000000",
    size: 128,
    offsetX: 0,
    offsetY: 0,
  },
  centerHelperColor: "#00ff00",
  previewBgColor: "#777777",
  numColors: { top: "#ffffff", bottom: "#aaaaaa" },
  anumColors: { top: "#ff0000", bottom: "#aa0000" },
});

export const resetSettings = () => {
  const preservedData = {
    fontsLoaded: store.fontsLoaded,
    fontNames: store.fontNames,
  };

  Object.assign(store, getDefaultState(), preservedData);
};

export const store = reactive(getDefaultState());
