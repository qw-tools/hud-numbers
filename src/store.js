import { reactive } from "vue";

export const glyphSize = 128;

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
