function UserList() {
    var classScope = this;
    this.items = []
    this.size = function () {
        return this.items.length;
    }
    this.add = function () {
        arguments = Array.from(arguments);
        arguments.clean(undefined);
        addUsers(arguments);
    }
    function addUsers(users) {
        users.forEach(function (user) {
            if (classScope.existsByName(user.name)) {
                var exception = new Exception({
                    isError: true,
                    text: "A user with the name " + user.name + " exists already in the list of users."
                });
                exceptionHandler.add(exception);
            }

            if (exceptionHandler.list.length == 0)
                classScope.items.push(user);

            exceptionHandler.log();
        });
    }
    this.existsByName = function (name) {
        var existingUser = this.getByName(name);
        return !!existingUser;
    }
    this.existsById = function (id) {
        var existingUser = this.getById(id);
        return !!existingUser;
    }
    this.getByName = function (name) {
        var user = this.items.find(function (currentUser) {
            return currentUser.name == name;
        });
        return user;
    }
    this.getById = function (id) {
        var user = this.items.find(function (currentUser) {
            return currentUser.id == id;
        });
        return user;
    }
    this.delete = function (user) {
        var userIndex = this.items.findIndex(function (currentUser) {
            return currentUser.id == user.id;
        });
        return this.items.splice(userIndex, 1);
    }
    this.edit = function (newUser) {
        this.getById(newUser.id).update(newUser);
    }

};