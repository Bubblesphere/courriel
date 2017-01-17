function UserList() {
    this.items = [],
        this.size = function () {
            return this.items.length;
        },
        this.add = function (user) {
            this.items.push(user);
        },
        this.getById = function (id) {
            var user = this.items.find(function(currentUser){
                return currentUser.id == id;
            });
            return user;
        },
        this.deleteById = function (id) {
            
        },
        this.editUser = function (newUser) {
            this.getById(newUser.id).update(newUser);
        }
};