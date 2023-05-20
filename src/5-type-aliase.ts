type Animal = {
  weight: number;
  color: string;
};

export type Dog = {
  name: string;
} & Animal;

type Cat = {
  jump(): void;
} & Animal;

interface Owner {}

type Size = "s" | "m" | "l";

export const frenchBulldog: Dog = {
  weight: 12,
  color: "fawn",
  name: "Richard",
};

interface Test {
  id: number;
  isDelete: boolean;
}
