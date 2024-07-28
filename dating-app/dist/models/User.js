"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    verifyPassword(inputPassword) {
        return this.password === inputPassword;
    }
}
exports.User = User;
