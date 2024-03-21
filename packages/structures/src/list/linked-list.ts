interface Node<T> {
  value: T;
  next?: Node<T>;
}

interface LinkedListInterface<T> {
  size: number;
  get: (index: number) => T | undefined;
  print: VoidFunction;

  insert: (index: number, value: T) => void;
  insertFront: (value: T) => void;
  insertBack: (value: T) => void;

  remove: (index: number) => void;
  removeFront: VoidFunction;
  removeBack: VoidFunction;
}

export class LinkedList<T> implements LinkedListInterface<T> {
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

  // O(1)
  insertFront(value: T): void {
    this.head = { value, next: this.head };
    this._size += 1;
  }

  // O(n)
  insert(index: number, value: T): void {
    if (index < 0 || index >= this._size) return;

    if (index === 0) {
      this.insertFront(value);
      return;
    }

    const prevNode = this.getNodeAtIndex(index - 1);
    if (prevNode) {
      prevNode.next = { value, next: prevNode.next };
      this._size++;
    }
  }

  // O(n)
  insertBack(value: T): void {
    if (this._size === 0) {
      this.insertFront(value);
      return;
    }

    const lastNode = this.getNodeAtIndex(this._size - 1);
    if (lastNode) {
      lastNode.next = { value };
      this._size += 1;
    }
  }

  // O(n)
  removeBack(): void {
    if (this._size === 0) {
      return;
    }

    const prevToLastNode = this.getNodeAtIndex(this._size - 2);
    if (prevToLastNode) {
      prevToLastNode.next = prevToLastNode.next?.next;
      this._size -= 1;
    }
  }

  // O(1)
  removeFront(): void {
    if (this._size === 0) {
      return;
    }

    this.head = this.head?.next;
    this._size -= 1;
  }

  // O(n)
  remove: (index: number) => void = (index: number) => {
    if (this._size === 0) {
      return;
    }

    if (index === 0) {
      this.removeFront();
      return;
    }

    const prevNode = this.getNodeAtIndex(index - 1);
    if (prevNode?.next) {
      prevNode.next = prevNode.next.next;
    }
    this._size -= 1;
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
}
