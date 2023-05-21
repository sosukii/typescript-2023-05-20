export let example = "";

function calculate(a: number | string, b: number) {
  if (typeof a === "string") {
    return a;
  }

  if (a !== b) {
    return;
  }

  return a + b;
}

function getProperty<Entity, Property extends keyof Entity>(
  entity: Entity,
  propertyKey: Property
): Entity[Property] {
  return entity[propertyKey];
}

getProperty({ a: "", b: 123 }, "b");

function call<Arguments extends any[], Return>(
  myFunction: (...args: Arguments) => Return,
  ...args: Arguments
): Return {
  return myFunction(...args);
}

call(calculate, 23, 12);

type ReturnType<Function extends (...args: any) => any> = Function extends (
  ...args: any
) => infer ReturnType
  ? ReturnType
  : never;

type ParamsType<Function extends (...args: any) => any> = Function extends (
  ...args: infer Params
) => any
  ? Params
  : never;

type GetComponentProps<FunctionComponent extends (args: any) => any> =
  FunctionComponent extends (args: infer Props) => any ? Props : never;

type ArrayElement<ArrayType extends any[]> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;

const myArray = [{ a: "", b: 123, c: { d: ["123"] } }];

type NewArrayElement = ArrayElement<typeof myArray>;

// Omit<GetComponentProps<typeof Button>, 'className'>
