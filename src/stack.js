"use strict";

function Stack(){
 this.memory = [];

 this.push = (value) => {
   this.memory.push(value);
 }

 this.pop = () => {
   if (this.memory.length === 0) {
     return undefined;
   }
   return this.memory.pop();
  }

  this.peek = () => {
    if (this.memory.length === 0) {
      return undefined;
    }
    return this.memory[this.memory.length - 1];
  }

  this.size = () => {
    return this.memory.length;
  }
}