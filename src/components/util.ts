import urlExist from "url-exist";
// @ts-ignore
import {saveAs} from "file-saver";
import {BlobReader, BlobWriter, ZipWriter} from "@zip.js/zip.js";

export function slugify(text: string): string {
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
}

export function fileSlug(filename: string): string {
    return slugify(filename).replaceAll("-", "_");
}

export function sleep(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function fontNameToCssSlug(name: string): string {
    return name.replaceAll(" ", "+")
}

export function fontNameToUrl(name: string): string {
    const fontNameSlug = fontNameToCssSlug(name);
    return `https://fonts.googleapis.com/css2?family=${fontNameSlug}&display=block`;
}

export async function fontExist(name: string): Promise<boolean> {
    return await urlExist(fontNameToUrl(name)).then(r => r)
}

export async function downloadGlyph(id: string): Promise<void> {
    await downloadCanvas(document.getElementById(id) as HTMLCanvasElement, id);
}

export async function downloadAllGlyphs(filename: string): Promise<void> {
    const canvases = document.getElementsByClassName("glyph-canvas") as HTMLCollectionOf<HTMLCanvasElement>;
    await downloadCanvases(canvases, filename);
}

export async function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
    await canvasToBlob(canvas).then((blob) => {
        if (blob !== null) {
            saveAs(blob, `${filename}.png`)
        }
    });
}


export async function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            return resolve(blob);
        });
    });
}

export async function downloadCanvases(canvases: HTMLCollectionOf<HTMLCanvasElement>, filename: string): Promise<void> {
    const zipWriter = new ZipWriter(new BlobWriter("application/zip"));
    const zipOperations = [];

    for (let i = 0; i < canvases.length; i++) {
        const id = canvases[i].getAttribute("id");
        const blob = await canvasToBlob(canvases[i]);

        if (blob != null) {
            zipOperations.push(zipWriter.add(`${id}.png`, new BlobReader(blob)));
        }
    }

    if (0 === zipOperations.length) {
        return;
    }

    await Promise.all(zipOperations);
    const zipBlob = await zipWriter.close();
    saveAs(zipBlob, `${fileSlug(filename)}.zip`);
}
