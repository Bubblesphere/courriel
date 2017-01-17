function UserList() {
    this.items = [],
        this.size = function () {
            return this.items.length;
        },
        this.add = function () {
            arguments = Array.from(arguments);
            var classScope = this;
            arguments.forEach(function (user) {
                if (classScope.existsByName(user.name)) {
                    console.error("User exists with the name " + user.name);
                } else {
                    classScope.items.push(user);
                }
            });
        },
        this.existsByName = function (name) {
            var existingUser = this.getByName(name);
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