export class Animal {
  feed() {
    // Logic
  }
}

class Horse extends Animal {}

type Constructor = new (...args: any[]) => {};

function Movable<BaseClass extends Constructor>(Base: BaseClass) {
  return class BaseMovable extends Base {
    move() {
      // logic
    }
  };
}

const MovableHorse = Movable(Horse);

const movableHorse = new MovableHorse();

movableHorse.feed();
movableHorse.move();
