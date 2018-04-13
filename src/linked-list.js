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
  };

  this.remove = (value) => {
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
  };

  this.size = () => {
    return length;
  };

  this.toString = () => {
  };

  this.print = () => {
    "use strict";
    var current = head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  };
}

var linkedList = new LinkedList();

linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
linkedList.append("e");
linkedList.insert("0", 1);
linkedList.print();

console.log(linkedList.indexOf("b"));
console.log(linkedList.indexOf("a"));