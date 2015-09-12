
Array.prototype.find = function (predicateFn) {
  for (var i = 0; i < this.length; i++) {
    if ( predicateFn(this[i]) ) return this[i]
  }
  return null
}
