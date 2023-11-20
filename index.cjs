"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var createUser = function () {
    var users = [];
    for (var i = 0; i < 10; i++) {
        var user = {
            id: i,
            pin: 1000 + i,
            name: faker_1.faker.person.fullName(),
            accountNumber: Math.floor(10000000 * Math.random() * 80000),
            balance: 100000 * i
        };
        users.push(user);
    }
    return users;
};
var users = createUser();
console.log(users);
