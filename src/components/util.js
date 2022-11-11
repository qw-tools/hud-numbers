import urlExist from "url-exist";
import { saveAs } from "file-saver";

export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fontNameToSlug = (name) => name.replaceAll(" ", "+");
export const fontNameToUrl = (name) => {
  const fontNameSlug = fontNameToSlug(name);
  return `https://fonts.googleapis.com/css2?family=${fontNameSlug}&display=block`;
};

export const fontExist = async (name) => await urlExist(fontNameToUrl(name));

export const downloadGlyph = (id) => downloadCanvas(id, `${id}.png`);

export const downloadCanvas = async (id, filename) =>
  await canvasToBlob(id).then((blob) => saveAs(blob, filename));

export const canvasToBlob = async (id) => {
  return new Promise((resolve) => {
    document.getElementById(id).toBlob((blob) => {
      return resolve(blob);
    });
  });
};
