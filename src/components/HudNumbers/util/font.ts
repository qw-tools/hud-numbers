import urlExist from "url-exist";

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
