
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
  this.insert = (value, index) => {
    var current = head;
    var node = new Node(value);
    var currentPosition = 0;
    
    if (index === 0) {
      node.next = current;
      head = node;
    } else {
      var previous;
      
      for (var i = 0; i <= index; i++ ) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node; 
    }
    length++;
    
    return true;
  };
  
  this.removeAt = (index) => {};
  this.remove = (value) => {};
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
    
  this.isEmpty = () => {};
  this.size = () => {
    return length;
  };
  this.toString = () => {};
  this.print= () => {};
}
