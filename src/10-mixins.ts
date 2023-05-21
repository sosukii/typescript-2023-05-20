class Animal {
  feed() {
    // Logic
  }
}

class Movable {
  move() {
    // Logic
  }
}

class Horse {}
interface Horse extends Animal, Movable {}

type Constructor = new (...args: any[]) => {};

function applyMixins(child: Constructor, parents: Constructor[]) {
  parents.forEach((parent) => {
    Object.getOwnPropertyNames(parent.prototype).forEach((name) => {
      child.prototype[name] = parent.prototype[name];
    });
  });
}

applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();
horse.feed();
horse.move();
