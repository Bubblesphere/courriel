$("div.new-message-template input.cancel").on("click", function() {    
    routes.goTo("inbox");
});

$("div.new-message-template input.send").on("click", function() {
    var recipientUserId = $(".user-list").val();
    var recipient = users.getById(recipientUserId);
    var title = $(".title").val();
    var content = $(".message").val();

    console.log(recipient);

    var messageInfo = {
        to:recipient,
        from:recipient,
        title:title,
        receptionDate:new Date(),
        content:content
    };
    var message = MessageFactory(messageInfo);

    console.log(message)    
    routes.goTo("new-message");
});