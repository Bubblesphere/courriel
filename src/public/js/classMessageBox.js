function MessageBox() {
    this.messages = [],
        this.size = function () {
            return this.messages.length;
        },
        this.addMessage = function (message) {
            this.messages.push(message);
        }
};