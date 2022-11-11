import urlExist from "url-exist";
import { saveAs } from "file-saver";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";

export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fontNameToCssSlug = (name) => name.replaceAll(" ", "+");
export const fontNameToUrl = (name) => {
  const fontNameSlug = fontNameToCssSlug(name);
  return `https://fonts.googleapis.com/css2?family=${fontNameSlug}&display=block`;
};

export const fontExist = async (name) => await urlExist(fontNameToUrl(name));

export const downloadGlyph = (id) =>
  downloadCanvas(document.getElementById(id), `${id}.png`);

export const downloadCanvas = async (id, filename) =>
  await canvasToBlob(id).then((blob) => saveAs(blob, filename));

export const canvasToBlob = async (canvas) => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      return resolve(blob);
    });
  });
};

export const downloadCanvases = async (canvases, filename) => {
  const zipWriter = new ZipWriter(new BlobWriter("application/zip"));
  const zipOperations = [];

  for (let i = 0; i < canvases.length; i++) {
    const id = canvases[i].getAttribute("id");
    const blob = await canvasToBlob(canvases[i]);
    zipOperations.push(zipWriter.add(`${id}.png`, new BlobReader(blob)));
  }

  await Promise.all(zipOperations);
  const zipBlob = await zipWriter.close();
  saveAs(zipBlob, `${filename}.zip`);
};
