export abstract class MyAbstractClass {
  abstract calculate(a: number, b: number): number;

  sum(a: number, b: number) {
    return a + b;
  }
}

class MyClass extends MyAbstractClass {
  constructor(public a: string) {
    super();
  }

  calculate(a: number, b: number): number {
    return this.sum(a, b);
  }
}

class MyClassChild extends MyClass {
  getA() {
    return this.a;
  }
}

const myObject = new MyClass("a");

myObject.a;

abstract class Node {
  view: string | undefined;

  calculate() {
    // Logic
  }

  abstract draw(): void;
}

class CircleNode extends Node {
  draw(): void {
    // Logic
  }
}
class FactoryNode extends Node {
  draw(): void {
    // Logic
  }
}
class ClientNode extends Node {
  draw(): void {
    // Logic
  }
}

function drawGraph(nodes: Node[]) {
  nodes.forEach((node) => {
    node.calculate();
    node.draw();
  });
}
