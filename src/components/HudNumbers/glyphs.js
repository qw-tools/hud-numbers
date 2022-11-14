const numberGlyphs = [...Array(10).keys()].map((n) => ({
  char: n.toString(),
  name: n.toString(),
}));
const specialGlyphs = [
  { char: ":", name: "colon" },
  { char: "-", name: "minus" },
  // { char: "/", name: "slash", type: "nonNumber" }, OBSOLETE?
];
const allGlyphs = numberGlyphs.concat(specialGlyphs); //.slice(0,3);

export const nums = allGlyphs.map((g) => ({
  ...g,
  ...{ filename: `num_${g.name}` },
}));
export const anums = allGlyphs.map((g) => ({
  ...g,
  ...{ filename: `anum_${g.name}` },
}));

export default {
  nums,
  anums,
};
