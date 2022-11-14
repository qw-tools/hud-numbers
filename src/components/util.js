import urlExist from "url-exist";
import { saveAs } from "file-saver";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { store } from "./HudNumbers/store.js";

export const slugify = (text) => {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/_/g, "-") // Replace _ with -
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/-$/g, ""); // Remove trailing -
};

export const fileSlug = (filename) => slugify(filename).replaceAll("-", "_");

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
  downloadCanvas(document.getElementById(id), id);

export const downloadAllGlyphs = async () => {
  const canvases = document.getElementsByClassName("glyph-canvas");
  console.log(canvases);
  await downloadCanvases(canvases, `qwnum_${store.glyphs.fontFamily}`);
};

export const downloadCanvas = async (id, filename) =>
  await canvasToBlob(id).then((blob) => saveAs(blob, `${filename}.png`));

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
  saveAs(zipBlob, `${fileSlug(filename)}.zip`);
};
