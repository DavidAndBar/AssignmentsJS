"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatingService = void 0;
const User_1 = require("../models/User");
const Profile_1 = require("../models/Profile");
const Message_1 = require("../models/Message");
const MatchMaker_1 = require("../models/MatchMaker");
class DatingService {
    constructor() {
        this.users = [];
        this.profiles = [];
        this.messages = [];
    }
    createUser(name, email, password) {
        const id = this.users.length + 1;
        const user = new User_1.User(id, name, email, password);
        this.users.push(user);
        return user;
    }
    createProfile(user, age, bio) {
        const profile = new Profile_1.Profile(user, age, bio);
        this.profiles.push(profile);
        return profile;
    }
    sendMessage(sender, recipientId, content) {
        const recipient = this.users.find(u => u.id === recipientId);
        if (recipient) {
            const message = new Message_1.Message(sender, recipient, content);
            this.messages.push(message);
            return message;
        }
        return null;
    }
    getMessages(userId) {
        return this.messages.filter(m => m.recipient.id === userId || m.sender.id === userId);
    }
    findMatches(profile, minScore) {
        return MatchMaker_1.MatchMaker.findMatches(profile, this.profiles, minScore);
    }
}
exports.DatingService = DatingService;
