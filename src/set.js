
function Set() {
  var items =  {};
  
  this.has = (value) => {
    return items.hasOwnProperty(value);
  }
  
  this.append = (value) => {
    if (this.has(value)) {
      return false;
    }
    items[value] = value;
    return true;
  }
}
