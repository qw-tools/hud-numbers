import { reactive } from "vue";

export const fontLoadTimeout = 500;
export const fontNames = [
  "Aldrich",
  "Alfa Slab One",
  "Azeret Mono",
  "Bevan",
  "Black Ops One",
  "Bungee",
  "Caesar Dressing",
  "Cinzel Decorative",
  "Fredericka the Great",
  "Geostar Fill",
  "Keania One",
  "Londrina Shadow",
  "Luckiest Guy",
  "Metal Mania",
  "Passion One",
  "Righteous",
  "Rubik Wet Paint",
  "Spicy Rice",
  "Stalinist One",
  "Stardos Stencil",
  "Ultra",
  "Vast Shadow",
  "Wallpoet",
  "Zen Dots",
];

export const gradientStyles = [
  {
    stops: [
      { pos: 0.0, index: 0 },
      { pos: 1.0, index: 1 },
    ],
  },
  {
    stops: [
      { pos: 0, index: 0 },
      { pos: 0.5, index: 1 },
    ],
  },
  {
    stops: [
      { pos: 0, index: 1 },
      { pos: 0.5, index: 0 },
      { pos: 0.5, index: 1 },
      { pos: 1.0, index: 1 },
    ],
  },
  {
    stops: [
      { pos: 0.0, index: 0 },
      { pos: 0.5, index: 1 },
      { pos: 1.0, index: 0 },
    ],
  },
];

export const getDefaultState = () => ({
  fontNames,
  fontsLoaded: false,
  drawCrosshair: false,
  glyphs: {
    fontFamily: fontNames[0],
    fontSize: "120",
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
