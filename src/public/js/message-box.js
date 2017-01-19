function MessageBox() {
    this.items = [],
        this.size = function () {
            return this.items.length;
        },
        this.addMessage = function (message) {            
            this.items.push(message);
        }
};