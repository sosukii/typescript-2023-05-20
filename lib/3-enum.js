// export const enum Size {
//   s = "s",
//   m = "m",
//   l = "l",
// }
export const SizeConst = {
    s: "s",
    m: "m",
    l: "l",
};
// export type Size = keyof typeof SizeConst;
console.log(typeof SizeConst);
function calculateSize(size) { }
calculateSize(SizeConst.l);
