var users = new UserList();
var inbox = new MessageBox();
var outbox = new MessageBox();

var user1 = new User({
    name: "Bruno Hamel"
});
var user2 = new User({
    name: "Deric Dallaire"
});
users.add(user1, user2);

inbox.addMessage({
    from:user2.id,
    title: "New message",
    receptionDate: new DateUtility('2015-12-12'),
    content: "hello dude"
})

$(document).ready(function () {
    var messageHtml = $(".message-container:first").clone();
    inbox.messages.forEach(function(message){
        messageHtml.find(".title").html(message.title);
        messageHtml.find(".message").html(message.content);
        messageHtml.find(".date .fa-clock-o").html(message.receptionDate.getDaysElapsed());
        console.log(users.getById(message.from));
        messageHtml.find(".user .fa-user").html(users.getById(message.from).name);
        $(".body").append(messageHtml);
    });
    

});