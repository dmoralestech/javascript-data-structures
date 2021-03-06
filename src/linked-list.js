function LinkedList() {
  var Node = function (value) {
    this.value = value;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = (value) => {
    var node = new Node(value);
    if (head === null) {
      head = node;
    } else {
      var current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = (value, index) => {
    var current = head;
    var node = new Node(value);
    var currentPosition = 0;

    if (index === 0) {
      node.next = current;
      head = node;
    } else {
      var previous;

      for (var i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    length++;

    return true;
  };

  this.removeAt = (index) => {
    "use strict";

    var current = head;
    var previous = head;

    if (index === 0) {
      head = current.next;
    } else {
      for (var i = 0; i <= index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.value;
  };

  this.remove = (value) => {
    "use strict";

    var current = head;
    var previous = head;

    for (var i = 0; i < length; i++) {
      if (current.value == value) {
        if (i === 0) {
          head = current.next
        } else {
          previous.next = current.next;
        }
        length--;
        return value;
      } else {
        previous = current;
        current = current.next;
      }
    }

    return null;
  };

  this.indexOf = (value) => {
    var current = head;

    for (var i = 0; i < length; i++) {
      if (current.value === value) {
        return i;
      } else {
        current = current.next;
      }
    }

    return -1;

  };

  this.isEmpty = () => {
    "use strict";
    return length === 0;
  };

  this.size = () => {
    return length;
  };

  this.toString = () => {
    "use strict";

    var current = head;
    var result = "";

    while (current) {
      result += current.value + ",";
      current = current.next;
    }

    return result;
  };

  this.print = () => {
    "use strict";

    if (length === 0) {
      return;
    }

    var current = head;
    for (var i = 0; i < length; i++) {
      console.log(current.value);
      current = current.next;
    }
  };

  this.head = () => {
    return head;
  }
}

// function assert(condition, message) {
//   if (!condition) {
//     throw message || "Assertion failed";
//   }
// }

var linkedList = new LinkedList();

linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
linkedList.append("e");
linkedList.append("f");
linkedList.append("g");

// linkedList.print();
// linkedList.insert("0", 1);
// console.log("size", linkedList.size());
// linkedList.print();
// linkedList.remove("0");
linkedList.remove("a");
linkedList.remove("c");
console.log("size", linkedList.size());
console.assert(linkedList.size() === 5);
linkedList.print();

console.log(linkedList.toString());

// console.log(linkedList.indexOf("b"));
// console.log(linkedList.indexOf("a"));

// console.log(linkedList);
