
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
  
  this.remove = (value) => {
    if (!this.has(value)) {
      return false;
    } 
    
    delete items[value];
    return true;
  }
  
  this.clear = () => {
    items = {};
  }
}
