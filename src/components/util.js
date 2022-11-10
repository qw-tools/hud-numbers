import urlExist from "url-exist";

export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fontNameToSlug = (name) => name.replaceAll(" ", "+");
export const fontNameToUrl = name => `https://fonts.googleapis.com/css2?family=${fontNameToSlug(name)}&display=block`;

export const fontExist = async (name) => await urlExist(fontNameToUrl(name));
