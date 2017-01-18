$("div.user-list-template input.edit").on("click", function () {
    console.log("Edit");
    routes.goTo("user-list");
});

$("div.user-list-template input.delete").on("click", function () {
    console.log("Delete");
    routes.goTo("user-list");
});

$("div.user-list-template input.add-edit").on("click", function () {
    var userName = $(".user-list-template .name").val()
    var newUser = new User({
        name: userName
    });
    users.add(newUser);
    routes.goTo("user-list");
});