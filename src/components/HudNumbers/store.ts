import {reactive} from "vue";
import {defaultFontNames, gradientStyles} from "./config";

interface EditorState {
    fontNames: string[],
    fontsLoaded: boolean,
    drawCrosshair: boolean,
    glyphs: {
        fontFamily: string,
        fontSize: string,
        gradientStops: any[],
        shadowSize: number,
        shadowColor: string,
        size: number,
        offsetX: number,
        offsetY: number,
    },
    centerHelperColor: string,
    previewBgColor: string,
    numColors: { top: string, bottom: string },
    anumColors: { top: string, bottom: string },
}

export function getDefaultState(): EditorState {
    return {
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
        numColors: {top: "#ffffff", bottom: "#aaaaaa"},
        anumColors: {top: "#ff0000", bottom: "#aa0000"},
    }
}

export function resetSettings(): void {
    const preservedData = {
        fontsLoaded: store.fontsLoaded,
        fontNames: store.fontNames,
    };

    Object.assign(store, getDefaultState(), preservedData);
};

export const store = reactive(getDefaultState());
