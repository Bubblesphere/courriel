Date.prototype.getFormattedString = function () {
    var month = (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1);
    var day = ((this.getDate() < 10) ? "0" : "") + this.getDate();

    var hours = ((this.getHours() < 10) ? "0" : "") + this.getHours();
    var minutes = ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
    var seconds = ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();

    return this.getFullYear() + " " + month + " " + day + " " + hours + ":" + minutes + ":" + seconds;
};


if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        var T, k;
        if (this === null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};