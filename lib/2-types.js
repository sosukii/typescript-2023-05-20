// Boolean
export let isTrue = true;
// Number
let num = 123;
let float = 12.3;
let binary = 0b101;
// BigInt
let bigNum = 100n;
// String
let str = "Hello";
str = "123";
// Null
let nullLet = null;
// Undefined
let undefinedLet = undefined;
// Any
let anyLet = 123;
// Unknown
let unknownLet = { a: 123 };
// Object
let objectLet = { a: 123, b: "Hello" };
// Array
let arrayLet = ["123", "123", "Hello"];
// Tuple
let tupleLet = ["", 123, true];
// Function
let functionLet;
function useState(initialState) {
    let state = initialState;
    const setState = () => { };
    // ...
    return [state, setState];
}
function testFunction(a) {
    console.log("123");
}
const functionConst = (initialState = "Hello") => { };
// Literal
let fontWeight = 600;
let position = "absolute";
let size = "m";
let intersectionLet;
function test(a) {
    return a.c;
}
function functionWithIntersection(a) {
    return a;
}
test({ a: "", c: true });
functionWithIntersection({ a: "", b: 123 });
