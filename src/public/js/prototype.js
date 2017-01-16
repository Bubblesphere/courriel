Date.prototype.getFormattedString = function () {
    var month = (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1);
    var day = ((this.getDate() < 10) ? "0" : "") + this.getDate();

    var hours = ((this.getHours() < 10) ? "0" : "") + this.getHours();
    var minutes = ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
    var seconds = ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();

    return this.getFullYear() + " " + month + " " + day + " " + hours + ":" + minutes + ":" + seconds;
};