function MessageFactory(message) {
    if (typeof message == "undefined") {
        exceptionHandler.add(new Error({
            isError: true,
            text: "No argument was supplied."
        }))
    }

    validateFrom(message.from);
    validateTo(message.to);
    validateTitle(message.title);
    validateContent(message.content);
    validateDate(message.receptionDate);

    if (exceptionHandler.list.length === 0)
        return new Message(message);
    else
        exceptionHandler.log();

    function validateFrom(user) {
        if (typeof user == "undefined") {
            var exception = new Exception({
                isError: true,
                text: "The sender that is supplied is not an object"
            });
            exceptionHandler.add(exception);
        }

        if (typeof user.objectType != "user") {
            var exception = new Exception({
                isError: true,
                text: "The sender that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }

    }

    function validateTo(user) {
        if (typeof user == "undefined") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not an object"
            });
            exceptionHandler.add(exception);
        }

        if (typeof user.objectType != "user") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }
    }

    function validateTitle(title) {
        if (typeof title == "undefined") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }

        if (title == "") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }
    }

    function validateContent(content) {
        if (typeof content == "undefined") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }

        if (content == "") {
            var exception = new Exception({
                isError: true,
                text: "The recipient that is supplied is not a user object"
            });
            exceptionHandler.add(exception);
        }
    }

    function validateDate(date) {
        if (typeof message.receptionDate != "Date") {
            exceptionHandler.add(new Error({
                isError: true,
                text: "The date is not of Date type."
            }))
        }
    }

}