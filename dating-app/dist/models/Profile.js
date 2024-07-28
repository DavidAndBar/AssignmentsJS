"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
class Profile {
    constructor(user, age, bio) {
        this.user = user;
        this.age = age;
        this.bio = bio;
        this.interests = [];
    }
    addInterest(interest) {
        this.interests.push(interest);
    }
    getInterests() {
        return [...this.interests];
    }
    match(otherProfile) {
        const commonInterests = this.interests.filter(interest => otherProfile.interests.includes(interest));
        return commonInterests.length;
    }
}
exports.Profile = Profile;
