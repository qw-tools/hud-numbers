import {saveAs} from "file-saver";
import {BlobReader, BlobWriter, ZipWriter} from "@zip.js/zip.js";
import {fileSlug} from "./file";

export async function downloadGlyph(id: string): Promise<void> {
    await downloadCanvas(document.getElementById(id) as HTMLCanvasElement, id);
}

export async function downloadAllGlyphs(filename: string): Promise<void> {
    const canvases = document.getElementsByClassName("glyph-canvas") as HTMLCollectionOf<HTMLCanvasElement>;
    await downloadCanvases(canvases, filename);
}

async function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
    await canvasToBlob(canvas).then((blob) => {
        if (blob !== null) {
            saveAs(blob, `${filename}.png`)
        }
    });
}


async function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            return resolve(blob);
        });
    });
}

async function downloadCanvases(canvases: HTMLCollectionOf<HTMLCanvasElement>, filename: string): Promise<void> {
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
