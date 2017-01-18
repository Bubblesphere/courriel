var routes = new RouteList({
    body: $("#template-container"),
    head: $("#head-container")
});

var users = new UserList();
var inbox = new MessageBox();
var outbox = new MessageBox();
var exceptionHandler = new ExceptionHandler();

routes.add(new Route({
    id: "new-message",
    name: "Compose",
    model: users // il va certainement devoir aussi passer outbox ici..
}));

routes.add(new Route({
    id: "user-list",
    name: "Contacts",
    model: users
}));

routes.add(new Route({
    id: "inbox",
    name: "Inbox",
    model: inbox
}));

routes.add(new Route({
    id: "outbox",
    name: "Outbox",
    model: outbox
}));

var user1 = UserFactory({
    name: "Bruno Hamel"
});
var user2 = UserFactory({
    name: "Deric Dallaire"
});
users.add(user1, user2);

outbox.addMessage({
    from: user1,
    to: user2,
    title: "Hello Sun!",
    receptionDate: new DateUtility('2016-12-12'),
    content: "Hello World!"
})


inbox.addMessage({
    from: user2,
    to: user1,
    title: "Hello Moon!",
    receptionDate: new DateUtility('2015-12-12'),
    content: "Hello World!"
})

inbox.addMessage({
    from: user2,
    to: user1,
    title: "Hello Moon!",
    receptionDate: new DateUtility('2015-12-12'),
    content: "Hello World!"
})

routes.goTo("inbox");

