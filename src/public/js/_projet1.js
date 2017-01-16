Date.prototype.getFormattedString = function() {
    var month = (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1);
    var day = ((this.getDate() < 10) ? "0" : "") + this.getDate();

    var hours = ((this.getHours() < 10) ? "0" : "") + this.getHours();
    var minutes = ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
    var seconds = ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();

    return this.getFullYear() + " " + month + " " + day + " " + hours + ":" + minutes + ":" + seconds;
};

function User (user) {
    this.objectType = "user",
    this.id = user.id,
    this.name = user.name
}

function Message (message) {
    this.objectType = "message",
    this.from = message.from,
    this.recipient = message.recipient,
    this.receptionDate = new DateUtility(message.receptionDate),
    this.content = message.content
}

function DateUtility(date) {
    this.objectType = "date",
    this.date = new Date(date),
    this.formattedDate = this.date.getFormattedString(),
    this.getDaysSinceReception = function() {
        todaysDate = new Date();
        return this.convertMilisecondsToDays(todaysDate - this.date);
    },
    this.convertMilisecondsToDays = function(miliseconds) {
        var oneDay = 1000 * 60 * 60 * 24;
        return Math.round(miliseconds / oneDay);
    }
}

function MessageBox() {
    this.messages = [],
    this.size = function() {
        return this.messages.length;
    },
    this.addMessage = function(message) {
        this.messages.push(message);
    }
};

function UserList() {
    this.users = [],
    this.size = function() {
        return this.users.length;
    },
    this.addUser = function(user) {
        this.users.push(user);
    },
    this.getUserById = function(id) {
        for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].id == id) {
                return this.users[i];
            }
        }
        return null;
    }
    // modify
    // delete
};


// Calls
var users = new UserList();

users.addUser(new User({
    id: "1",
    name: "Deric"
}));

users.addUser(new User({
    id: "2",
    name: "Bruno"
}));

console.log(users);


var messageBox = new MessageBox();

messageBox.addMessage(new Message({
    from: users.getUserById("1"),
    recipient: users.getUserById("2"),
    receptionDate: "2017-01-01",
    content: "Hi Bruno"
}));

messageBox.addMessage(new Message({
    from: users.getUserById("2"),
    recipient: users.getUserById("1"),
    receptionDate: "2017-01-02",
    content: "Hi Dericaaaaaa"
}));

console.log(messageBox);
console.log(messageBox.messages[0].receptionDate.getDaysSinceReception());