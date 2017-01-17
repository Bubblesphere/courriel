$(".head .row h2.user-list-link").on("click", function() {
    routes.goTo("user-list");
});

$(".head .row h2.new-message-link").on("click", function() {
    routes.goTo("new-message");
});

$(".head .row h2.outbox-link").on("click", function() {
    routes.goTo("outbox");
});

$(".head .row h2.inbox-link").on("click", function() {
    routes.goTo("inbox");
});