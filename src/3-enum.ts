// export const enum Size {
//   s = "s",
//   m = "m",
//   l = "l",
// }

export const SizeConst = {
  s: "s",
  m: "m",
  l: "l",
} as const;

export type Size = "s" | "m" | "l";
// export type Size = keyof typeof SizeConst;

console.log(typeof SizeConst);

function calculateSize(size: Size) {}

calculateSize(SizeConst.l);
