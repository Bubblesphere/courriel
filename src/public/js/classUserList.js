function UserList() {
    this.users = [],
        this.size = function () {
            return this.users.length;
        },
        this.addUser = function (user) {
            this.users.push(user);
        },
        this.getUserById = function (id) {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].id == id) {
                    return this.users[i];
                }
            }
            return null;
        }
    // modify
    // delete
};