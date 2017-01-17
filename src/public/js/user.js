function User (user) { 
    var guid = new Guid();
    this.objectType = "user",
    this.id = guid.create(),
    this.name = user.name,
    this.update = function(newUser){
        this.name = newUser.name;
    }
}