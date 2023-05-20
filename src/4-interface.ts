interface Owner {
  name: string;
}

interface Animal {
  weight: number;
  readonly color: string;
}

interface Pet {
  owner?: Owner;
}

interface Dog extends Animal, Pet {
  name?: string;
}

export interface Cat extends Animal, Pet {
  jump(): void;
}

const men: Owner = {
  name: "Artem",
};

export const frenchBulldog: Dog = {
  weight: 12,
  color: "fawn",
  name: "Richard",
  owner: men,
};

export const corgi: Dog = {
  weight: 9,
  color: "golden",
};
