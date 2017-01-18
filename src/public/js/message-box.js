function MessageBox() {
    this.items = [],
        this.size = function () {
            return this.items.length;
        },
        this.addMessage = function (message) {
            console.log(users);            
            this.items.push(message);
        }
};