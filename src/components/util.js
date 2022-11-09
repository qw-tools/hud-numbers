export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const fontNameToSlug = (name) => name.replaceAll(" ", "+");
