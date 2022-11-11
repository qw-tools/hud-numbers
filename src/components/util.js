import urlExist from "url-exist";
import { saveAs } from "file-saver";

export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fontNameToSlug = (name) => name.replaceAll(" ", "+");
export const fontNameToUrl = name => `https://fonts.googleapis.com/css2?family=${fontNameToSlug(name)}&display=block`;

export const fontExist = async (name) => await urlExist(fontNameToUrl(name));

export const downloadGlyph = (id) => downloadCanvas(id, `${id}.png`);

export const downloadCanvas = (id, filename) => {
  const canvas = document.getElementById(id);
  canvas.toBlob((blob) => saveAs(blob, filename));
};
