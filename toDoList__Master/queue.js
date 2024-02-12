class Queue {
  #list = [];
  #firstItem = null;
  #lastItem = null;
  #maxSize = 9;

  constructor(max = 9) {
    this.#maxSize = max;
  }

  size() {
    return this.#list.length;
  }

  enqueue(item) {
    if (this.isFull()) throw new Error("the list is full ...");
    if (this.isEmpty()) {
      this.#firstItem = item;
    }

    this.#list.push(item);
    this.#lastItem = item;
  }

  dequeue() {
    let itemDeleted = this.#list.shift();
    this.#firstItem = this.#list[0];

    return itemDeleted;
  }

  isFull() {
    return this.#list.length === this.#maxSize;
  }
  isEmpty() {
    return this.#list.length === 0;
  }
  peek() {
    return this.#firstItem;
  }
  tail() {
    return this.#lastItem;
  }
  log() {
    return this.#list;
  }
}

export default Queue;
