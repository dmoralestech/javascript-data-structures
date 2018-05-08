function Dictionary() {
  "use strict";
  let items = {};

  this.has = value => {
    return items.hasOwnProperty(value);
  };

  this.set = (key, value) => {
    items[key] = valiue;
  };

  this.remove = (key) => {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  }


}