var newUser = new User({
    id: "asdf",
    name: "theName"
});
users.add(newUser);
console.log('allo', users.items);

newUser.name = "a name3";
users.edit(newUser);
console.log(users.items)


var otherUser = new User({
    id:"lkjdsalfj",
    name: "the NAME"
});

users.add(otherUser);



console.log("test getById", users.getById("lkjdsalfj"));

users.delete(otherUser);

console.log("test delete", users);

