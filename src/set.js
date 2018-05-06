function Set() {
  let items = {};

  this.has = value => {
    return items.hasOwnProperty(value);
  };

  this.append = value => {
    if (this.has(value)) {
      return false;
    }
    items[value] = value;
    return true;
  };

  this.remove = value => {
    if (!this.has(value)) {
      return false;
    }

    delete items[value];
    return true;
  };

  this.clear = () => {
    items = {};
  };

  this.size = () => {
    return Object.keys(items).length;
  };

  this.values = () => {
    return Object.keys(items);
  };

  this.union = anotherSet => {
    let resultSet = new Set();

    Object.keys(items).forEach(item => {
      resultSet.add(item);
    });
    Object.keys(anotherSet).forEach(item => {
      resultSet.add(item);
    });

    return resultSet;
  };

  this.intersection = anotherSet => {
    "use strict";

    let resultSet = new Set();

    Object.keys(items).forEach( item => {
      if (anotherSet.has(item)) {
        resultSet.append(item);
      }
    });

    return resultSet;

  }
}
