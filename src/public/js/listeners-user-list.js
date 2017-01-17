$("div.user-list-template input.edit").on("click", function() {
    console.log("Edit");
    routes.goTo("user-list");
});

$("div.user-list-template input.delete").on("click", function() {
    console.log("Delete");
    routes.goTo("user-list");
});

$("div.user-list-template input.add-edit").on("click", function() {
    console.log("Add");
    routes.goTo("user-list");
});