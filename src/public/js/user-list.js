function UserList() {
    this.items = [],
        this.size = function () {
            return this.items.length;
        },
        this.add = function () {
            arguments = Array.from(arguments);
            var classScope = this;
            var exceptionHandler = new ExceptionHandler();

            arguments.forEach(function (user) {

                if (typeof user == "undefined") {
                    var exception = new Exception({
                        type: 1,
                        text: "No user object was supplied"
                    });
                    exceptionHandler.add(exception);
                }
                if (user.name == "") {
                    var exception = new Exception({
                        type: 1,
                        text: "This user has no name"
                    });
                    exceptionHandler.add(exception);
                }
                if (typeof user != "object") {
                    var exception = new Exception({
                        type: 1,
                        text: "The argument supplied is not an object"
                    });
                    exceptionHandler.add(exception);
                }
                if (classScope.existsByName(user.name)) {
                    var exception = new Exception({
                        type: 1,
                        text: "A user with the name " + user.name + " exists already in the list of users."
                    });
                    exceptionHandler.add(exception);
                }             

                if (exceptionHandler.list.length == 0) 
                    classScope.items.push(user);
                
            });
            exceptionHandler.log();
        },
        this.existsByName = function (name) {
            var existingUser = this.getByName(name);
            return !!existingUser;
        },
        this.existsById = function (id) {
            var existingUser = this.getById(id);
            return !!existingUser;
        },
        this.getByName = function (name) {
            var user = this.items.find(function (currentUser) {
                return currentUser.name == name;
            });
            return user;
        },
        this.getById = function (id) {
            var user = this.items.find(function (currentUser) {
                return currentUser.id == id;
            });
            return user;
        },
        this.delete = function (user) {
            var userIndex = this.items.findIndex(function (currentUser) {
                return currentUser.id == user.id;
            });
            return this.items.splice(userIndex, 1);
        },
        this.edit = function (newUser) {
            this.getById(newUser.id).update(newUser);
        }
};