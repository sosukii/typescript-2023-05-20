// Boolean
export let isTrue: boolean = true;

// Number
let num: number = 123;
let float: number = 12.3;
let binary: number = 0b101;

// BigInt
let bigNum: bigint = 100n;

// String
let str: string = "Hello";
str = "123";

// Null
let nullLet: null = null;

// Undefined
let undefinedLet: undefined = undefined;

// Any
let anyLet: any = 123;

// Unknown
let unknownLet: unknown = { a: 123 };

// Object
let objectLet: { a: number; b: string } = { a: 123, b: "Hello" };

// Array
let arrayLet: string[] = ["123", "123", "Hello"];

// Tuple
let tupleLet: [string, number, boolean] = ["", 123, true];

// Function
let functionLet: (a: number) => string;

function useState(initialState: string): [string, (value: string) => void] {
  let state: string = initialState;
  const setState: (value: string) => void = () => {};
  // ...
  return [state, setState];
}

function testFunction(a: string): void {
  console.log("123");
}

const functionConst = (initialState: string = "Hello"): void => {};

// Literal
let fontWeight: 500 | 600 | 700 | "bold" = 600;
let position: "absolute" = "absolute";
let size: "s" | "m" | "l" = "m";

let intersectionLet: string & number;

function test(a: { a: string; c: boolean } | { b: number; c: string }) {
  return a.c;
}

function functionWithIntersection(a: { a: string } & { b: number }) {
  return a;
}

test({ a: "", c: true });
functionWithIntersection({ a: "", b: 123 });
