$("div.new-message-template input.cancel").on("click", function() {
    console.log("Cancel");
    routes.goTo("new-message");
});

$("div.new-message-template input.send").on("click", function() {

    console.log(this);
    routes.goTo("new-message");
});