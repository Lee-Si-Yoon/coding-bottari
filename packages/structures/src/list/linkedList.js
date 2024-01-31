var ListNode = /** @class */ (function () {
  function ListNode(data, next) {
    this.data = data;
    this.next = next;
  }
  ListNode.prototype.toString = function (callback) {
    return callback !== undefined ? callback(this.data) : ''.concat(this.data);
  };
  return ListNode;
})();
var LinkedList = /** @class */ (function () {
  function LinkedList() {
    this.size = 0;
    this.head = null;
    this.size = 0;
  }
  LinkedList.prototype.insertLast = function (data) {
    var node = new ListNode(data);
    var current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (
        (current === null || current === void 0 ? void 0 : current.next) !==
        null
      ) {
        current =
          current === null || current === void 0 ? void 0 : current.next;
      }
      current.next = node;
    }
    this.size += 1;
  };
  LinkedList.prototype.insertFirst = function (data) {
    this.head = new ListNode(data, this.head);
    this.size += 1;
  };
  LinkedList.prototype.insertAt = function (data, index) {
    if (index > 0 && index > this.size) return;
    if (index === 0) {
      this.head = new ListNode(data, this.head);
      this.size += 1;
      return;
    }
    var node = new ListNode(data);
    var current, previous;
    current = this.head;
    var count = 0;
    while (count < index) {
      previous = current;
      count += 1;
      current = current === null || current === void 0 ? void 0 : current.next;
    }
    node.next = current;
    if (previous !== null && previous !== undefined) {
      previous.next = node;
    }
    this.size++;
  };
  LinkedList.prototype.getAt = function (index) {
    var current = this.head;
    var count = 0;
    while (current !== null && current !== undefined) {
      if (count === index) {
        return current;
      }
      count += 1;
      current = current.next;
    }
    return null;
  };
  LinkedList.prototype.removeAt = function (index) {
    if (index > 0 && index > this.size) return;
    var current = this.head;
    var previous;
    var count = 0;
    if (index === 0) {
      this.head =
        current === null || current === void 0 ? void 0 : current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current =
          current === null || current === void 0 ? void 0 : current.next;
      }
      if (previous !== null && previous !== undefined) {
        previous.next =
          current === null || current === void 0 ? void 0 : current.next;
      }
    }
    this.size -= 1;
  };
  LinkedList.prototype.printListData = function () {
    var current = this.head; // 현재 노드를 나타냄
    while (current !== null && current !== undefined) {
      console.log(current.data);
      current = current.next;
    }
  };
  return LinkedList;
})();
var linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 1);
linkedList.printListData();
var secondItem = linkedList.getAt(2);
console.log(secondItem);
