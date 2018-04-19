
function DoubleLinkedList() {
  "use strict";
  
  var head = null;
  var tail = null;
  var length = 0;
  
  var Node = function(value) {
    this.previous = null;
    this.next = null;
    this.value = null;
  }
  
  this.append = (value) => {
    var node = new Node(value);   
    if (head === null) {
      head = node;
      tail = node;
    } else {
      var current = head;
      var previous = head;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      node.previous = previous; 
      current.next = node;
      tail = current;
    }
    length++;
  }
  
  this.insert = (value, index) => {
    var node = new Node(value);   
    if (index === 0) {
      head = node;
      tail = node;
    } else {
      var current = head;
      var previous = head;
      var i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      node.previous = previous; 
      current.next = node;
      tail = current;
    }
    length++;    
  }
  
  this.removeAt = (index) => {
  }
  
  this.remove = (value) => {
  }
  
  this.indexOf = (value) => {
  }
  
  this.isEmpty = () => {}
  
  this.size = () => {}
  
  this.toString = () => {}
  
  this.print = () => {}
  
  this.head = () => {}
 
}
