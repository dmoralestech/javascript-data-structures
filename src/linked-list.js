
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
  this.indexOf = (value) => {
    var current = head;
    
    for (var i = 0; i < lenght; i++) {
      if (current === value) {
        return i;
      } else {
        current = current.next;
      }
    }
    
    return -1;

  };
    
  this.isEmpty = () => {};
  this.size = () => {
    return length;
  };
  this.toString = () => {};
  this.print= () => {};
}
