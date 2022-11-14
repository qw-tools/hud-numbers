import {GradientStyle} from "./gradients";

export const fontLoadTimeout = 500;

export const defaultFontNames: string[] = [
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

export const gradientStyles: GradientStyle[] = [
    {
        stops: [
            {position: 0.0, index: 0},
            {position: 1.0, index: 1},
        ],
    },
    {
        stops: [
            {position: 0, index: 0},
            {position: 0.5, index: 1},
        ],
    },
    {
        stops: [
            {position: 0, index: 1},
            {position: 0.5, index: 0},
            {position: 0.5, index: 1},
            {position: 1.0, index: 1},
        ],
    },
    {
        stops: [
            {position: 0.0, index: 0},
            {position: 0.5, index: 1},
            {position: 1.0, index: 0},
        ],
    },
];
