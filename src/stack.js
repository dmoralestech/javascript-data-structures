"use strict";

function Stack(){
 this.memory = [];
 this.count = 0;

 this.push = (value) => {
   this.memory.push(value);
   this.count++;
 }

 this.pop = () => {
   if (this.count === 0) {
     return undefined;
   }
   this.count--;
   let value = this.memory[this.count];
   delete this.memory[this.count];
   return value;
  }

  this.peek = () => {
    if (this.count === 0) {
      return undefined;
    }
    return this.memory[this.count - 1];
  }

  this.size = () => {
    return this.count;
  }
}