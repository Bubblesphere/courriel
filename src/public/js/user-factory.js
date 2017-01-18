function UserFactory(user) {
    if (typeof user == "undefined") {
        exceptionHandler.add(new Error({
            isError: true,
            text: "No argument was supplied."
        }))
    }

    if (user.name == "") {
        var exception = new Exception({
            isError: true,
            text: "This user has no name"
        });
        exceptionHandler.add(exception);
    }

    if (exceptionHandler.list.length === 0)
        return new User(user);
    else
        exceptionHandler.log();

}