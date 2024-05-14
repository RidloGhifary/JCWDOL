// ? DATA STRUCTURE & ALGORITHM
class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length > this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(item) {
    if (this.#isFull()) {
      console.log("Stack overflow");
      return;
    }
    this.#container.push(item);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack empty");
      return;
    }

    this.#container.pop();
  }

  getItem() {
    return this.#container;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack.getItem());

class Queue {
  #container = [];

  enqueue(item) {
    this.#container.push(item);
  }

  dequeue() {
    this.#container.shift();
  }

  getItem() {
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

console.log(queue.getItem());
