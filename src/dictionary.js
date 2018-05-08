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

  this.get = (key) => {
    this.has(key) ? item[key] : null;
  }

  this.values = () => {
    let values = [];
    for (let k in items){
      if (this.has(k)){
        values.push(items[k]);
      }
    }
    return values;
  }
}