
function LinkedList() {
  var Node = (value) => {
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
  this.insert = (value, index) => {};
  this.removeAt = (index) => {};
  this.remove = (value) => {};
  this.indexOf = (value) => {};
  this.isEmpty = () => {};
  this.size = () => {};
  this.toString = () => {};
  this.print= () => {};
}
