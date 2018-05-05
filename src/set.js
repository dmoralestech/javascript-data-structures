
function Set() {
  var items =  {};
  
  this.has = (value) => {
    return value in items;
  }
}
