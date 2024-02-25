class ListNode<T> {
  data: T;
  next: ListNode<T> | null | undefined;

  constructor(data: T, next?: ListNode<T> | null) {
    this.data = data;
    this.next = next;
  }

  toString(callback?: (value: unknown) => string): string {
    return callback !== undefined ? callback(this.data) : (this.data as string);
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null | undefined;
  size = 0;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertLast(data: T): void {
    const node = new ListNode(data);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current?.next !== null) {
        current = current?.next;
      }

      current.next = node;
    }

    this.size += 1;
  }

  insertFirst(data: T): void {
    this.head = new ListNode(data, this.head);
    this.size += 1;
  }

  insertAt(data: T, index: number): void {
    if (index > 0 && index > this.size) return;

    if (index === 0) {
      this.head = new ListNode(data, this.head);
      this.size += 1;
      return;
    }

    const node = new ListNode(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count += 1;
      current = current?.next;
    }

    node.next = current;
    if (previous !== null && previous !== undefined) {
      previous.next = node;
    }

    this.size++;
  }

  getAt(index: number): null | ListNode<T> {
    let current = this.head;
    let count = 0;

    while (current !== null && current !== undefined) {
      if (count === index) {
        return current;
      }
      count += 1;
      current = current.next;
    }

    return null;
  }

  removeAt(index: number): void {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current?.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current?.next;
      }
      if (previous !== null && previous !== undefined) {
        previous.next = current?.next;
      }
    }

    this.size -= 1;
  }

  printListData(): void {
    let current = this.head;

    while (current !== null && current !== undefined) {
      // console.log(current.data);
      current = current.next;
    }
  }
}
