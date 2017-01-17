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
    from: user2.id,
    title: "New message",
    receptionDate: new DateUtility('2015-12-12'),
    content: "hello dude"
})

var source   = $("#new-message-template").html();
var template = Handlebars.compile(source);
var html    = template(users);
$("div.app > div.body").html(html);
