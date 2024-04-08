class Node<T> {
  public value: T;
  public previous: Node<T> | undefined;
  public next: Node<T> | undefined;

  constructor(value: T, previous?: Node<T>, next?: Node<T>) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

interface DoublyLinkedListInterface<T> {
  size: number;
  get: (index: number) => T | undefined;
  print: VoidFunction;

  insert: (index: number, value: T) => void;
  append: (value: T) => void;
  remove: (index: number) => void;
}

export class DoublyLinkedList<T> implements DoublyLinkedListInterface<T> {
  constructor(
    private head: Node<T> | undefined = undefined,
    private _size = 0,
  ) {}

  public get size(): number {
    return this._size;
  }

  private getNodeAtIndex(index: number): Node<T> | undefined {
    if (index < 0 || index >= this._size) {
      return;
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current?.next;
      count += 1;
    }

    return current;
  }

  // O(n)
  get: (index: number) => T | undefined = (index: number) => {
    const node = this.getNodeAtIndex(index);
    if (node) return node.value;
  };

  // O(n)
  print: VoidFunction = () => {
    let current = this.head;
    let output = '';

    while (current) {
      output += String(current.value);
      current = current.next;
      if (current) {
        output += '>';
      }
    }

    // eslint-disable-next-line no-console --- print function
    console.log(output);
  };

  // O(n)
  insert(index: number, value: T): void {
    if (index < 0 || index >= this._size || !this.head) return;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this._size++;
    } else {
      const currentNode = this.getNodeAtIndex(index - 1);
      if (!currentNode) return;

      newNode.next = currentNode.next;
      if (currentNode.next) {
        currentNode.next.previous = newNode;
      }

      currentNode.next = newNode;
      newNode.previous = currentNode;
    }

    this._size += 1;
  }

  // O(n)
  append(value: T): void {
    const newNode = new Node(value);

    if (this._size === 0 && !this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getNodeAtIndex(this._size - 1);
      if (lastNode) {
        lastNode.next = newNode;
        newNode.previous = lastNode;
      }
    }

    this._size += 1;
  }

  // O(n)
  remove(index: number): void {
    if (index < 0 || index >= this._size || !this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      delete this.head?.previous;
    } else {
      const currentNode = this.getNodeAtIndex(index);
      if (!currentNode) return;

      currentNode.next = currentNode.next?.next;
      if (currentNode.next) {
        currentNode.next.previous = currentNode;
      }
    }
  }
}
