export type Record = {
  [key: string]: string;
};

const record: Record = {
  a: "",
  b: "",
  c: "",
  d: "",
};

interface Dog {
  weight: number;
  color: string;
  name?: string;
}

type PartialDog = {
  [Property in keyof Dog]?: Dog[Property];
};
type RequiredDog = {
  [Property in keyof Dog]-?: Dog[Property];
};
type ReadOnlyDog = {
  readonly [Property in keyof Dog]: Dog[Property];
};
type NotReadOnlyDog = {
  -readonly [Property in keyof Dog]: Dog[Property];
};

// {
//   weight?: number;
//   color?: string;
// }

["a", "b", "c"].map((value) => value + "s"); // ['as', 'bs', 'cs']

type EntitySetters<Entity> = {
  [Property in keyof Entity as `set${Capitalize<Property & string>}`]: (
    value: Entity[Property]
  ) => void;
};

type EntityGetters<Entity> = {
  [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]: () => Entity[Property];
};

type CompleteEntity<Entity> = Entity &
  EntityGetters<Entity> &
  EntitySetters<Entity>;

interface Cat {
  color: string;
  name: string;
  volume: number;
}

class MyDog implements CompleteEntity<Dog> {
  weight: number;
  color: string;
  name?: string | undefined;
  getWeight: () => number;
  getColor: () => string;
  getName?: (() => string | undefined) | undefined;
  setWeight: (value: number) => void;
  setColor: (value: string) => void;
  setName?: ((value: string | undefined) => void) | undefined;
}

class MyCat implements CompleteEntity<Cat> {
  color: string;
  name: string;
  volume: number;
  getColor: () => string;
  getName: () => string;
  getVolume: () => number;
  setColor: (value: string) => void;
  setName: (value: string) => void;
  setVolume: (value: number) => void;
}

function rerender() {}

type FormStage = "view" | "edit" | "delete" | "someOther2";

type FormStageSwitchers = {
  [Stage in FormStage as `switchTo${Capitalize<Stage>}Stage`]: () => void;
};

function useStage(
  defaultStage: FormStage
): { currentStage: FormStage } & FormStageSwitchers {
  let currentStage = defaultStage;
  const setStage = (newStage: FormStage) => {
    currentStage = newStage;
    rerender();
  };

  return {
    currentStage,
    switchToEditStage: () => {},
    switchToViewStage: () => {
      if (currentStage === "edit") {
        setStage("view");
      }
    },
    switchToDeleteStage: () => {},
    switchToSomeOther2Stage: () => {},
  };
}

const {
  currentStage,
  switchToEditStage,
  switchToDeleteStage,
  switchToViewStage,
} = useStage("someOther2");
